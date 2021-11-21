var MongoClient = require('mongodb').MongoClient;

var URL = "mongodb+srv://jwolt:jwolt65859j@cluster0.raxaw.mongodb.net/?retryWrites=true&w=majority"

var config = { useNewUrlParser: true, useUnifiedTopology: true }

MongoClient.connect(URL, config, function(error, MyMongoCLient) {
  if(error) {
    console.log('Connection failed');
  }else {
    console.log('Connection Success');
    DeleteMyCollection(MyMongoCLient)
  }
})


function InsertData(MyMongoCLient) {
  var MyDatabase = MyMongoCLient.db("school");
  var MyCollection = MyDatabase.collection('students');

  var MyData = {name : "jwolt", roll: 1, class: "Tem", city: "Dhaka"}

  MyCollection.insertOne(MyData, function(error) {
    if(error){
      console.log("Data Insert Failed");
    }else {
      console.log("Data Insert Success");
    }
  })
}

function DeleteOne(MyMongoCLient) {
  var MyDatabase = MyMongoCLient.db('school')
  var MyCollection = MyDatabase.collection('students');

  var DeleteItem = {roll: 2}

  MyCollection.deleteOne(DeleteItem, function(error) {
    if(error) {
      console.log("Data Delete Failed");
    }else {
      console.log("Data Delete Success");
    }
  })

}

function DeleteAllItem(MyMongoCLient) {
  var MyDatabase = MyMongoCLient.db('school')
  var MyCollection = MyDatabase.collection('students');
  
  MyCollection.deleteMany(function(error, resultObj) {
    if(error) {
      console.log('Data Delete failed');
    }else {
      console.log(resultObj);
    }
  })
}

function FindOneWithoutCondition(MyMongoCLient) {
  var MyDatabase = MyMongoCLient.db('school')
  var MyCollection = MyDatabase.collection('students');

  var FindObj = {}
  MyCollection.findOne(FindObj, function(error, result) {
    console.log(result);
  })
}

function FindOneWithCondition(MyMongoCLient) {
  var MyDatabase = MyMongoCLient.db('school')
  var MyCollection = MyDatabase.collection('students');

  var FindObj = {roll: 5}
  MyCollection.findOne(FindObj, function(error, result) {
    console.log(result);
  })
}

function FindAllDataByProjection(MyMongoCLient) {
  var MyDatabase = MyMongoCLient.db('school')
  var MyCollection = MyDatabase.collection('students');
  
  var ItemObj = {}
  var ItemProjection = {projection: {roll: ""}}

  MyCollection.find(ItemObj, ItemProjection).toArray(function(errro, result) {
    console.log(result);
  })
}

function FindAllDataByQuery(MyMongoCLient) {
  var MyDatabase = MyMongoCLient.db('school')
  var MyCollection = MyDatabase.collection('students');
  
  var Query  = {city: "Rangpur"}
  

  MyCollection.find(Query).toArray(function(errro, result) {
    console.log(result);
  })
}

function FindAllDataByLimit(MyMongoCLient) {
  var MyDatabase = MyMongoCLient.db('school')
  var MyCollection = MyDatabase.collection('students');
  
  
  

  MyCollection.find().limit(20).toArray(function(errro, result) {
    console.log(result);
  })
}

function FindAllDataBySort(MyMongoCLient) {
  var MyDatabase = MyMongoCLient.db('school')
  var MyCollection = MyDatabase.collection('students');
  
  var sortPattern = {class: -1}
  

  MyCollection.find().sort(sortPattern).toArray(function(errro, result) {
    console.log(result);
  })
}


function UpdateMyData(MyMongoCLient) {
  var MyDatabase = MyMongoCLient.db('school')
  var MyCollection = MyDatabase.collection('students');

  var MyQuery = {roll: "4"}
  var MyNewValues = {$set: {name: "Jeolt Junaid", city: "Gaibandha"}}

  MyCollection.updateOne(MyQuery, MyNewValues, function(error, result) {
    if(error) {
      console.log('Update failed');
    }else {
      console.log(result);
    }
  })

}

function CreateMyCollection(MyMongoCLient) {
  var MyDatabase = MyMongoCLient.db('school');
  MyDatabase.createCollection('teachers', function(error, result) {
    console.log(result);
  })
}

function DeleteMyCollection(MyMongoCLient) {
  var MyDatabase = MyMongoCLient.db('school');
  MyDatabase.dropCollection('teachers', function(error, result) {
    console.log(result);
  })
}