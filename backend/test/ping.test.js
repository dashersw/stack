const supertest = require('supertest')
const app = require('../src/app')

const request = supertest(app)

describe('Ping', () => {
  it('GET /ping returns 200', async () => {
    const { status } = await request.get('/ping')
    expect(status).toBe(200)
  })
})
