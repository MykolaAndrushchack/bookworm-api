import express from 'express';
import path from 'path';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';

import auth from './routes/auth';
import users from './routes/users';

dotenv.config();
const app = express();
app.use(bodyParser.json());
mongoose.connect(process.env.MONGODB_URL, { useNewUrlParser: true });

app.use('/api/auth', auth);
app.use('/api/users', users);

app.get('/*', (req, res) => {
	res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(process.env.PORT, () =>
	console.log(`Running on port: ${process.env.PORT}`)
);