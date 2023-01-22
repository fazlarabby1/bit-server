const express = require('express');
const app = express();
const port = process.env.PORT || 5000;


app.get('/', (req, res)=>{
    res.send('Bit server running');
})



app.listen(port, ()=>{
    console.log(`Bit server running on port ${port}`)
})