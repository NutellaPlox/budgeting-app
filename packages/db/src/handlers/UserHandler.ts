import { eq } from 'drizzle-orm'
import { db } from '../db'
import { User, Users } from '../schema/User.model'
import * as crypto from 'crypto'

/**
 * Creates user in the database
 * @param values = { name, front_salt, back_salt, hash, protocol_version }
 * @returns id = id of the newly created user
 */
export const create = async (values: Omit<User, 'id' | 'created_at' | 'updated_at'>) => {
  try {
    const id = crypto.randomUUID()
    await db.insert(Users).values({
      id,
      ...values,
    })
    return id
  } catch (err) {
    console.error(err)
    throw new Error(`UserHandler::create::${err}`)
  }
}

/**
 * Gets user by id
 * @param id - User id
 * @returns User | undefined
 */
export const getById = async (id: string) => {
  try {
    const user = await db.select().from(Users).where(eq(Users.id, id)).limit(1)
    return user.length > 0 ? user[0] : null
  } catch (err) {
    console.error(err)
    throw new Error(`UserHandler::getById::${err}`)
  }
}

/**
 * Updates user details
 * @param id - User id
 * @param values - User details to update
 */
export const update = async (id: string, values: Partial<User>) => {
  try {
    await db
      .update(Users)
      .set({ ...values })
      .where(eq(Users.id, id))
  } catch (err) {
    console.error(err)
    throw new Error(`UserHandler::getById::${err}`)
  }
}

/**
 * Deletes user
 * @param id - User id
 */
export const deleteById = async (id: string) => {
  try {
    await db.delete(Users).where(eq(Users.id, id))
  } catch (err) {
    console.error(err)
    throw new Error(`UserHandler::delete::${err}`)
  }
}
