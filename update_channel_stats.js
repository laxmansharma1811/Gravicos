const fs = require('fs');

async function updateChannelStats() {
  try {
    const channelUrl = `https://www.youtube.com/@gravicos`;
    const aboutUrl = `https://www.youtube.com/@gravicos/about`;

    console.log("Fetching channel page...");
    const channelResp = await fetch(channelUrl, { headers: { 'Accept-Language': 'en-US,en;q=0.9' } });
    const channelHtml = await channelResp.text();

    console.log("Fetching about page...");
    const aboutResp = await fetch(aboutUrl, { headers: { 'Accept-Language': 'en-US,en;q=0.9' } });
    const aboutHtml = await aboutResp.text();

    let subscribers = '2.27K+';
    let videos = '140+';
    let totalViews = '270K+';

    // Parse channel page for subs and videos
    const ytInitChannel = channelHtml.match(/var ytInitialData = (\{.*?\});<\/script>/);
    if (ytInitChannel) {
        const channelData = JSON.parse(ytInitChannel[1]);
        const metadataRows = channelData?.header?.pageHeaderRenderer?.content?.pageHeaderViewModel?.metadata?.contentMetadataViewModel?.metadataRows;
        if (metadataRows && metadataRows[1] && metadataRows[1].metadataParts) {
            const parts = metadataRows[1].metadataParts;
            if (parts[0] && parts[0].text && parts[0].text.content) {
                subscribers = parts[0].text.content.replace(' subscribers', '');
            }
            if (parts[1] && parts[1].text && parts[1].text.content) {
                videos = parts[1].text.content.replace(' videos', '');
            }
        }
    }

    // Parse about page for total views
    const ytInitAbout = aboutHtml.match(/var ytInitialData = (\{.*?\});<\/script>/);
    if (ytInitAbout) {
        const aboutDataStr = ytInitAbout[1];
        const viewsMatch = aboutDataStr.match(/([0-9,]+) views/g);
        if (viewsMatch) {
            // Usually the last one is the total views, or the largest number
            const viewStrings = viewsMatch.map(s => s.replace(' views', '').replace(/,/g, ''));
            const viewNumbers = viewStrings.map(Number);
            const maxViews = Math.max(...viewNumbers);
            if (!isNaN(maxViews) && maxViews > 1000) {
                if (maxViews >= 1000000) {
                    totalViews = (maxViews / 1000000).toFixed(1) + 'M';
                } else if (maxViews >= 1000) {
                    totalViews = (maxViews / 1000).toFixed(1) + 'K';
                } else {
                    totalViews = maxViews.toString();
                }
            }
        }
    }

    const statsFilePath = './data/stats.ts';
    let statsContent = fs.readFileSync(statsFilePath, 'utf8');

    // Replace the values in the file
    statsContent = statsContent.replace(/subscribers:\s*'.*?'/, `subscribers: '${subscribers}'`);
    statsContent = statsContent.replace(/videos:\s*'.*?'/, `videos: '${videos}'`);
    statsContent = statsContent.replace(/totalViews:\s*'.*?'/, `totalViews: '${totalViews}'`);

    fs.writeFileSync(statsFilePath, statsContent);
    console.log(`Updated data/stats.ts with: Subs: ${subscribers}, Videos: ${videos}, Views: ${totalViews}`);

  } catch(e) {
    console.error(e);
  }
}

updateChannelStats();
