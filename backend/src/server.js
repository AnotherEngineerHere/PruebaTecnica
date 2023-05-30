const app = require('./app');
const connectDatabase = require('././utils/database');
const config = require('./config');

const { port } = config;

connectDatabase();

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
