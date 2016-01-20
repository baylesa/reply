//Shows reply's confirm method, holds users to a yes or no decision
//Second example
var reply = require('./../');

reply.confirm('Are you sure you want to test confirm?', function(err, yes){

  if (!err && yes)
    console.log("Of course you do, why else open a node program called confirm2 :)");
  else
    console.log("Well then i don't know how you wound up here");

});