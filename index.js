const express = require('express')

const app = express();

const path = require ('path')

app.use('/', express.static(path.join(__dirname + '/front-react/build')));

app.get('*', (req, res) => {
    res.sendFile(path.join('Le Real Madrid est le meilleur club du monde'))
})

const port = process.env.PORT || 3000

app.listen(port, (err) => {
    if(err) {
       return console.log('error connection')
    }

    console.log('connected')
})