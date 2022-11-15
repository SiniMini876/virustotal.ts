import dotenv from 'dotenv';
import {VTClient} from '../build/index.js';
dotenv.config();

const client = new VTClient(process.env.TOKEN);

client.urls.scanURL('https://www.google.com').then((response) => {
	console.log(response);
});
