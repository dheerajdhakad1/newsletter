const express = require("express");
const router = express.Router();
const app = express();
const http = require("https");
app.use(express.json())
router.post("/subscribe", (req, res) => {

    const {fname , sname , email} = req.body
    console.log(fname,sname,email)
    const Data = {
        members: [
            {
                email_address: email,
                status: "subscribed",
                merge_fields:{
                "FNAME": fname,
	            "LNAME": sname
                }
            }
        ] 
    }
    const postdata = JSON.stringify(Data)
    
    const url = 'https://us22.api.mailchimp.com/3.0/lists/4daa6d4f7f'
    const options = {
        method: 'POST',
        auth: 'Dkboss:6bcd4ff42c66dad7eadd4fcad6115297-us22'
    }
    const request = http.request(url,options, function(response) {
        if(response.statusCode === 200){
            res.render("../views/success.ejs")
        }
        else{
            res.render("../views/failure.ejs")
        }
        response.on('data',function(data){
            console.log(JSON.parse(data))
        })
    })
    // request.write(postdata)
    request.end()
})

module.exports = router

// 6bcd4ff42c66dad7eadd4fcad6115297-us22
// 6bcd4ff42c66dad7eadd4fcad6115297-us22

// 4daa6d4f7f