const fs = require('fs');

async function fetchChannelStats() {
  try {
    const url = `https://www.youtube.com/@gravicos`;
    const response = await fetch(url, { headers: { 'Accept-Language': 'en-US,en;q=0.9' } });
    const html = await response.text();
    
    fs.writeFileSync('channel_page.html', html);
    
    let subscribers = '0';
    let videos = '0';
    
    const ytInitialDataMatch = html.match(/var ytInitialData = (\{.*?\});<\/script>/);
    if (ytInitialDataMatch) {
       fs.writeFileSync('channel_data.json', ytInitialDataMatch[1]);
       console.log("Saved channel_data.json");
    }
  } catch(e) {
    console.error(e);
  }
}

fetchChannelStats();
