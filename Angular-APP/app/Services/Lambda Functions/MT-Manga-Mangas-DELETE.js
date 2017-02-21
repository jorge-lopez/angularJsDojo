'use strict';
console.log('starting function');

const AWS = require('aws-sdk');
const docClient =  new AWS.DynamoDB.DocumentClient({region: 'us-west-1'});

exports.handler = (event, context, callback) => {

console.log(event.MangaId);   
    
var params = {
  TableName : 'MT-Manga-Manga',
  Key: {
    id: event.MangaId
  }
};
    
docClient.delete(params, function(err, data) {
    if (err) {
        callback(err,null);
        console.log(err);
    }
    else{
        callback(null,event.MangaId);
        console.log(data);
    }
});
   // callback(null, 'Hello from Lambda');
   
};