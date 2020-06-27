/* eslint-disable no-unused-vars */
import { connect } from '../utils/db'

async function start() {
  await connect().then(console.log('[+] Database Connected')) // connnect to db

}

start() // start server
