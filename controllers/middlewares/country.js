const { getCountry } = require('../../utils/functions/ip')

async function getPublicIp(req, res, next) {
    try {
        const clientCountry = await getCountry((req.headers['x-forwarded-for'] || req.connection.address().address).toString())
        console.log(clientCountry)
        req.url = req.url + clientCountry
    } catch (error) {
        console.log(error)
    } finally {
        next()
    }

}

module.exports = getPublicIp