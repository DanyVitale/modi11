import * as net from 'net';
// import {MessageEventEmitterClient} from './eventEmitterClient';

// recibe el comando y los argumentos
const filename = process.argv[2];
// eliminar el \n del final
const data = filename.substring(0, filename.length - 3);
// const commands = process.argv.slice(3);
const commands = process.argv.slice(3);

const client = net.connect({port: 8000}, () => {
  console.log('Connected to server ...');
  // envia el comando y los argumentos
  client.write(`${commands.join(' ')} ${data}`);
});

// pasar a string el mensaje
client.on('data', (data) => {
  console.log(data.toString());
  client.end();
});

client.on('end', () => {
  console.log('Client disconnected ...');
});

// En caso de error en la conexión
client.on('error', (err) => {
  console.log(err);
});