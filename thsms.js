/**
 * @version 1.0
 * @author Xeleniumz Fx
 * @type require  ES5 ,ES6
 * @module convert from https://thsms.com/api
 */


import requestPromise from 'request-promise-native';


const apiUrl = `http://www.thsms.com/api/rest`;
const xmlParser = require("xml2js").parseString;
const sms = {
    username: ``,
    password: ``,
    from: ``,
};


const thsms = {

    async getCredit(req, res) {
        var options = {
            uri: apiUrl,
            qs: {
                method: `credit`,
                username: sms.username,
                password: sms.password
            }
        };

        var httpRequest = await requestPromise(options);
        xmlParser(httpRequest, (err, resp) => {
            res.json(resp.service.credit);
        });
    },

    async sendMessage(req, res) {
        var options = {
            uri: apiUrl,
            qs: {
                method: `send`,
                username: sms.username,
                password: sms.password,
                from: sms.from,
                to: req.mobileNumber,
                message: req.message
            }
        };

        var httpRequest = await requestPromise(options);
        xmlParser(httpRequest, (err, resp) => {
            res.json(resp);
        });



    },







}
export default thsms;
