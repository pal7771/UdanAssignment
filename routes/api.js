var express = require('express');
var router = express.Router();

const axios = require('axios')


let key = 'ec1000f012cd4f0bbfb44dd8b7108c75';

/* GET users listing. */
router.get('/', function(req, res, next) {
  
    axios.get(`http://newsapi.org/v2/everything?q=tesla&from=2021-01-08&sortBy=publishedAt&apiKey=${key}`)
    .then( (result) => {
        console.log(  result.data )
    })
    .catch( (error) => console.log(error));

    res.send('respond with a resource');
});
router.get('/sources/:sources', function(req, res, next) {
  
    const sources = req.params.sources;

    axios.get(`http://newsapi.org/v2/top-headlines?sources=${sources}&apiKey=${key}`)
    .then( (result) => {

        let ans = [];
        for( let item in result.data.articles ){
            console.log( result.data.articles[item] );
            let entry = {
                author: result.data.articles[item]["author"],
                title: result.data.articles[item]["title"],
                description: result.data.articles[item]["description"],
                publishedAt: result.data.articles[item]["publishedAt"]
            }

            ans.push( entry );
        }
        
        res.send( ans );
    })
    .catch((error) => error );
  
});

router.get('/query/:query', function(req, res, next) {
  
    const q = req.params.query;

    axios.get(`http://newsapi.org/v2/everything?q=${q}&from=2021-01-08&sortBy=publishedAt&apiKey=${key}`)
    .then( (result) => {

        let ans = [];
        for( let item in result.data.articles ){
            console.log( result.data.articles[item] );
            let entry = {
                author: result.data.articles[item]["author"],
                title: result.data.articles[item]["title"],
                description: result.data.articles[item]["description"],
                publishedAt: result.data.articles[item]["publishedAt"]
            }

            ans.push( entry );
        }
        
        res.send( ans );
    })
    .catch((error) => error );
  
});

router.get('/top-headline/', function(req, res, next) {

    let country = req.body.country;

    axios.get(`http://newsapi.org/v2/top-headlines?country=${country}&category=business&apiKey=${key}`)
    .then( (result) => {

        let ans = [];
        for( let item in result.data.articles ){
            // console.log( result.data.articles[item] );
            let entry = {
                author: result.data.articles[item]["author"],
                title: result.data.articles[item]["title"],
                description: result.data.articles[item]["description"],
                publishedAt: result.data.articles[item]["publishedAt"]
            }

            ans.push( entry );
        }
        
        res.send( ans );
    })
    .catch( (error) => console.log(error));

    
});


module.exports = router;
