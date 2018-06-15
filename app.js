const lugar = require('./lugar/lugar')
const clima = require('./clima/clima')

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        demand: true,
        desc: 'ingresar descripcion para ver el clima'
    }
}).argv;

let getInfo = async(direccion) => {

    try {

        let coors = await lugar.getLugarLatLng(argv.direccion);
        let temp = await clima.getClima(coors.lat, coors.lng);

        return `La temperatura actual de ${coors.direccion} es de ${temp}°c`;

    } catch (error) {
        console.log(`No se pudo determinar el clima en ${direccion}`);
    }


}

getInfo(argv.direccion)
    .then(resp => {
        console.log(resp);
    })
    .catch(e => {
        console.log(e);
    })

// lugar.getLugarLatLng(argv.direccion)
//     .then(resp => {
//         console.log(resp);
//     })
//     .catch(e => {
//         console.log(e);
//     });



// clima.getClima(-33.4488897, -70.6692655)
//     .then(temp => {
//         console.log(temp);
//     })
//     .catch(e => {
//         console.log(e);
//     })



///////INVENTO MIO////

// lugar.getLugarLatLng(argv.direccion)
//     .then(resp => {
//         let temperatura = clima.getClima(resp.lat, resp.lng);

//         console.log(temperatura);
//     })

//////////////////////////