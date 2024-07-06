const langs = require('../langs')

async function getCountry(ip) {
    try {
        const apiRes = await fetch(`https://api.country.is/${encodeURIComponent(ip)}`)
        const data = await apiRes.json()
    
        for (const countryCode of langs.ES) {
            if (countryCode === data.country) {
                return 'ES';
            }
        }
    } catch (error) {
        console.log(error)
        return 'EN'
    }


    // Si no está en la lista de países de habla española, asumir que habla inglés
    return 'EN';
}

module.exports = {getCountry}