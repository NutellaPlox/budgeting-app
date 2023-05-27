import { closeDb } from '../db'
import * as DataHandler from '../handlers/DataHandler'

describe('Database Data Tests', () => {
  let id = ''
  afterAll(async () => {
    await closeDb()
  })

  it('Create user', async () => {
    const response = await DataHandler.create({
      data: 'seo;rijs;eorig;oseir',
      protocol_version: 'protocol_version',
    })
    id = response
    expect(response.length).toBe(36)
  })

  it('Get user by Id', async () => {
    const response = await DataHandler.getById(id)
    expect(response?.data).toBe('seo;rijs;eorig;oseir')
  })

  it('Update user', async () => {
    await DataHandler.update(id, {
      data: '123',
    })
    const response = await DataHandler.getById(id)

    expect(response?.data).toBe('123')
  })

  it('Delete user', async () => {
    await DataHandler.deleteById(id)
    const response = await DataHandler.getById(id)
    expect(response).toBe(null)
  })
})
