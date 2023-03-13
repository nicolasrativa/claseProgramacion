// Node.js program to demonstrate the
// process.kill(pid[, signal]) method


// Printing process signal acknowledged
const displayInfo = () => {
  console.log('Receiving SIGINT signal in nodeJS.');
}

// Initiating a process
process.on('SIGINT', displayInfo);

setTimeout(() => {
  console.log('Exiting.');
  process.exit(0);
}, 100);

// kill the process with pid and signal = 'SIGINT'
process.kill(process.pid, 'SIGINT');