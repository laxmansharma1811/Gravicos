const fs = require('fs');

async function fetchChannelAbout() {
  try {
    const url = `https://www.youtube.com/@gravicos/about`;
    const response = await fetch(url, { headers: { 'Accept-Language': 'en-US,en;q=0.9' } });
    const html = await response.text();
    
    const ytInitialDataMatch = html.match(/var ytInitialData = (\{.*?\});<\/script>/);
    if (ytInitialDataMatch) {
       fs.writeFileSync('channel_about_data.json', ytInitialDataMatch[1]);
       console.log("Saved channel_about_data.json");
    }
  } catch(e) {
    console.error(e);
  }
}

fetchChannelAbout();
