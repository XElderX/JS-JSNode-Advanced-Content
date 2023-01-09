//NodeJs events topic

const EventEmitter = require('events');
const celebrity = new EventEmitter();

//subscrible to celebrity for Observer 1

celebrity.on('race', (result) => {
    if (result === 'win') {
        console.log('Congratulations, you\'re the best!');
    }
});

//subscrible to celebrity for Observer 2

celebrity.on('race', (result) => {
    if (result === 'lost') {
        console.log('Boo you are lame@')
    }
});

process.on('exit', (code) => {
    console.log('Process exit event with code: ', code);
});

celebrity.emit('race', 'win');
celebrity.emit('race', 'lost');
