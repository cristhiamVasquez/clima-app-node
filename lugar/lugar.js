const axios = require('axios');



const getLugarLatLng = async(direccion) => {

    let encodedUrl = encodeURI(direccion);

    let resp = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodedUrl}&key=AIzaSyCf54QP04xWzC6foiMLR3QU13K1cWfYhKo`)


    if (resp.data.status === 'ZERO_RESULTS') {
        throw new Error(`no hay resultados para la direccion ingresada: ${direccion}`)

    }

    //.then(resp => {

    let location = resp.data.results[0];
    let coors = location.geometry.location;
    //console.log(location.formatted_address);

    //console.log(`Direccion; ${location.formatted_address}`);
    //console.log(`Latitud: ${coors.lat}`);
    //console.log(`Longitud: ${coors.lng}`);
    //console.log(`Latitud: ${JSON.stringify(location.geometry.location.lat, undefined, 2)}`);
    //console.log(`Longitud: ${JSON.stringify(location.geometry.location.lng, undefined, 2)}`);

    //console.log(JSON.stringify(resp.data, undefined, 2));

    /*})
    .catch((e) => {
        console.log('ERORR!!!', e);
    })*/

    return {
        direccion: location.formatted_address,
        lat: coors.lat,
        lng: coors.lng
    }
}

module.exports = {
    getLugarLatLng
}