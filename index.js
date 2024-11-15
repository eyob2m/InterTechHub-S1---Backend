import express from 'express'
import { nameCtrl } from './controller/nameCtrl.js'
import { hobbyCtrl } from './controller/hobbyCtrl.js'
import { dreamCtrl } from './controller/dreamCtrl.js'
import dotenv from 'dotenv'
dotenv.config()
let Port = process.env.PORT || 4000
const app = express()

app.get('/', (req,res)=> res.status(200).send('ofc, api is working :)'))
app.get('/name', nameCtrl)
app.get('/hobby', hobbyCtrl)
app.get('/dream', dreamCtrl)

app.listen(Port, ()=>{
    console.log(`Server is running on Port ${Port}`)
})