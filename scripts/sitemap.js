const fs = require('fs');
const { Sitemap } = require('sitemap')

const files = fs.readdirSync('../docs/products');

console.log(files);

const sm = new Sitemap({
    urls: files.map(x => (`/products/${x}`)),
    hostname: 'https://products.checkmycream.com',
    cacheTime: 0, // default
    level: 'warn', // default warns if it encounters bad data
    lastmodDateOnly: false // relevant for baidu
})
const sitemap1 = sm.toString() // returns the xml as a string

fs.writeFileSync('./sitemap.xml', sitemap1);
