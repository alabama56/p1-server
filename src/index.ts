import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as path from 'path';
import poolConfig from './config/db/index';

// Routers
import api from './routes/api'

const app = express();

app 
    .use(bodyParser.urlencoded({ extended: true }))
    .use(bodyParser.json())
    .use('/api', api)
    //to serve dist 
    // .use(express.static(path.join(__dirname + '/../dist')))
    // .get('/*', (req: express.Request, res: express.Response) => {
    //     res.sendFile(path.join(__dirname + '/../dist/index.html'));
    // });
    

app.listen(process.env.PORT || 3000, () => {
    poolConfig();
    console.log(`listening on port ${process.env.PORT || 3000}`);
});