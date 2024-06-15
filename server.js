const dotenv = require('dotenv')
const mongoose = require('mongoose');
const app = require('./app');

dotenv.config({ path: './config.env' })

const DB = process.env.DATABASE.replace('<PASSWORD>', process.env.PASSWORD);

mongoose.connect(DB).then(() =>
  console.log('MongoDB connected')
)

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`)
})
