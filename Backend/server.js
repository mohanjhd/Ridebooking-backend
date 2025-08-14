const http = require('http');
const app = require('./app');
const { initializeSocket } = require('./socket');
const port = process.env.PORT || 3000;

const server = http.createServer(app);

initializeSocket(server);
const PORT = process.env.PORT || 3000;


server.listen(port, '0.0.0.0', () => {
    console.log(`Server is running on port ${port}`);
});