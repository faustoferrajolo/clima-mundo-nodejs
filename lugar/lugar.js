const axios = require('axios');


const getLugarLatLng = async(dir) => {

    const encodeURL = encodeURI(dir);

    const instance = axios.create({
        baseURL: `http://api.weatherstack.com/current?access_key=10ace8407b90ab7b6d120d56eea9bebc&query=${encodeURL}`
            //headers: {'X-RapidAPI-Key': 'YrIv9XHJxmmshCBitpg1YTAnahQSp1KbdHhjsnSBU1hvMDMlzK'}
    });

    const resp = await instance.get();

    if (resp.data.location.length === 0) {
        throw new Error(`No hay resultados para ${ dir }`);
    }

    const data = resp.data.location;
    const direccion = data.name;
    const lat = data.lat;
    const lng = data.lon;


    return {
        direccion,
        lat,
        lng
    }
}


module.exports = {
    getLugarLatLng
}