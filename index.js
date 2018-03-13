const express = require('express')

const app = express();

app.get('*', (req, res) => {
    res.send('Le Real Madrid est le meilleur club du monde')
})

const port = process.env.PORT || 3000

app.listen(port, (err) => {
    if(err) {
       return console.log('error connection')
    }

    console.log('connected')
})