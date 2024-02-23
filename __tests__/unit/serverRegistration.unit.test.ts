import { test, after } from 'node:test';
import mongoose from 'mongoose';
import supertest from 'supertest';
import { server } from '../../server/server';

const api = supertest(server);

