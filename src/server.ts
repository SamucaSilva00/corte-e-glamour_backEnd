import express from 'express';
import { database } from './database';
import { router } from './routes';


const app = express()

app.use(express.static('public'))
app.use(express.json())
app.use(router)

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  database.authenticate().then(() => {
    console.log('DB connection successfull.')
  })

  console.log(`Server started successfuly at port ${PORT}.`)
})

