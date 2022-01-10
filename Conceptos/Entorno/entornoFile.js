require('dotenv').config();
import { connect } from 'db';
connect({
  host: process.env.DB_HOST,
  username: process.env.DB_USER,
  password: process.env.DB_PASS
});