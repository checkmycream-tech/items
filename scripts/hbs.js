const fs = require('fs');
const handlebars = require('handlebars');
const { root } = require('./config');

const hbs = {
    render(data, name) {
        const template = fs.readFileSync(`${root}/scripts/${name}.hbs`).toString();
        console.log({ template });
        return handlebars.compile(template)(Object.assign( {}, data));
    },
};

module.exports = hbs;
