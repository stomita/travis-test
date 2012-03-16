var vows   = require('vows')
  , assert = require('assert')
  ;

vows.describe("travis").addBatch({

  "Travis Environment Test" : {
    topic : process.env,

    "should get login page" : function(env) {
      console.log(env);
      assert.isString(env.AWS_ACCESS_KEY_ID);
      assert.isString(env.AWS_SECRET_ACCESS_KEY);
    }
  }

}).export(module);


