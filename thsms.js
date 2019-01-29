/**
 * @version 1.0
 * @author Xeleniumz Fx
 * @type require  ES5 ,ES6
 * @module convert from https://thsms.com/api
 */


import rp from 'request-promise-native';

let xmlParser = require("xml2js").parseString;
let opts = {
    uri: `http://www.thsms.com/api/rest`,
    qs: {
        username: '',
        password: '',
        from:'',
    }
};

const thsms = {

       getCredit: async(req, res)=> {
        
        opts.qs.method = 'credit';
        rp(opts).then(r =>{
            xmlParser(r, (err, resp) => {
                res.status(200).json(resp.service.credit);
            })
        }).catch(er => console.log(er));
        
    },

    sendMessage: async (req, res) => {

        opts.qs.method = `send`;
        opts.qs.from = '';
        opts.qs.to = '';
        opts.qs.message = '';

        rp(opts).then( r => {
            xmlParser(r, (err, resp) => {
                res.status(200).json(resp);
            });
        }).cacth(er => console.log(er));
    },
      
}
export default thsms;
