const Express = require('express');
const BodyParser = require('body-parser');
const Mongoose = require('mongoose');
const Cors = require('cors');

const NotesModel = Mongoose.model("Notes", {
  notes: String
});

var app = Express();

Mongoose.connect(
  "mongodb+srv://admin:admin@myatlascluster0-p0uai.mongodb.net/test?retryWrites=true&w=majority"
);

app.use(Cors());
app.use(BodyParser.json());
app.use(BodyParser.urlencoded({extended: true}));

app.post("/savenotes", async(req, res, next) =>
{
    console.log(req.body);
    try {
        console.log(req.body);
        var note = new NotesModel(req.body);
        var result = await note.save();
        res.send(result);
        }
        catch(err) {
            res.status(500).send(err);
        }
});

app.get("/getnotes", async(req, res,next) => {
   try {
       var result = await NotesModel.find().exec();
       res.send(result);
   }
   catch(err) {
       res.status(500).send(err);
   }
});

app.listen(3001, () =>{
    console.log("Running on the port 3001");
})



