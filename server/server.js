import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
const port = 4000
const app = express()

app.use(cors)


await mongoose.connect(
    "mongodb+srv://selva1234:selva%40123@selvacluster.ku62lks.mongodb.net/?retryWrites=true&w=majority"
)
console.log('MongoDB connected successfully')


app.get('/', (req,res) => {
    res.send('Hello world!')
})

app.listen(port , () => {
    console.log(`server is running on the port no ${port}`)
})