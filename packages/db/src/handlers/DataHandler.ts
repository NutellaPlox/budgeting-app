import { eq } from 'drizzle-orm'
import { db } from '../db'
import { Data, Datas } from '../schema/Data.model'
import * as crypto from 'crypto'

/**
 * Creates data in the database
 * @param values = { data, protocol_version }
 * @returns id = id of the newly created data
 */
export const create = async (values: Omit<Data, 'id' | 'created_at' | 'updated_at'>) => {
  try {
    const id = crypto.randomUUID()
    await db.insert(Datas).values({
      id,
      ...values,
    })
    return id
  } catch (err) {
    console.error(err)
    throw new Error(`DataHandler::create::${err}`)
  }
}

/**
 * Gets data by id
 * @param id - Data id
 * @returns Data | undefined
 */
export const getById = async (id: string) => {
  try {
    const data = await db.select().from(Datas).where(eq(Datas.id, id)).limit(1)
    return data.length > 0 ? data[0] : null
  } catch (err) {
    console.error(err)
    throw new Error(`DataHandler::getById::${err}`)
  }
}

/**
 * Updates data details
 * @param id - Data id
 * @param values - Data details to update
 */
export const update = async (id: string, values: Partial<Data>) => {
  try {
    await db
      .update(Datas)
      .set({ ...values })
      .where(eq(Datas.id, id))
  } catch (err) {
    console.error(err)
    throw new Error(`DataHandler::getById::${err}`)
  }
}

/**
 * Deletes data
 * @param id - Data id
 */
export const deleteById = async (id: string) => {
  try {
    await db.delete(Datas).where(eq(Datas.id, id))
  } catch (err) {
    console.error(err)
    throw new Error(`DataHandler::delete::${err}`)
  }
}
