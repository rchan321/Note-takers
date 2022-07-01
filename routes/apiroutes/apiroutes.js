const fs = require("fs");
const path = require("path");
const database = require("/miniature-eureka-main/Develop/db/db/db.json")

const PORT = process.env.PORT || 3001;
const router = require('express').Router();

router.get("/api/notes"), (req, res) => {
    res.json(database);
};
     
router.post(function(req,res) {

let jsonFilePath = path.join(__dirname, "/miniature-eureka-main/Develop/db/db.json");
    let newNote = req.body;
    let highestID = 999;
    for (let i = 0; i < database.length; i++) {
        let individualNote = database[i];

        if (individualNote.iod > highestID) {
            highestID = individualNote.id;
        }
    }
    newNote.id = highestID + 1;
    database.push(newNote)

    fs.writeFile(jsonFilePath, JSON.stringify(database), function (err) {

        if (err) {
            return console.log(err);
        }
        console.log("Note has been saved!")
    });
    res.json(newNote);
});

router.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});






