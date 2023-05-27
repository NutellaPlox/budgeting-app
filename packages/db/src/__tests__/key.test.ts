import { closeDb } from '../db'
import * as KeyHandler from '../handlers/KeyHandler'

describe('Database Keys Tests', () => {
  let id = ''
  afterAll(async () => {
    await closeDb()
  })

  it('Create user', async () => {
    const response = await KeyHandler.create({
      key: 'seo;rijs;eorig;oseir',
      protocol_version: 'protocol_version',
    })
    id = response
    expect(response.length).toBe(36)
  })

  it('Get user by Id', async () => {
    const response = await KeyHandler.getById(id)
    expect(response?.key).toBe('seo;rijs;eorig;oseir')
  })

  it('Update user', async () => {
    await KeyHandler.update(id, {
      key: '123',
    })
    const response = await KeyHandler.getById(id)

    expect(response?.key).toBe('123')
  })

  it('Delete user', async () => {
    await KeyHandler.deleteById(id)
    const response = await KeyHandler.getById(id)
    expect(response).toBe(null)
  })
})
