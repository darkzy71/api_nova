const triggered = require('./src/photoshop/triggered.js');
const affect = require('./src/photoshop/affect.js');
const batslap = require('./src/photoshop/batslap.js');
const beautiful = require('./src/photoshop/beautiful.js');
const blur = require('./src/photoshop/blur.js');
const bnw = require('./src/photoshop/bnw.js');
const bolsonaro = require('./src/photoshop/bolsonaro.js');
const brightness = require('./src/photoshop/brightness.js');
const circle = require('./src/photoshop/circle.js');
const color = require('./src/photoshop/color.js');
const colorfy = require('./src/photoshop/colorfy.js');
const comunism = require('./src/photoshop/comunism.js');
const createQrCode = require('./src/photoshop/createQrCode.js');
const darkness = require('./src/photoshop/darkness.js');
const del = require('./src/photoshop/delete.js');
const dither = require('./src/photoshop/dither.js');
const facepalm = require('./src/photoshop/facepalm.js');
const fuse = require('./src/photoshop/fuse.js');
const gay = require('./src/photoshop/gay.js');
const invert = require('./src/photoshop/invert.js');
const jail = require('./src/photoshop/jail.js');
const kiss2 = require('./src/photoshop/kiss.js');
const magik = require('./src/photoshop/magik.js');
const pixelate = require('./src/photoshop/pixelate.js');
const replaceColor = require('./src/photoshop/replaceColor.js');
const rip = require('./src/photoshop/rip.js');
const rotate = require('./src/photoshop/rotate.js');
const sepia = require('./src/photoshop/sepia.js');
const stickbug = require('./src/photoshop/stickbug.js');
const spank = require('./src/photoshop/spank.js');
const trash = require('./src/photoshop/trash.js');
const threshold = require('./src/photoshop/threshold.js');
const wanted = require('./src/photoshop/wanted.js');
const wasted = require('./src/photoshop/wasted.js');

const cuddle = require('./src/gif/cuddle.js');
const feed = require('./src/gif/feed.js');
const hug = require('./src/gif/hug.js');
const kiss = require('./src/gif/kiss.js');
const pat = require('./src/gif/pat.js');
const poke = require('./src/gif/poke.js');
const slap = require('./src/gif/slap.js');
const tickle = require('./src/gif/tickle.js');

const choose = require('./src/functions/choose.js');
const pagination = require('./src/functions/pagination.js');
const formatSizeUnits = require('./src/functions/formatSizeUnits.js');
const randomCharacters = require('./src/functions/randomCharacters.js');
const randomHex = require('./src/functions/randomHex.js');
const getRandomInt = require('./src/functions/getRandomInt.js');
const removeAcents = require('./src/functions/removeAcents.js');
const shorten = require('./src/functions/shorten.js');
const uptime = require('./src/functions/uptime.js');

module.exports = {
    canvas: {
      triggered: triggered,
      affect: affect,
      batslap: batslap,
      beautiful: beautiful,
      blur: blur,
      bnw: bnw,
      bolsonaro: bolsonaro,
      brightness: brightness,
      circle: circle,
      color: color,
      colorfy: colorfy,
      comunism: comunism,
      createQrCode: createQrCode,
      darkness: darkness,
      del: del,
      dither: dither,
      facepalm: facepalm,
      fuse: fuse,
      gay: gay,
      invert: invert,
      jail: jail,
      kiss: kiss2,
      magik: magik,
      pixelate: pixelate,
      replaceColor: replaceColor,
      rip: rip,
      rotate: rotate,
      sepia: sepia,
      stickbug: stickbug,
      spank: spank,
      trash: trash,
      threshold: threshold,
      wanted: wanted,
      wasted: wasted,
    },
    gif: {
      cuddle: cuddle,
      feed: feed,
      hug: hug,
      kiss: kiss,
      pat: pat,
      poke: poke,
      slap: slap,
      tickle: tickle,
    },
    choose: choose,
    pagination: pagination,
    formatSizeUnits: formatSizeUnits,
    getRandomInt: getRandomInt,
    randomCharacters: randomCharacters,
    randomHex: randomHex,
    removeAcents: removeAcents,
    shorten: shorten,
    uptime: uptime,
}