import fs from 'fs';
import https from 'https';
const url = "https://images.pexels.com/photos/10182604/pexels-photo-10182604.jpeg?auto=compress&cs=tinysrgb&w=1200";

https.get(url, (res) => {
  if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
    https.get(res.headers.location, (res2) => {
      const file = fs.createWriteStream("public/cover.jpg");
      res2.pipe(file);
      file.on('finish', () => {
        file.close();
        console.log("Downloaded size:", fs.statSync("public/cover.jpg").size);
      });
    });
  } else {
    const file = fs.createWriteStream("public/cover.jpg");
    res.pipe(file);
    file.on('finish', () => {
      file.close();
      console.log("Downloaded size:", fs.statSync("public/cover.jpg").size);
    });
  }
});
