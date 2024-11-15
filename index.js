import express from 'express'

const app = express()

app.get('/', (req,res)=> res.status(200).send('ofc, api is working :)'))
app.get('/name', )
app.get('/hobby', )
app.get('/dream', )