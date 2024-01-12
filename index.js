import express from 'express';
import ejs from 'ejs';
import axios from 'axios';
import bodyParser from 'body-parser';

const port = 3000;
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("public"));

app.get('/', (req, res) => {
    res.render('index.ejs');
});

app.post('/', async (req, res) => {
    console.log(req.body);
    let blackList = Array.isArray(req.body.flags) ? req.body.flags.join(',') : req.body.flags || ''; // Join the array into a comma-separated string or use an empty string
    let Joketype = Array.isArray(req.body.Joketype) ? req.body.Joketype.join(',') : req.body.Joketype || ''; // Join the array into a comma-separated string or use an empty string
    let Search = req.body.string;

    let response; // Declare the variable here

    
        if (req.body.string) {
            if (Joketype.length < 2) {
                if (blackList.length < 2) {
                    
                    response = await axios.get(`https://v2.jokeapi.dev/joke/Any?blacklistFlags=${blackList}&type=${Joketype}&contains=${Search}`);
                } else {
                    
                    response = await axios.get(`https://v2.jokeapi.dev/joke/Any?blacklistFlags=${blackList}&type=${Joketype}&contains=${Search}`);
                }
            } 
            else {
                if (blackList.length < 2) {
                    
                    
                    response = await axios.get(`https://v2.jokeapi.dev/joke/Any?blacklistFlags=${blackList}&type=${Joketype}&contains=${Search}`);
                } else {
                    
                    response = await axios.get(`https://v2.jokeapi.dev/joke/Any?blacklistFlags=${blackList}&type=${Joketype}&contains=${Search}`);
                }
            }
        } else {
            if (Joketype.length < 2) {
                if (blackList.length < 2) {                    
                    response = await axios.get(`https://v2.jokeapi.dev/joke/Any?blacklistFlags=${blackList}&type=${Joketype}`);
                } else {
                    
                    response = await axios.get(`https://v2.jokeapi.dev/joke/Any?blacklistFlags=${blackList}&type=${Joketype}`);
                }
            } else {
                if (blackList.length < 2) {
                    
                    
                    response = await axios.get(`https://v2.jokeapi.dev/joke/Any?blacklistFlags=${blackList}&type=${Joketype}`);
                } else {
                    
                    response = await axios.get(`https://v2.jokeapi.dev/joke/Any?blacklistFlags=${blackList}&type=${Joketype}`);
                }
            }
        }
    try{
        const result = response.data;
        console.log("Received data:", result);
        res.render("index.ejs", { content: result });
        
    } catch (error) {
        console.error(error);
    }
});


app.listen(port, () => {
    console.log('Server running on Port ' + port);
});
