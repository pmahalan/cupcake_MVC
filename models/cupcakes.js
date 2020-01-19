var ORMconnection = require("../config/orm.js");

var cupcake = {

    selectAll: function(cb) {
        ORMconnection.selectAll("cupcake_table", function(res) {
            cb(res);
        });
    },

    insertOne: function(cols, vals, cb) {
        ORMconnection.insertOne("cupcake_table", cols, vals, function(res) {
            cb(res);
        })
    },

    updateOne: function(objColVals, condition, cb) {
        ORMconnection.updateOne("cupcake_table", objColVals, condition, function(res) {
            cb(res);
        })
    }
};

module.exports = cupcake;