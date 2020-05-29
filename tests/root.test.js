const request = require('supertest')
const app = require('../app')

describe("Test the root path", () => {
    it('Index Page', done => {
        request(app)
            .get('/')
            .then(res => {
                expect(res.statusCode).toBe(200)
                done()
            })
    })
})