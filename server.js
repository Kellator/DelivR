var express = require('express');
var request = require('request');
var app = express();

const tokenUrl = "https://api.yelp.com/oauth2/token?client_id=F1GjwxdHmDgOyEQnFkrOdg&client_secret=6VupwbF7anbAd8yHZYbl9CDDQDFzzmORu2al1E3JkqaI1HSvGEqFSLT6M8VDpLZp&grant_type=client_credentials"; 


// client app calls server and server makes a request to the remote resource.
app.post('/login', function(req, res) {
    var url = tokenUrl 
    res.pipe(request(url)).pipe(res);
});
app.listen(process.env.PORT || 3030);

