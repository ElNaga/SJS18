const user = require("../pkg/user");
const bcrypt = require('bcryptjs')
const config = require('../pkg/config')
const jwt = require('jsonwebtoken')




const login = async (req, res) => {
    try {
        // payload body: {email, password}
        let u = await user.findByEmail(req.body.email)
        if (!u) {
            return res.status(400).send('Error: 400. Bad request. Bad login credentials!');
        };

        //proveri lozinka. Aj kazi lozinka? - Lozinka. - Vidi go ja znae be...
     if (!bcrypt.compareSync(req.body.password, u.password)) {
        return res.status(400).send('Error: 400. Bad request. Bad login credentials!');
     };

     //ako proshla lozinka daj mu token so payload
     // gen token so payload {_id, email, name}
     payload = {
        uid: u._id,
        email: u.email,
        name: u.name
     }
     let token = jwt.sign(payload, config.get("service").jwt_secret);
     return res.status(200).send({token});

    } catch (err) {
        if (err) {
            console.log(err)
            return res.status(500).send('Internal Server Error! Error: 500')
        }
    }
    
};
const create = async (req, res) => {
    // payload req.body {
    //     email,
    //     name,
    //     pass1,
    //     pass2,
    // }
    try {
        // proveri dali pass1 e = so pass2
        if ( 
            req.body.password.trim().length===0 
            || req.body.password !== req.body.password2
        ) { return res.status(400).send('Error 400. Bad request!') }

        // Proveri dali postoi user vo DB
        let u = await user.findByEmail(req.body.email);
        if(u) {
            return res.status(40).send('Error 409. Conflict!');
        };

        //hash na lozinka i zapishi vo REQ.BODY.PASSWORD za posle da pratish samo body
        req.body.password = bcrypt.hashSync(req.body.password)

        //zapishi go userot
        let usr = user.create(req.body);

        console.log('-------this is from create account------------');
        console.log(usr);
        console.log(req.body);
        console.log('-------EOL---------------------------');
        console.log('-------EOL---------------------------');
        
        return res.status(201).send(usr);
        
    } catch (error) {
        if (error) {
            console.error(error);
            return res.status(500).send("Error 500. Internal Server Error!");
        }
    }
};


module.exports = {
    login,
    create
}