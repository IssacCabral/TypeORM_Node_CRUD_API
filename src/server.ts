import "reflect-metadata"
import express from 'express'
import env from 'dotenv'
import './database/data-source'

env.config()

const app = express()

app.get('/', (req, res) => {
    res.send('Tudo OK')
})

app.listen(3000, () => {console.log(`Listening on port 3000`)})