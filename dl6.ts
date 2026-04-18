import https from 'https';
import fs from 'fs';

const options = {
  hostname: 'upload.wikimedia.org',
  path: '/wikipedia/commons/thumb/c/ca/Shimao_Cross-Strait_Plaza.jpg/1200px-Shimao_Cross-Strait_Plaza.jpg',
  headers: {
    'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
    'Accept': 'image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8',
    'Accept-Language': 'en-US,en;q=0.9',
  }
};

https.get(options, (res) => {
  const file = fs.createWriteStream("public/cover.jpg");
  res.pipe(file);
  file.on('finish', () => {
    file.close();
    console.log("Downloaded size:", fs.statSync("public/cover.jpg").size);
  });
});
