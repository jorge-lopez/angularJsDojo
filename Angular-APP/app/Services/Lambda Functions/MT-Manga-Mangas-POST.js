'use strict';
console.log('starting function');

const AWS = require('aws-sdk');
const docClient =  new AWS.DynamoDB.DocumentClient({region: 'us-west-1'});

exports.handler = (event, context, callback) => {

    console.log(event.MangaId);  
    console.log(event.MangaTitle); 
    console.log(event.MangaGenres);    
    
    
    
    var params = {
      TableName : 'MT-Manga-Manga',
      Item: {
         id: event.MangaId,
         title: event.MangaTitle,
         Genres: event.MangaGenres,
         GenresN: []
      }
    };
    
    docClient.put(params, function(err, data) {
      if (err) console.log(err);
      else console.log(data);
    });
    
   // callback(null, 'Hello from Lambda');
};