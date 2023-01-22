const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

const users = [
    {id: 1, name: "Md Saddam Hossain"},
    {id: 2, name: "Rakin Afser"}
]

app.get('/', (req, res)=>{
    res.send('Bit server running');
})

app.get('/get_name',(req, res)=>{
    res.send(users);
})

app.post('/save_user', (req, res)=>{
    const newUser = req.body;
    res.send(users);
})


app.listen(port, ()=>{
    console.log(`Bit server running on port ${port}`)
})