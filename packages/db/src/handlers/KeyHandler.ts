import { eq } from 'drizzle-orm'
import { db } from '../db'
import { Key, Keys } from '../schema/Key.model'
import * as crypto from 'crypto'

/**
 * Creates key in the database
 * @param values = { key, protocol_version }
 * @returns id = id of the newly created key
 */
export const create = async (values: Omit<Key, 'id' | 'created_at' | 'updated_at'>) => {
  try {
    const id = crypto.randomUUID()
    await db.insert(Keys).values({
      id,
      ...values,
    })
    return id
  } catch (err) {
    console.log(err)
    throw new Error(`KeyHandler::create::${err}`)
  }
}

/**
 * Gets key by id
 * @param id - Key id
 * @returns Key | undefined
 */
export const getById = async (id: string) => {
  try {
    const key = await db.select().from(Keys).where(eq(Keys.id, id)).limit(1)
    return key.length > 0 ? key[0] : null
  } catch (err) {
    console.error(err)
    throw new Error(`KeyHandler::getById::${err}`)
  }
}

/**
 * Updates key details
 * @param id - Key id
 * @param values - Key details to update
 */
export const update = async (id: string, values: Partial<Key>) => {
  try {
    await db
      .update(Keys)
      .set({ ...values })
      .where(eq(Keys.id, id))
  } catch (err) {
    console.error(err)
    throw new Error(`KeyHandler::getById::${err}`)
  }
}

/**
 * Deletes key
 * @param id - Key id
 */
export const deleteById = async (id: string) => {
  try {
    await db.delete(Keys).where(eq(Keys.id, id))
  } catch (err) {
    console.error(err)
    throw new Error(`KeyHandler::delete::${err}`)
  }
}
