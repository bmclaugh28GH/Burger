var orm = require("../config/orm.js");

var burger = {

   selectWhere: function(col1, val1, cb) {
      orm.selectWhere("burgers", col1, val1, function(res) {
         cb(res);
      });
   },

   insertOne: function(col1, val1, col2, val2, cb) {
      orm.insertOne("burgers", col1, val1, col2, val2, function(res) {
         cb(res);
      });
   },

   updateOne: function(col1, val1, col2, val2, cb) {
      orm.updateOne("burgers", col1, val1, col2, val2, function(res) {
         cb(res);
      });
   },

}

module.exports = burger;
