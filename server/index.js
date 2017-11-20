import express from 'express';
import handleReq from './handleReq';
import path from 'path';

const app = express();

app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, '../dist')));

app.set('views', path.join(__dirname, '../src'));  // 设置index.ejs(模板)的文件夹

app.use('/', handleReq);

const port = 3003;

app.listen(port, () => console.log(`server started，at ${port}`));