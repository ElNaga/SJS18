const limiters = require('../pkg/limiters')
const strings = require("../pkg/strings")

const upload = async (req, res) => {
    try {
        if (Object.entries(req.files).length >10) {
            return res.status(413).send('Error 413! Payload too large!');
        }
        console.log('Upload... Files less then 10... Continue');
        let numOfFiles = Object.keys(req.files).length;
    
        for (const property in req.files) {
            if(req.files[property].size >= limiters.getSizeLimit()){
                return res.status(413).send('Error 413! Payload too large!');
            }
            if(!limiters.getImageTypes().includes(req.files[property].mimetype) ){
                return res.status(415).send('Error 415! Unsupported Media Type!');
            }

            let newName = strings.random(10) + "__" + req.files[property].name;
            await req.files[property].mv(`${__dirname}/../uploads/${newName}`);
            // res.send(`${newName}`)
            console.log(newName);
          }
          
      
        console.log(`Uploaded ${numOfFiles} file/files.`);
        return res.send('OK');
        
    } catch (error) {
       if (error) {
        console.log(error);
        return res.status(500).send('Internal Server Error');
       } 
    }

}
const download = async (req, res) => {

    let filePath = `${__dirname}/../uploads/${req.params.file}`
    // res.set("Content-Disposition", `inline;filename=${req.params.file.split("__")[1]}`);
    return res.download(filePath,req.params.file.split("__")[1]);
}

module.exports = {
    upload,
    download
}