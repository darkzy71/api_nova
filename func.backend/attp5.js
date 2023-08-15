const fs = require('fs-extra');
const ffmpeg = require('fluent-ffmpeg');
const text2png = require('text2png');
const gm = require('gm');
const {spawn} = require('child_process');
const exec = require('child_process').exec;
const crypto = require('crypto')
const wordwrap = require('word-wrapper')

function randomChoice(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}


          const attp5 = (text) => new Promise((resolve, reject) => {
            try {
              canvasx('red', 0, text)
              canvasx('lime', 1, text)
              canvasx('blue', 2, text)
                exec('convert -delay 10 -loop 0 ./src/frames/*.png -scale 512x512 ./src/ttp.gif', (error, stdout, stderr) => {
              if (error) rejects(error)
                ffmpeg("./src/ttp.gif")
                  .on('error', function (err) {
                    console.error(err)
                  })
                  .on('end', async function () {
                    resolve('./src/attp.webp')
                  })
                  .toFormat('webp')
                  .save('./src/attp.webp')
              })
            } catch (error) {
              return reject(error)
            }
          })

  function canvasx(color, i, text) {
   fs.writeFileSync('./src/frames/frame' + i + '.png', text2png(wordWrap(text, 7), randomChoice([{
			font: '145px attp5',
			localFontPath: './src/attp5.ttf',
			localFontName: 'attp5',
			color: color,
			strokeWidth: 2,
			strokeColor: 'black',
			textAlign: 'center',
			lineSpacing: 5,
			padding: 110,
			backgroundColor: 'transparent',
            }])))
          }

          function wordWrap(str, maxWidth) {
            var newLineStr = "\n";
            done = false;
            res = '';
            while (str.length > maxWidth) {
              found = false;
              for (i = maxWidth - 1; i >= 0; i--) {
                if (testWhite(str.charAt(i))) {
                  res = res + [str.slice(0, i), newLineStr].join('')
                  str = str.slice(i + 1)
                  found = true;
                  break;
                }
              }
              if (!found) {
                res += [str.slice(0, maxWidth), newLineStr].join('')
                str = str.slice(maxWidth)
              }
            }
            return res + str;
          }

          function testWhite(x) {
            var white = new RegExp(/^\s$/)
            return white.test(x.charAt(0))
          }
        
          
 module.exports = { attp5 }         