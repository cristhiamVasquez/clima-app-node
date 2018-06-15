const axios = require('axios');

const getClima = async(lat, lng) => {

    let resp = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=cb567e39a452b4bcf488c8fd1c180310`)

    return (`La temperatura actual es: ${resp.data.main.temp}°c`);
}


module.exports = {
    getClima
}