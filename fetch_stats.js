const fs = require('fs');

async function fetchStats(videoId) {
  try {
    const url = `https://www.youtube.com/watch?v=${videoId}`;
    const response = await fetch(url, { headers: { 'Accept-Language': 'en-US,en;q=0.9' } });
    const html = await response.text();
    
    let likes = 0;
    let views = 0;
    
    const ytInitialDataMatch = html.match(/var ytInitialData = (\{.*?\});<\/script>/);
    if (ytInitialDataMatch) {
      const dataStr = ytInitialDataMatch[1];
      
      // We can use a simple regex on the string representation to find the views and likes text
      const likesMatch = dataStr.match(/"factoid":\{"factoidRenderer":\{"value":\{"simpleText":"([^"]+)"\}/);
      if (likesMatch) {
        let likesStr = likesMatch[1]; // e.g. "4.1K" or "12"
        likesStr = likesStr.replace(/,/g, '');
        if (likesStr.endsWith('K')) likes = parseFloat(likesStr) * 1000;
        else if (likesStr.endsWith('M')) likes = parseFloat(likesStr) * 1000000;
        else likes = parseInt(likesStr);
      }
      
      const viewsMatch = dataStr.match(/"viewCount":\{"videoViewCountRenderer":\{"viewCount":\{"simpleText":"([^"]+)"\}/);
      if (viewsMatch) {
        let viewsStr = viewsMatch[1]; // e.g. "1,234 views"
        viewsStr = viewsStr.replace(/\D/g, ''); // strip out non-digits
        views = parseInt(viewsStr);
      }
    }
    
    // Fallbacks if regex on ytInitialData fails
    if (views === 0) {
      const vMatch = html.match(/"viewCount":"(\d+)"/);
      if (vMatch) views = parseInt(vMatch[1]);
    }
    
    return { views, likes };
  } catch(e) {
    console.error(e);
    return { views: 0, likes: 0 };
  }
}

async function main() {
  const result = await fetchStats('WUEQnAbOwY8');
  console.log(result);
}

main();
