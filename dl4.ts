import https from 'https';
import fs from 'fs';

const url = 'https://tse1.mm.bing.net/th?id=OIP.8oT1Xq8oZ2X1M4_o7e9yJQHaE7';
https.get(url, (res) => {
  const file = fs.createWriteStream("public/cover.jpg");
  res.pipe(file);
  file.on('finish', () => {
    file.close();
    console.log("Downloaded size:", fs.statSync("public/cover.jpg").size);
  });
});
