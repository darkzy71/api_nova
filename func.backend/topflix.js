const axios = require("axios");
const cheerio = require("cheerio");


//topflix Download
const topflixdl = async (link) => {
 const res = await axios.get(link)
 const $ = cheerio.load(res.data)
 const breners = []
 let a = $('div.mvsingle-item.ov-item').find('a').attr('onclick')
 let b = a.replace("changePlayer('", '')
 let título = $('div.col-md-8.col-sm-12.col-xs-12').find('h1').text().trim();
 let linkdl = b.replace("'); return false;", '/')
 breners.push({
  título, linkdl
 })
 return breners
}

//TopFlix pesquisa
function topflix(nome) {
 return new Promise((resolve, reject) => {
  axios.get(`https://topflix.one/list/filmes/${nome}/`).then(tod => {
   const $ = cheerio.load(tod.data)
   var postagem = [];
   $("div.movie-item-style-2.col-xs-6.col-4.col-sm-3.col-lg-2").each((_, say) => {
    var nome = $(say).find("a").text().trim();
    var img = $(say).find("img").attr('data-src');
    var link = $(say).find("a").attr('href');
    var link2 = 'https://topflix.one'
    var resultado = {
     titulo: nome,
     img: img,
     link: link2 + link
    }
    postagem.push(resultado)
   })
   resolve(postagem)
  }).catch(reject)
 });
}

module.exports = {
 topflixdl,
 topflix
}