var ORMconnection = require("../config/orm.js");

var cupcake = {

    selectAll: function(cb) {
        ORMconnection.selectAll("cupcake_table", function(res) {
            cb(res);
        });
    },

    insertOne: function(table, cols, vals) {
        ORMconnection.insertOne("cupcake_table", table, cols, function(res) {
            cb(res);
        })
    },

    updateOne: function(table, objColVals, condition) {
        ORMconnection.updateOne("cupcake_table", table, objColVals, function(res) {
            cb(res);
        })
    }
};

module.exports = cupcake;