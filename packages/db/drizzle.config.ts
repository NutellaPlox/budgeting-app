import type { Config } from 'drizzle-kit'
import * as dotenv from 'dotenv'
dotenv.config({ path: '../../apps/next/.env' })

let connectionString = `mysql://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`

// Planet scale connection string
if (!process.env.SQL) {
  connectionString = `mysql://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}/dev?ssl={"rejectUnauthorized":true}`
}

export default {
  schema: ['./src/schema/**/*.model.ts'],
  connectionString,
} satisfies Config
