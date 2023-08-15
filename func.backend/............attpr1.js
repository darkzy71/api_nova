const wordwrap = require('word-wrapper')
const text2png = require('text2png')
const GIFEncoder = require('gifencoder')
const canvas = require('canvas')

exports.attpr1 = async (text) => {

	// Cria uma animação em GIF
	const attp = new GIFEncoder(512, 512)
	attp.start()
	attp.setRepeat(100)
	attp.setDelay(100)
	attp.setQuality(0)
	attp.setTransparent()

	// Cria uma imagem no canvas
	const canvaImage = canvas.createCanvas(512, 512);
	const ctx = canvaImage.getContext('2d')

	// Cores, se quiser adicionar mais use nomes em ingles
	const namecolor = [
'black',
'red'
	]

	// Gera varias imagens diferentes de cores diferentes e as transforma em GIF
	for (let color of namecolor) {
		let anitxt = await text2png(wordwrap(text, {
			width: 10
		}), {
    font: '100px attpr1',
   localFontPath: './src/attpr1.ttf',
   localFontName: 'attpr1',
			color: color,
			strokeWidth: 0,
			strokeColor: color,
			textAlign: 'center',
			lineSpacing: 50,
			padding: 50,
			backgroundColor: 'transparent',
			output: 'dataURL'
		})
		const avatar = await canvas.loadImage(anitxt)
		ctx.drawImage(avatar, 0, 0, canvaImage.width, canvaImage.height)
		attp.addFrame(ctx)
	}
	
	          function arrumartxt(str, maxWidth) {
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

	// Finaliza e retorna o GIF encodado para o envio
	attp.finish()
	return attp.out.getData()
}