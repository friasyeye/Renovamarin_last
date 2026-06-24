// Downloads all Maravilla assets to public/. Full-resolution (no query params).
import { mkdir, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';

const BASE = 'https://framerusercontent.com/';
const OUT = 'public';

const images = [
  'images/hjRHPXLbMYGLDbASaD3OixkHUeE.png',
  'images/6FbTY3JIsbASOUKoQPyq1X6moU.png',
  'images/wwU36NUnvKHYuSI2QnLxeZHsb0.png',
  'images/3ItuBk29QAByuliEUbnZUdMgA.jpg',
  'images/qMYzo2dfUWiyAhrB7twrKN5aro.jpg',
  'images/NP424SHltVvioI9H63eQtZDsBew.jpg',
  'images/H0aVztE3Z5a5GVXgXSPrAB9c4I.jpg',
  'images/gB71IobqQuj3tQhUiknsKr1iPQ.png',
  'images/OF009ODUbxuIxPFArAbCQMBkHU.png',
  'images/UHb6Pztex0Ld5MfZLOhHFeTuE.png',
  'images/JF5waywXT0Bmi8Daw9TooQ6J0I4.png',
  'images/qyjZQ3zrZSqwh6UXobyb2HHUw.jpg',
  'images/aOcFm0Fx9tWrBJiZ5bRRsUypf8.png',
  'images/llCociSJWSzl1MclDWYy7rL1Lw.png',
  'images/6bkpnIfzi0dlHnMPK7HwjNMgS0.png',
  'images/rnwBVKT8xxOt4BAbsYRJoSdY098.jpg',
  'images/eOrYyQyU3BUZEeOHE4LSrEDxdgs.png',
  'images/QWiib2U8lYNNaRYdyXcqyfmKQ.png',
  'images/jKHoBI7wzjeYXHx1W6uqwGJpO9o.png',
  'images/SuZD6QlRB7X8jbGJPsRmLc7w.png',
  'images/CwfvIeP8t10aPBZWZPDUNU04D8.png',
  'images/9KtkeCdEZAMAANBNOS6w3nDu9E.png',
  'images/iDWglFBmEbS0WvxMcREX66x6E.png',
  'images/hynZItQ23EhInLdXKnOiDWsftM.png',
  'images/8jmc4pa52nV688vvKvkiGVXU.png',
  'images/njIDCb4lxSqe45tKEMz0zdxtU0.png',
  'images/WGaUY0zijtJZiptiQIVkOBszkmg.png',
  'images/cXCahBHU2nTs2upy6qwF66Hhgc.png',
  'images/jHLdFKmOFMj2FRqGN2gTRJXrWE.png',
  'images/a1lIuaJAcaagQlks0xih1rIeNf0.png',
  'images/OWaFruzq7hqCZWA1kBjGSwjuLFE.png',
  'images/kXlZz9g2w8Nbx61OnKuVDw2NxUo.png',
  'images/sA5OvSogFlscTYH2aCXWajoxgAY.png',
  'images/HyGKHwFKT30bYze5udpc9ddciU.png',
  'images/Wssi6Mm0lGVuvaxnY8GImh5o8k4.png',
  'images/Gn7vHcxUq7PDpn0t7ke5MTPLPS8.png',
  'images/elcHVcnDTahjkoXfpAVWsjJFZRg.png',
  'images/lOFUodZU9vVVdyVZhnqJi3Z7rk.png',
  'images/lnDpqRTlc9dpM55R8PUu4occ90.png',
  'images/eOcbSQl8FHmbxa29eTBDeaNWcA.png',
  'images/uEJ7DuWTc1K7RfOj6J04XAxmnQ.png',
  'images/D4yAO93x2fQ1Ge7xjNcYAKgubMQ.png',
  'images/OUe3P5oWeP4DlLzRYeOr1L5xPCQ.png',
  'images/mcBaXVPTeFtXcVkImRjYTd0MU88.png',
  'images/zjzpRqgi0hyC8y7IvSzXkws.png',
  'images/hfBVsgiUQfOiy4IaA42ugGhWY4A.jpg',
  'images/yYA8uETcPYFy1bCEpIY5GxZGWBc.jpg',
  'images/DpwbaSBLVglrqoVZskTd8vUnWNM.jpg',
  'icon/icon_32.png',
];

const videos = [
  'assets/YSAjTpAXWf5dKjXlHhO9QLJ1kO8.mp4',
  'assets/4qFn1E4Qr2SgEglIXimZM1icjQ.mp4',
];

const favicon = ['images/rL3xTmP2lgu72fbUlLFhDYttp8.png'];

async function download(path, destSub) {
  const url = BASE + path;
  const dest = join(OUT, destSub, path.split('/').pop());
  try {
    const res = await fetch(url);
    if (!res.ok) { console.error('FAIL', res.status, url); return false; }
    const buf = Buffer.from(await res.arrayBuffer());
    await mkdir(dirname(dest), { recursive: true });
    await writeFile(dest, buf);
    console.log('OK', dest, (buf.length / 1024).toFixed(0) + 'KB');
    return true;
  } catch (e) { console.error('ERR', url, e.message); return false; }
}

async function batch(list, destSub) {
  for (let i = 0; i < list.length; i += 4) {
    await Promise.all(list.slice(i, i + 4).map((p) => download(p, destSub)));
  }
}

await batch(images, 'images');
await batch(videos, 'videos');
await batch(favicon, 'seo');
console.log('DONE');
