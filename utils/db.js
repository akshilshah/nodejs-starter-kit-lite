import mongoose from 'mongoose'
import 'dotenv/config'

const dburl = process.env.DB_URL

export const connect = (url = dburl, opts = {}) => {
  mongoose.set('useUnifiedTopology', true)
  mongoose.set('useCreateIndex', true)
  mongoose.set('useFindAndModify', false)
  return mongoose.connect(url, { ...opts, useNewUrlParser: true })
}
