import { drizzle } from 'drizzle-orm/mysql2'
import { drizzle as PSDrizzle } from 'drizzle-orm/planetscale-serverless'
import { Connection, connect } from '@planetscale/database'
import * as mysql from 'mysql2/promise'
import * as dotenv from 'dotenv'
dotenv.config({ path: '../../apps/next/.env' })

let connection: Connection | mysql.Pool

if (!process.env.SQL) {
  connection = connect({
    host: process.env.DB_HOST,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
  })
} else {
  // default mysql connection
  connection = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    port: Number(process.env.DB_PORT),
  })
}

export const db =
  process.env.SQL === 'true'
    ? drizzle(connection as mysql.Pool)
    : PSDrizzle(connection as Connection)

export const closeDb = async () => {
  await (connection as mysql.Pool).end()
}
