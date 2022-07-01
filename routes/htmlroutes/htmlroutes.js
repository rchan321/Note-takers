const path = require("path");
const app = require('express').app();


app.get("/notes", function (req, res) {
    res.sendFile(path.join(__dirname, "/miniature-eureka-main/Develop/public/notes.html"));
});

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, '/miniature-eureka-main/Develop/public/index.html'));
  });

app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});