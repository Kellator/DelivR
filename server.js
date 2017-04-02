var express = require('express');
var request = require('request');
var app = express();
var cors = require('cors');
app.use(cors());

const tokenUrl = "https://api.yelp.com/oauth2/token?client_id=F1GjwxdHmDgOyEQnFkrOdg&client_secret=6VupwbF7anbAd8yHZYbl9CDDQDFzzmORu2al1E3JkqaI1HSvGEqFSLT6M8VDpLZp&grant_type=client_credentials"; 
// const tokenUrl = 'https://api.yelp.com/oauth2/token';
// enables pre-flight accross the board
app.options('*', cors()); 
// client app calls server and server makes a request to the remote resource.
app.post('/login', function(req, res, next) {
    var url = tokenUrl;
    req.pipe(request(url)).pipe(res);
});
app.listen((process.env.PORT || 3030), function () {
    console.log('CORS-enabled web server listening on port 3030')
});
console.log('server started')