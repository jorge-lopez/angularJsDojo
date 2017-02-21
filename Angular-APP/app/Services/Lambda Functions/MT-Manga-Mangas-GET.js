'use strict';
console.log('starting function');

const AWS = require('aws-sdk');
const docClient =  new AWS.DynamoDB.DocumentClient({region: 'us-west-1'});

exports.handler = (event, context, callback) => {
    
    let scanningParameters = {
        TableName: 'MT-Manga-Manga',
        Limit: 100
    };
    
    docClient.scan(scanningParameters,function(err,data){
        if(err)
        {
            callback(err,null);
        }
        else
        {
            callback(null,data);
        }
    });
   // callback(null, 'Hello from Lambda');
   
};