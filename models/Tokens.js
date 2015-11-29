var mongoose = require('mongoose');

var TokenSchema = new mongoose.Schema({
   mtgSet: [{
      setCode: String,
      picURL: String 
   }],
   name: String,
   pt: String,
   color: [String],
   text: String,
   tablerow: String,
   token: String,
   manacost: String,
   type: String
});

mongoose.model('Token', TokenSchema, 'Tokens');