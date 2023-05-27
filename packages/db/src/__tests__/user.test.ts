import { closeDb } from '../db'
import * as UserHandler from '../handlers/UserHandler'

describe('Database Users Tests', () => {
  let user_id = ''
  afterAll(async () => {
    await closeDb()
  })

  it('Create user', async () => {
    const response = await UserHandler.create({
      name: 'CoolDude',
      front_salt: 'front_salt',
      back_salt: 'back_salt',
      hash: 'hash',
      protocol_version: 'protocol_version',
    })
    user_id = response
    expect(response.length).toBe(36)
  })

  it('Get user by Id', async () => {
    const response = await UserHandler.getById(user_id)
    expect(response?.name).toBe('CoolDude')
  })

  it('Update user', async () => {
    await UserHandler.update(user_id, {
      name: 'BoringPerson',
    })
    const response = await UserHandler.getById(user_id)

    expect(response?.name).toBe('BoringPerson')
  })

  it('Delete user', async () => {
    await UserHandler.deleteById(user_id)
    const response = await UserHandler.getById(user_id)
    expect(response).toBe(null)
  })
})
