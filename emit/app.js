// const EventEmitter = require('events');
// const emitter = new EventEmitter();

// // listen to events (Event Listener)
// emitter.on('greetings', (data) => {
//     console.log('data :>> ', data);
//   });
  
//   // create an event (Event Emitter)
//   emitter.emit('greetings', 'Hello World!');




  const EventEmitter = require('events');
  const myEmitter = new EventEmitter();

  // Listener 1 for 'eventA'
  myEmitter.on('eventA', () => {
   console.log('Listener 1 for eventA executed');
  });

  // Listener 2 for 'eventA'
  myEmitter.on('eventA', () => {
   console.log('Listener 2 for eventA executed');
  });
  
  // Emitting 'eventA'
  myEmitter.emit('eventA');