const axios = require('axios')
const cheerio = require('cheerio')

const mediafire = async (url) => {
const res = await axios.get(url) 
const $ = cheerio.load(res.data)
const hasil = []
const link = $('a#downloadButton').attr('href')
const tamanho = $('a#downloadButton').text().replace('Download', '').replace('(', '').replace(')', '').replace('\n', '').replace('\n', '').replace('                         ', '')
const seplit = link.split('/')
const nome = seplit[5]
tipo = nome.split('.')
tipo = tipo[1]
hasil.push({ nome, tipo, tamanho, link })
return hasil[0]
}


module.exports = mediafire