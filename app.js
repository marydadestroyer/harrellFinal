var express = require('express');
var express = require('express');
var fetch = require('node-fetch');
var app = express();
var port = process.env.PORT || 3000;
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));
//global variables
var date ='';
var explanation ='';
var title ='';
var url = '';


//add your app get here for the home page '/'


app.get('/', function(req,res) {
	getData();
	res.render('index', {date: date, explanation: explanation, title: title, url: url});
});


    

function getData(){
    fetch('https://csuserversidewebdevfinal.herokuapp.com/')
    .then(res => res.json())
    .then(data => {
        date = data.date;
        explanation = data.explanation;
        title = data.title;
        url = data.url;

    }).catch(err =>{
	res.redirect('/error');
    });
    
     
}


app.listen(port, function () {
 });