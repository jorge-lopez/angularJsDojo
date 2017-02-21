'use strict';
console.log('starting function');

const AWS = require('aws-sdk');
const docClient =  new AWS.DynamoDB.DocumentClient({region: 'us-west-1'});

exports.handler = (event, context, callback) => {

console.log(event.MangaId);    
console.log(event.MangaGenres);    
    
var params = {
  TableName: 'MT-Manga-Manga',
  Key: { id : event.MangaId },
  UpdateExpression: 'set #b = :x',
  ConditionExpression: '#a = :y',
  ExpressionAttributeNames: {'#a' : 'id','#b' : 'Genres'},
  ExpressionAttributeValues: {
    ':x' : event.MangaGenres,
    ':y' : event.MangaId
  }
};
    
docClient.update(params, function(err, data) {
   if (err) console.log(err);
   else console.log(data);
});
   // callback(null, 'Hello from Lambda');
   
};