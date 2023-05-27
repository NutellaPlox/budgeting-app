import { mysqlTable, varchar, text, timestamp } from 'drizzle-orm/mysql-core'
import { InferModel } from 'drizzle-orm'

export const Users = mysqlTable('users', {
  id: varchar('id', { length: 36 }).primaryKey(),
  name: text('name').notNull(),
  front_salt: text('front_salt').notNull(),
  back_salt: text('back_salt').notNull(),
  hash: text('hash').notNull(),
  protocol_version: text('protocol_version').notNull(),
  created_at: timestamp('created_at').notNull().defaultNow(),
  updated_at: timestamp('updated_at').notNull().defaultNow(),
})

export type User = InferModel<typeof Users, 'select'>
