import v1 from './assets/vinos/v1.jpeg'
import v2 from './assets/vinos/v2.jpeg'
import v3 from './assets/vinos/v3.jpeg'
import v4 from './assets/vinos/v4.jpeg'
import v5 from './assets/vinos/v5.png'
import v6 from './assets/vinos/v6.jpeg'
import w7 from './assets/vinos/w7.jpeg'
import w8 from './assets/vinos/w8.jpeg'
import w9 from './assets/vinos/w9.jpeg'
import w10 from './assets/vinos/w10.png'
import c11 from './assets/vinos/c11.jpeg'
import c12 from './assets/vinos/c12.jpeg'
import c13 from './assets/vinos/c13.jpeg'
import c14 from './assets/vinos/c14.jpeg'
import l15 from './assets/vinos/l15.jpeg'
import l16 from './assets/vinos/l16.jpeg'

const productos = [
    { id: '1', img:v1, name:'VINO PIZZORNO GOLDEN RESERVE ', category:'vuruguayos', origen:'Uruguay',tamBotella:'750ml', precio:'979', description:'Vino tinto de la bodega Pizzorno, con cepa Pinot noir.'},
    { id: '2', img:v2, name:'VINO JUAN CARRAU', category:'vuruguayos', origen:'Uruguay',tamBotella:'750ml', precio:'1770', description:'Vino tinto de la bodega Juan Carrau, con cepa Petit.'},
    { id: '3', img:v3, name:'VINO CORDERO CON PIEL DE LOBO ', category:'vargentinos', origen:'Mendoza, Argentina',tamBotella:'750ml', precio:'450', description:'Vino tinto de la bodega Mosquita muerta wines, con cepa Malbec.'},
    { id: '4', img:v4, name:'VINO FINCA DECERO', category:'vargentinos', origen:'Argentina',tamBotella:'750ml', precio:'2030', description:'Vino tinto de la bodega Finca decero, con cepa Syrah.'},
    { id: '5', img:v5, name:'VINO CASA ROJO EL GORDO DEL CIRCO', category:'vmundo', origen:'Rueda, España',tamBotella:'750ml', precio:'1590', description:'Vino blanco de la bodega casa rojo bodegas y viñedos, con cepa Verdejo.'},
    { id: '6', img:v6, name:'VINO MARCHESE ANTINORI CHIANTI ', category:'vmundo', origen:'Italia, Francia',tamBotella:'750ml', precio:'3150', description:'Vino tinto de la bodega Marchesi Antinori, con cepa Sangiovese.'},
    { id: '7', img:w7, name:'WHISKY DEWARS', category:'wblended', origen:'Escocia',tamBotella:'1l', precio:'4040', description:'Whisky Blended Escoces de 18 años.'},
    { id: '8', img:w8, name:'WHISKY JOHNNIE WALKER ICONS BLACK', category:'wblended', origen:'Escocia',tamBotella:'750ml', precio:'1750', description:'Whisky Blended Escoces, edicion especial Icons Black.'},
    { id: '9', img:w9, name:'WHISKY AMERICANO JACK DANIELS FIRE', category:'wbourbon', origen:'EEUU',tamBotella:'1l', precio:'2200', description:'Whisky Americano Bourbon de 1 Litro.'},
    { id: '10', img:w10, name:'WHISKY BUFFALO TRACE', category:'wbourbon', origen:'EEUU',tamBotella:'1l', precio:'3660', description:'Whisky Americano Bourbon de 1 Litro.'},
    { id: '11', img:c11, name:'PACK CERVEZAS ARTESANALES X 3', category:'cnacionales', origen:'Uruguay',tamBotella:'1500ml', precio:'429', description:'Contiene: Volcánica Dubbel 500 ml | Volcánica Blonde 500 ml | Volcánica Honey 500 ml.'},
    { id: '12', img:c12, name:'CERVEZA PATRICIA LATA', category:'cnacionales', origen:'Uruguay',tamBotella:'473ml', precio:'94', description:'Cerveza industrial Uruguaya rubia de estilo Lager'},
    { id: '13', img:c13, name:'CERVEZA STELLA ARTOIS GLUTEN FREE', category:'cimportadas', origen:'Belgica',tamBotella:'330ml', precio:'85', description:'Cerveza Belga libre de gluten.'},
    { id: '14', img:c14, name:'CERVEZA FULLERS INDIA PALE ALE', category:'cimportadas', origen:'Inglaterra',tamBotella:'500ml', precio:'349', description:'Cerveza industrial Inglesa, de estilo Ipa y color Rubia.'},
    { id: '15', img:l15, name:'LIMONCELLO VILLA MASSA', category:'licores', origen:'Sorrento, Italia',tamBotella:'700ml', precio:'1730', description:'Limoncello villa Massa.'},
    { id: '16', img:l16, name:'LICOR CAZANOVE MELON', category:'licores', origen:'Argentina',tamBotella:'700ml', precio:'520', description:'Licor Argentino de Melon.'},
]

export const getFetch = new Promise((resolve)=> {
    setTimeout(() => {
        resolve(productos)
    }, 2000);
})