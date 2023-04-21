import { connect, connection } from 'mongoose';

const conn = {
  isConnected: false,
}

export async function dbConnect() {
  if(conn.isConnected) {
    console.log('Using existing connection')
    return;
  }
  const db = await connect(MONGODB_URI);
  conn.isConnected = db.connections[0].readyState;
  console.log(db.connection.db.databaseName);
}

connection.on('connected', () => {
  console.log('Mongoose connected to db');
});

connection.on('error', (err) => {
  console.log(err.message);
});