import { mysqlTable, varchar, text, timestamp } from 'drizzle-orm/mysql-core'
import { InferModel } from 'drizzle-orm'

export const Datas = mysqlTable('data', {
  id: varchar('id', { length: 36 }).primaryKey(),
  data: text('data').notNull(),
  protocol_version: text('protocol_version').notNull(),
  created_at: timestamp('created_at').notNull().defaultNow(),
  updated_at: timestamp('updated_at').notNull().defaultNow(),
})

export type Data = InferModel<typeof Datas, 'select'>
