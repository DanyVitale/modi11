import * as net from 'net';
import {spawn} from 'child_process';

net.createServer((socket) => {
  console.log('Client connected ...');
  // recibe el comando y los argumentos
  socket.on('data', (data) => {
    // separa el comando y los argumentos
    const command = data.toString().split(' ');
    // ejecuta el comando
    const child = spawn(command.join('')[0], command.slice(1));
    // recibe la salida del comando
    child.stdout.pipe(socket);
    // recibe un error
    if (child.stderr) {
      child.stderr.pipe(socket);
    }
    // imprime el comando
    console.log(command.join(' '));

    // child.on('close', () => {
    //   socket.end();
    // });
    socket.on('end', () => {
      console.log('Client disconnected ...');
    });
  });
}).listen(8000, () => {
  console.log('Server listening on port 8000 ...');
});