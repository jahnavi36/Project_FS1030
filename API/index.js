require('dotenv').config()
import express from 'express'
import cors from 'cors'

import billing from './src/billing.js'
import careProvider from './src/careProviderData.js'

import auth from './src/auth.js'
import log from './src/log.js'

const app = express()
const port = process.env.PORT || 3000;
app.use(cors())

app.use(express.json());

app.use('/patient', patient)

app.use('/billing', billing)
app.use('/careProvider', careProvider)


app.use('/log', log)
app.use('/auth', auth)

export default app.listen(port, ()=> console.log(`Server running on port ${port}`));