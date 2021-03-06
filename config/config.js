const config = {
  env: process.env.NODE_ENV || 'development',
  port: process.env.PORT || 3000,
  jwtSecret: process.env.JWT_SECRET || "YOUR_secret_key",
  mongoUri: process.env.MONGODB_URI ||
    process.env.MONGO_HOST ||
    'mongodb://' + (process.env.IP || 'localhost') + ':' +
    (process.env.MONGO_PORT || '27017') +
    '/mernproject'
}

const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://AlexKorir:Korir2020$@cluster0-hgqwy.mongodb.net/qitclassroom?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("qitclass").collection("devices");
  // perform actions on the collection object
  client.close();
});

export default config
