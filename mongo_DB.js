
// use testDB // Skapa en databas

// // Skapa ett konto till databasen
// db.createUser({
//     user: 'unsername',
//     pwd: 'password',
//     roles: ['readWrite','dbAdmin']
// }); 

// // Skapa en tabell i databasen
// db.createCollection('testCollection');

// // Sätt in innehåll i tabellen
// db.testCollection.insert( {name: value} || [{ name: value }] );

// // Hitta innehåll i tabellen
// db.testCollection.find( { name: value } );

var express = require('express');
var router  = express.Router();
var mongo   = require('mongodb');
var assert  = require('assert');

console.log()