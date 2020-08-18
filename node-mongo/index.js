const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
// const dboper = require('./operations');

const url = 'mongodb://localhost:27017/';
const dbname = 'language';


/* MongoClient.connect(url, (err, client) => {
    assert.equal(err, null);

    console.log('Server connected successfully');

    const db = client.db(language);
    const collection = db.collection("webd");

    collection.insertOne({"name": "html", "description": "basic lang", "level": "easy"},
                           // {"name": "python", "description": "basic other lang", "level": "medium"},
     (err, result) => {
        assert.equal(err, null);
        console.log("After insert: \n");
        console.log(result.ops);

        collection.find({}).toArray((err, docs) => {
            assert.equal(err,null);
            
            console.log("Found:\n");
            console.log(docs);

            db.dropCollection("webd", (err, result) => {
                assert.equal(err,null);

                client.close();
            });
        });


       
    });


}); */

MongoClient.connect(url, (err, client) => {

    assert.equal(err,null);

    console.log('Connected correctly to server');

    const db = client.db(dbname);
    const collection = db.collection("webd");
    var langs = [{"name": "Uthappizza", "description": "test", "level": "easy"},
                 {"name": "python", "description": "other lang", "level": "easy"}];
    collection.insert(langs,
    (err, result) => {
        assert.equal(err,null);

        console.log("After Insert:\n");
        console.log(result.ops);

        collection.find({}).toArray((err, docs) => {
            assert.equal(err,null);
            
            console.log("Found:\n");
            console.log(docs);

            db.dropCollection("webd", (err, result) => {
                assert.equal(err,null);

                client.close();
            });
        });
    });

});

