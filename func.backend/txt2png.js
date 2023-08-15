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



  function canvasx(color, i, text) {
   fs.writeFileSync('./src/frames/frame' + i + '.png', text2png(wordWrap(text, 1000), randomChoice([{
			font: '145px attp1',
			localFontPath: './src/attp1.ttf',
			localFontName: 'attp1',
			color: color,
			strokeWidth: 2,
			strokeColor: 'black',
			textAlign: 'center',
			lineSpacing: 5,
			padding: 110,
			backgroundColor: 'black',
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
        
          
 module.exports = { canvasx }         