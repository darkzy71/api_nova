const fetch = require('node-fetch')
const { ffmpeg } = require('./converter')

/**
 * Image to Webp
 * @param {String} url Image/Video URL
 */
 async function sticker(url) {
    if (url) {
      let res = await fetch(url)
      if (res.status !== 200) throw await res.text()
      img = await res.buffer()
    }
    return await ffmpeg(img, [
      '-vf', 'scale=512:512:flags=lanczos:force_original_aspect_ratio=decrease,format=rgba,pad=512:512:(ow-iw)/2:(oh-ih)/2:color=#00000000,setsar=1'
    ], 'jpeg', 'webp')
  }

 async function sticker2(img) {
    return await ffmpeg(img, [
      '-vf', 'scale=512:512:flags=lanczos:force_original_aspect_ratio=decrease,format=rgba,pad=512:512:(ow-iw)/2:(oh-ih)/2:color=#00000000,setsar=1'
    ], 'jpeg', 'webp')
  }



module.exports = { sticker };
