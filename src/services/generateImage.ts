import { fileURLToPath } from 'url'
import path from 'path'
import Jimp from 'jimp'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const pathImage = path.join(__dirname, '../img/universe.png')

export const imageManipulated = async () => {
  const font = await Jimp.loadFont(Jimp.FONT_SANS_128_WHITE)
  Jimp.read(pathImage).then((img) => {
    img
      .print(
        font,
        1300,
        1000,
        `
        Nome: Eduardo Campos \n
        Naturalidade: Brasileiro
        `
      ) //print == renderização da imagem
      .flip(false, false)
      .blur(10) //
      .opacity(1) // a opacidade da imagem pode ser definada entre 0 e 1, por exemplo: 0.75 é um valor valido.
      .quality(100)
      .resize(900, 600) // redimensionamento de imagem definido por 2 parametros, em cada um deve-se passar o valor em pixels.
      .clone()
      .circle()
      .write(path.join(__dirname, '../img/new-universe.png')) // definindo o caminho de saida da imagem manipulada.
  })
}
