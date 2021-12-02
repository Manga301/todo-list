const express = require('express');
const bodyParser = require('body-parser');
const app = express();

let items = ['Sample item'];

let workItems = [];

let personalItems = [];

// allows us to render ejs files
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));


app.get('/', function(req, res){
    
    
    let today = new Date();
    let options = {
        weekday: 'long',
        day: 'numeric',
        month: 'long'
    };

    let day = today.toLocaleString('en-US', options);

    // passing kindOfDay marker and giving the value of 'day' variable (ejs)
    res.render('list', {listTitle: day, newListItems: items});



});

// work list get
app.get('/work', function(req, res){
    res.render('list',{listTitle:'Work List', newListItems: workItems});
});

// personal list get
app.get('/personal', function(req, res){
    res.render('list', {listTitle: 'Personal List', newListItems: personalItems});
});

app.post('/', function(req, res){

    let item = req.body.newItem;

    if(req.body.list === 'Work'){
        workItems.push(item);
        res.redirect('/work');
    } else if(req.body.list === 'Personal'){
        personalItems.push(item);
        res.redirect('/personal');
    }else {
        items.push(item);
        res.redirect('/');
    }

    // console.log(req.body); // this gives us 'Work' uppercase, has to be clear in the if/else, lowercase won't work
    
});

app.listen(3000, function(){
    console.log('Server started at port 3000');
});