import { test, after } from 'node:test';
import mongoose from 'mongoose';
import supertest from 'supertest';
import { server } from '../../server/server';

const api = supertest(server);

test('valid user can register', async () => {
    const newUser = {
        username: "ray444",
        email: "ray@yahoo.com",
        password: "ray123",
        investing: 0,
        date_created: Date.now()
    }

    await api.post('/auth/register').send(newUser).expect(201).expect('Content-Type', /application\/json/);
})