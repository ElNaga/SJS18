const strings = require('../../../pkg/strings');
const config = require('../../../pkg/config');

const upload = async (req, res) => {
    // let numOfFiles = Object.keys(req.files).length;
    
    // for (const property in req.files) {
        if(req.files.slika.size >= config.get("upload").sizeLimit){
            return res.status(413).send('Error 413! Payload too large!');
        }
        if(!config.get("upload").imageTypes.includes(req.files.slika.mimetype) ){
            return res.status(415).send('Error 415! Unsupported Media Type!');
        }

        let newName = strings.random(10) + "__" + req.files.slika.name;
        await req.files.slika.mv(`${__dirname}/../../../uploads/${newName}`);
        console.log(newName);
        const info = `${__dirname}/../uploads/${newName}`;
        res.status(201).send({fileLocation: info});
    //   }
};

const download = async (req, res) => {
    let filePath = `${__dirname}/../../../uploads/${req.params.file}`;
    res.download(filePath, req.params.file.split('__')[1]);
};

module.exports = {
    upload,
    download
};