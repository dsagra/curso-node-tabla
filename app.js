

const {crearArchivo } = require('./helpers/multiplicar');

const argv = require('./config/yargs.js');

console.clear();




// console.log(process.argv);

// console.log(argv);

// console.log(`la base de yargs es: ${argv.b}`);
// const base=19;
crearArchivo(argv.b, argv.l,argv.h)
.then( nombreArchivo => console.log(nombreArchivo, 'creado'))
.catch((err)=>console.log(err));
