import express from "express";
import statusRoute from "../routes/status.route";
import usersRoute from "../routes/users.route";

const app = express();
//APP configuration
app.use(express.json()); //middleware
app.use(express.urlencoded({ extended: true }));

//Route configuration
app.use(statusRoute);
app.use(usersRoute);

//Start Server
app.listen(3000, () => {
  console.log("Running on port 3000!");
});
