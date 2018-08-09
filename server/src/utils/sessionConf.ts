import * as session from 'express-session';
// tslint:disable-next-line:no-var-requires
const KnexSessionStore = require('connect-session-knex')(session);
import * as Knex from 'knex';
import { connectionConfig } from '../db/knexfile';
const knex = Knex(connectionConfig);

const store = new KnexSessionStore({
  knex,
  tablename: 'sessions'
});

export const mySession = session({
  secret: process.env.SESSION_SECRET,
  cookie: { maxAge: 60000 },
  store,
  saveUninitialized: false,
  resave: true
});
