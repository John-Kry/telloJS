const dgram = require('dgram');
const server = dgram.createSocket('udp4');
client.bind(8001);

const client = dgram.createSocket('udp4');
client.on('message', (msg,info) => {
	console.log('Data received from server : ' + msg.toString());
});								