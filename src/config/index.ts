import dotenv from 'dotenv'
dotenv.config()

const PORT = process.env.PORT || 5000
const HOSTNAME = process.env.HOSTNAME || 'localhost'

const SERVER = {
  hostname: HOSTNAME,
  port: PORT,
}

const config = {
  server: SERVER,
}

export default config
