"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyParser = require("body-parser");
const index_1 = require("./config/db/index");
// Routers
const api_1 = require("./routes/api");
const app = express();
app
    .use(bodyParser.urlencoded({ extended: true }))
    .use(bodyParser.json())
    .use('/api', api_1.default);
//to serve dist 
// .use(express.static(path.join(__dirname + '/../dist')))
// .get('/*', (req: express.Request, res: express.Response) => {
//     res.sendFile(path.join(__dirname + '/../dist/index.html'));
// });
app.listen(process.env.PORT || 3000, () => {
    index_1.default();
    console.log(`listening on port ${process.env.PORT || 3000}`);
});
