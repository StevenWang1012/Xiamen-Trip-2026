import fs from 'fs';
fetch('https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Shimao_Cross-Strait_Plaza.jpg/1200px-Shimao_Cross-Strait_Plaza.jpg', {
  headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' }
})
  .then(res => {
    if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
    return res.arrayBuffer();
  })
  .then(buffer => {
    fs.writeFileSync('public/cover.jpg', Buffer.from(buffer));
    console.log('Downloaded file size:', buffer.byteLength);
  })
  .catch(err => console.error(err));
