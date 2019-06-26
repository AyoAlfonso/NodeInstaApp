// With these variables I will be grabbing the resources I need
var express = require('express');
var app     = express();
var ig      = require('instagram-node').instagram();


// WIth this line I tell node where to look for site resources
app.use(express.static( __dirname + '/public'));


app.set('view engine', 'ejs');

// I got my access token and then configured the instagram app 
ig.use({
  access_token: '34246SS7781.1677ed0.f53ae66d44a547f99fb916ec703ad726',
});


app.get('/', function(req, res) {

   
    ig.user_self_media_recent(function(err, medias, pagination, remaining, limit) {


        res.render('pages/index', { grams: medias });
    });

});

app.listen(8080);
console.log('App started! Look at http://localhost:8080');
