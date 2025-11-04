require('dotenv').config(); // Load variables from .env file
import dotenv from 'dotenv'
import pg from 'pg'



const { Pool } = require('pg');
const pool = new Pool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  // Add this line if you are connecting from your local machine to a remote service
  ssl: { rejectUnauthorized: false } 
});