const limiters = require('../pkg/limiters')

const upload = async (req, res) => {

    //limit entries, because stringify->parse to JSON of images(large data files) takes too much resources/time
    //probabply wont use json to store images
    if (Object.entries(req.files).length >10) {
        return res.status(413).send('Error 413! Payload too large!');
    }
    console.log('Upload... Files less then 10... Continue');
    // let files4U = JSON.parse(JSON.stringify(req.files))
    let numOfFiles = Object.keys(req.files).length;

    for (const property in req.files) {
        // console.log(`${property}: ${req.files[property].size}`);
        if(req.files[property].size >= 10485760){
            return res.status(413).send('Error 413! Payload too large!');
        }
      }

    for (const property in req.files) {
        // console.log(`${property}: ${req.files[property].size}`);
        if(  !limiters.getImageTypes().includes(req.files[property].mimetype) ){
            return res.status(415).send('Error 413! Unsupported Media Type!');
        }
        await req.files[property].mv(`${__dirname}/../uploads/${req.files[property].name}`)
      }
      
    // for (const key of keys) {
    //     console.log(req.files.key)
    // }
    // if(req.files[0].size >= limiters.getSizeLimit()) {
    //     return res.status(413).send('Error 413! Payload too large!')
    // }

    // console.log(req.files)
  
    // await req.files.slika.mv(`${__dirname}/../uploads/${req.files.slika.name}`)
    console.log(`Uploaded ${numOfFiles} file/files.`)
    return res.send('OK');
}
const download = async (req, res) => {
    return res.send('OK');
}

module.exports = {
    upload,
    download
}