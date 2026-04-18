import fs from 'fs';
fetch('https://images.unsplash.com/photo-1615598583492-96cb3e6ac222?q=80&w=1200&auto=format&fit=crop', {
  headers: { 'User-Agent': 'Mozilla/5.0' }
})
  .then(res => res.arrayBuffer())
  .then(buffer => {
    fs.writeFileSync('public/cover.jpg', Buffer.from(buffer));
    console.log('Size:', buffer.byteLength);
  });
