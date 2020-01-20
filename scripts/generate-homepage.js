const fs = require('fs');
const parser = require('xml2json');

const hbs = require('./hbs');

const { root } = require('./config');

const xml = fs.readFileSync(`${root}/public/sitemap.xml`).toString();

const json = parser.toJson(xml);

const html = hbs.render({ links:  JSON.parse(json).urlset.url.map(x => x.loc) }, 'home')
console.log(html);

fs.writeFileSync(`${root}/public/home.html`, html);
// reading index file
const index = fs
    .readFileSync(`${root}/public/index.html`).toString();
if(!fs.statSync(`${root}/public/index_backup.html`)) {
    fs
        .writeFileSync(`${root}/public/index_backup.html`, index);
}

// writing index file
console.log('>>>>>>>>>>>>>>>>>>>>', index.includes('checkmycreamhomepage'))
fs
    .writeFileSync(`${root}/public/index.html`, index.replace('checkmycreamhomepage', html));
