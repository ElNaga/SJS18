const apiInfo = require('../API.json');
const formData = require('form-data');
const Mailgun = require('mailgun.js');




const mailing =  async (req, res) => {
    // code goes here

    try {

        const mailgun = new Mailgun(formData);

        const v = new Validator(req.body, {
            "from": 'required|email',
            "to": 'required|email',
            "subject": 'required|string',
            "html": 'string'
        });
        console.log('this is request: ', req.body)
        console.log(v);
        const matched = await v.check();

        if (!matched) {
            res.status(400)
            console.log('this', v.errors);
        } else {
            const mg = mailgun.client({
                username: 'api',
                key: apiInfo.api_key
            });
            let out = await mg.messages.create(apiInfo.domain,
                req.body
            )

            console.log(out);
            return res.send('ok');
        }
    }

    catch (err) {
        if (err) {
            console.log(err)
        }
    }
};

module.exports = {
    mailing
}