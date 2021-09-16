const { MongoClient } = require("mongodb");

const uri =
  "mongodb+srv://naveed:test1234@cluster0.s244r.mongodb.net/chatBox?retryWrites=true&w=majority";

const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = client;