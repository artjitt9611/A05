const https = require('https');

const options = {
    hostname: 'localhost',
    port: 8080,
    path: '/fill?item=orange&quantity=5',
    method: 'GET'

}
const req = https.request(options,res =>{
    res.on('data',d => {
        process.stdout.write(d)
    })
})
req.on('error',err =>{
    console.log('error')
})
req.end();