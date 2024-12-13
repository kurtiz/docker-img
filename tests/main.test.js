import request from 'supertest';
import { expect } from 'chai';
import { server } from "../src/app.js"; // Make sure to export the server correctly

const port = process.env.PORT || 8080;

describe('API GET Request Test', function () {
    let api;

    before(function () {
        // Start the server before tests run
        api = server.listen(port, () => {
            console.log(`Server started on port ${port}`);
        });
    });

    after(function (done) {
        // Close the server after tests complete
        api.close(done);
    });

    it('should return a 200 status code', async function () {
        const response = await request(api).get('/');
        expect(response.status).to.equal(200);
    });

    it('should return the expected on the root path', async function () {
        const expectedResponse = "<h1>Mini Server is Live</h1> <br>" +
            "<h2>Version: 1.0.0</h2><br>" +
            "<h3>Author: Aaron Will Djaba</h3>";

        const response = await request(api).get('/');
        expect(response.text).to.equal(expectedResponse);
    });

    it('should return a 404 status code', async function () {
        const response = await request(api).get('/user');
        expect(response.status).to.equal(404);
    });

    it('should return a 404 Error message', async function () {
        const response = await request(api).get('/wrong');
        expect(response.body.error).to.equal("Route not found");
    });
});
