import { Pool } from 'pg';

const connectionString = '	postgres://tptecnqp:***@kesavan.db.elephantsql.com/tptecnqp';

const db = new Pool ({ connectionString });

export default db;