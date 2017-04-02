var express = require('express');
var request = require('request');
var app = express();

// const tokenUrl = "https://api.yelp.com/oauth2/token?client_id=F1GjwxdHmDgOyEQnFkrOdg&client_secret=6VupwbF7anbAd8yHZYbl9CDDQDFzzmORu2al1E3JkqaI1HSvGEqFSLT6M8VDpLZp&grant_type=client_credentials"; 
const tokenUrl = 'https://api.yelp.com/oauth2/token';

 
// client app calls server and server makes a request to the remote resource.
app.post('/login', function(req, res) {
    var url = tokenUrl;
    request(url, {
        'headers' : {            
            'grant_type' : 'client_credentials',
            'client_id' : 'F1GjwxdHmDgOyEQnFkrOdg',
            'client_secret' : '6VupwbF7anbAd8yHZYbl9CDDQDFzzmORu2al1E3JkqaI1HSvGEqFSLT6M8VDpLZp'  
        }   
    }
    ).pipe(res);
    console.log(req);
});
app.listen(process.env.PORT || 3030);
console.log('server started')

// 'Content-Type' : 'application/x-www-form-urlencoded',
//             'Access-Control-Allow-Origin' : '*',
//             'Access-Control-Allow-Methods' : 'PUT, GET, POST, DELETE, OPTIONS',
//             'Access-Control-Allow-Headers' : 'accept, content-type, x-parse-application-id, x-parse-rest-api-key, x-parse-session-token',  
//     res.setHeader({
//     'Access-Control-Allow-Origin' : '*',
//     'Access-Control-Allow-Methods' : 'PUT, GET, POST, DELETE, OPTIONS',
//     'Access-Control-Allow-Headers' : 'accept, content-type, x-parse-application-id, x-parse-rest-api-key, x-parse-session-token'
// }) 