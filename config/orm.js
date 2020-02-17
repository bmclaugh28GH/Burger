// **********************************************
// dependencies 
// **********************************************

var connection = require ("../config/connection.js");

// **********************************************
// helper functions 
// **********************************************

// **********************************************
// orm 
// **********************************************

var orm = {

   selectWhere: function (tableInput, col1, val1, cb){
      var qry = `select * from ${tableInput} where ${col1} = ${val1};`; 
      console.log (qry);
      connection.query (qry, function (err, result){
         if (err){throw err}; 
         cb (result);
      })
   },

   insertOne: function (tableInput, col1, val1, col2, val2, cb){
      var qry = `insert into ${tableInput} (${col1}, ${col2}) values ("${val1}", ${val2});`; 
      console.log (qry);
      connection.query (qry, function (err, result){
         if (err){throw err}; 
         cb (result);
      })
   },

   updateOne: function (tableInput, col1, val1, col2, val2, cb){
      var qry = `update ${tableInput} set ${col1} = ${val1} where ${col2} = ${val2};`; 
      console.log (qry);
      connection.query (qry, function (err, result){
         if (err){throw err}; 
         cb (result);
      })
   }

}

module.exports = orm;
