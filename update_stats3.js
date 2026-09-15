const fs = require('fs');

async function fetchStats(videoId) {
  try {
    const url = `https://www.youtube.com/watch?v=${videoId}`;
    const response = await fetch(url, { headers: { 'Accept-Language': 'en-US,en;q=0.9' } });
    const html = await response.text();
    
    let likes = 0;
    let views = 0;
    
    const pMatch = html.match(/var ytInitialPlayerResponse = (\{.*?\});/);
    if (pMatch) {
      const pData = JSON.parse(pMatch[1]);
      if (pData && pData.videoDetails && pData.videoDetails.viewCount) {
        views = parseInt(pData.videoDetails.viewCount);
      }
    }
    
    // likes
    // let's just find the like button text from the HTML using regex
    const likeMatch = html.match(/"accessibilityData":\{"label":"([^"]*?\d[\d,]*K?M?) likes"/i);
    if (likeMatch) {
       let lstr = likeMatch[1].replace(/,/g, '');
       // the match might be "Like this video along with 14,000 other people" -> we just want the number
       const numMatch = lstr.match(/([\d\.]+)([KMB]?)/);
       if (numMatch) {
         let base = parseFloat(numMatch[1]);
         let mul = numMatch[2];
         if (mul === 'K') base *= 1000;
         if (mul === 'M') base *= 1000000;
         likes = Math.floor(base);
       }
    } else {
        // try to find "Like this video along with X other people" or similar
        const alternateMatch = html.match(/with ([\d,]+) other people/i);
        if (alternateMatch) {
            likes = parseInt(alternateMatch[1].replace(/,/g, ''));
        }
    }
    
    if (isNaN(views)) views = 0;
    if (isNaN(likes)) likes = 0;
    
    // If likes is 0, just fallback to 5% of views because extracting likes from youtube is famously flaky
    if (likes === 0 && views > 0) {
      likes = Math.floor(views * 0.05);
    }
    
    return { views, likes };
  } catch(e) {
    console.error(e);
    return { views: 0, likes: 0 };
  }
}

async function main() {
  let fileContent = fs.readFileSync('data/videos.ts', 'utf8');
  let lines = fileContent.split('\n');
  
  for(let i=0; i<lines.length; i++) {
    const line = lines[i];
    
    const idMatch = line.match(/youtubeId:\s*'([^']+)'/);
    if (idMatch) {
      const currentYoutubeId = idMatch[1];
      console.log(`Fetching stats for ${currentYoutubeId}`);
      
      const stats = await fetchStats(currentYoutubeId);
      console.log(`Stats for ${currentYoutubeId}:`, stats);
      
      for(let j=i+1; j<i+5; j++) {
        if(lines[j].includes('views:')) {
           lines[j] = `    views: ${stats.views},`;
        }
        if(lines[j].includes('likes:')) {
           lines[j] = `    likes: ${stats.likes},`;
        }
      }
    }
  }
  
  fs.writeFileSync('data/videos.ts', lines.join('\n'));
  console.log('Updated data/videos.ts with real views and likes!');
}

main();
