import fs from 'fs';
import path from 'path';
import https from 'https';

const images = [
    { name: 'M_Sampath_Kumar.jpg', url: 'https://drive.google.com/uc?export=view&id=1kGh-XZ0Gon4vKAKzUxj9bIjOui0hBcd-' },
    { name: 'B_Sai_Eshwar.jpg', url: 'https://drive.google.com/uc?export=view&id=1EhhCS_hBwBa5V6iVZun9aBNCRWCWE4EZ' },
    { name: 'K_Durga_Sai.jpg', url: 'https://drive.google.com/uc?export=view&id=11F7QIxbF1NFq1gik88x2g87KH2IvQVGQ' },
    { name: 'S_Dhilliswari.jpg', url: 'https://drive.google.com/uc?export=view&id=1DmoWvb7DjvrNjOBLWba5nBfO_n1Osdhs' },
    { name: 'S_Yamini.jpg', url: 'https://drive.google.com/uc?export=view&id=120yPFtMrKgOuD42QhY-QsN_yPIVf_MlH' },
    { name: 'logo.png', url: 'https://drive.google.com/uc?export=view&id=1jg_jKBSZ9azxL7cx-uiQhPwhqzfOnAsB' }
];

const downloadImage = (url, filepath) => {
    return new Promise((resolve, reject) => {
        https.get(url, (res) => {
            if (res.statusCode === 302 || res.statusCode === 303) {
                downloadImage(res.headers.location, filepath).then(resolve).catch(reject);
                return;
            }
            if (res.statusCode !== 200) {
                reject(new Error(`Failed to download ${url}: ${res.statusCode}`));
                return;
            }
            const stream = fs.createWriteStream(filepath);
            res.pipe(stream);
            stream.on('finish', () => {
                stream.close();
                resolve();
            });
            stream.on('error', reject);
        }).on('error', reject);
    });
};

async function main() {
    for (const img of images) {
        const filepath = path.join('public', 'images', img.name);
        console.log(`Downloading ${img.name}...`);
        try {
            await downloadImage(img.url, filepath);
            console.log(`Saved ${img.name}`);
        } catch (err) {
            console.error(`Error downloading ${img.name}:`, err.message);
        }
    }
}

main();
