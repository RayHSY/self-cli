const open = require('open');
const sites = require('./sites.json');

async function search(keyword, options) {
  await Promise.all(options.map(async option => {
  console.log("TCL: search -> option", option)
    if (option.name) {
      const url = sites[option.name].replace('$KEYWORD', keyword)
      await open(url)
    }
  }))
}

module.exports = search;