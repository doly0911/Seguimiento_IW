//Load express module with `require` directive
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const port = process.env.PORT || 8081;
var bodyParser = require("body-parser");

const db_link = "mongodb://mongo:27017/helloworlddb";
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

mongoose
  .connect(db_link, options)
  .then(function () {
    console.log("MongoDB is connected");
  })
  .catch(function (err) {
    console.log(err);
  });

let Schema = mongoose.Schema;

let userSchema = new Schema(
  {
    id: { type: String },
    name: { type: String },
    gender: { type: String},
    cellphone: { type: String}
  },
  { versionKey: false }
);

let User = mongoose.model("users", userSchema);

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

// Extended: https://swagger.io/specification/#infoObject
const swaggerOptions = {
  swaggerDefinition: {
    info: {
      title: "HelloWorld API",
      description: "Hello World Class",
      contact: {
        name: "Dolly Jimenez",
      },
      servers: ["http://localhost:8081"],
    },
  },
  apis: ["index.js"],
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

//Define request response in root URL (/)
app.get("/", function (req, res) {
  res.send("Hello World!");
});

/**
 * @swagger
 * /users:
 *  get:
 *    description: Return all users
 *    responses:
 *      '200':
 *        description: users
 *      '400':
 *        description: An error ocurred
 */
app.get("/users", function (req, res) {
  User.find({}).exec((err, users) => {
    if (err) res.status(400).send("Oops! Something went wrong!");
    else res.status(200).send(users);
  });
});

/**
 * @swagger
 *
 * /users:
 *   post:
 *     description: Creates a new user
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: user
 *         description: User object
 *         in:  body
 *         required: true
 *         type: object
 *     responses:
 *       201:
 *         description: Successfully created
 *       204:
 *         description: An error ocurred
 */

app.post("/users", (req, res) => {
  let newUser = req.body;
  User.create(newUser, (err, user) => {
    if (err) res.status(204).send("Oops! Something went wrong!");
    else res.status(201).send(user);
  });
});

/**
 * @swagger
 *
 * /users/{id}:
 *   put:
 *     description: Updates a user
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: user
 *         description: User object
 *         in:  body
 *         required: true
 *         type: object
 *       - name: id
 *         description: User id
 *         in:  path
 *         required: true
 *         type: string 
 *     responses:
 *       200:
 *         description: Successfully created
 *       400:
 *         description: An error ocurred
 */
app.put("/users/:id", (req, res) => {
  let filterId = req.params.id;
  let newUser = req.body;
  User.update({ _id: filterId }, newUser, (err, user) => {
    if (err) res.status(400).send("Oops! Something went wrong!");
    else res.status(200).send(user);
  });
});

/**
 * @swagger
 * /users/{id}:
 *  delete:
 *    description: Delete a single user
 *    produces:
 *      - application/json
 *    parameters:
 *      - name: id
 *        description: User's id
 *        in: path
 *        required: true
 *        type: string
 *    responses:
 *      '202':
 *        description: Successfully deleted
 *      '400':
 *        description: An error ocurred
 */
app.delete("/users/:id", (req, res) => {
  let filterId = req.params.id;
  console.log(filterId)
  User.deleteOne({ _id: filterId }, (err, user) => {
    if (err) res.status(400).send("Oops! Something went wrong!");
    else res.status(202).send(user);
  });
});

//Launch listening server on port 8081
app.listen(port, function () {
  console.log("app listening on port 8081!");
});
