/**
 * module.exports so we can use this file as a function or class,
 * We inject (app, stripe) from server.js with that state, or properties
 */

module.exports = (app, stripe) => {

    // TODO, play around with the response data,
    //       and possibily find a way to return the exact length of the customers list. 


    app.get('/api/customers/all/:limit', (req, res) => {
        getCustomerData(req.params.limit)
            .then((result) => {
                let r = result.data.map(x => x)
                res.send(r)
            }).catch((err) => {
                res.send(err)
            })
    });

    app.get('/api/customers/all/email/:limit', (req, res) => {
        getCustomerData(req.params.limit)
            .then((result) => {
                let r = result.data.map(x => x.email)
                res.send(r)
            }).catch((err) => {
                res.send(err)
            })
    });


    //helper functions here :)
    getCustomerData = (limit) => {
        let options = {
            // default 3 if no supplied parameter
            limit: limit || 3
        }

        // returns a promise (callback), so we use the  .then .catch async operators
        return stripe.customers.list(options)

    }

}


