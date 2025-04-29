import express from 'express'
import AdverRouter from './api/routers/Advertiser.js'
import categoryRouter from './api/routers/Category.js'
import cityRouter from './api/routers/City.js'
import departRouter from './api/routers/Department.js'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from 'dotenv'

dotenv.config()



const app=express()
const port =3007
mongoose.connect(process.env.LOCAL_URI)
    .then(() => {
        console.log('connect to mongoDB! 👍😊');
    })
    .catch(err => {
        console.log({ error: err.message });
    })




app.use(bodyParser.json())
app.use(cors())
app.use('/Advertiser',AdverRouter)
app.use('/Category',categoryRouter)
app.use('/City',cityRouter)
app.use('/Department',departRouter)

app.listen(port,()=>{
    console.log(`hello ${port}`);
    
})
