import express from "express";
import { dirname, join } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";

const app = express();
const port = 3000;



app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public")); 

app.get("/", (req, res) => {
  res.render("Loginpage.ejs");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
