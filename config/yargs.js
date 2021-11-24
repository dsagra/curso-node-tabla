const argv = require('yargs')
    .options({
        'b':{
        alias: 'base',
        type: 'number',
        describe:'Hace la tabla de multiplicar',
        demandOption: true,
     },
     'l':{
        alias: 'listar',
        type: 'boolean', 
     describe:'Muestra la tabla en consolta',
        default: false,
     },
     'h':{
        alias: 'hasta',
        type: 'number', 
     describe:'Hasta que numero quiere hacer las multiplicaciones',
        default: 10,
     }
    })
    .check( (argv,options)=>{
        if (isNaN(argv.b)){
            throw 'La base tiene que ser un numero';
        }
        if (isNaN(argv.h)){
            throw 'hasta tiene que ser un numero';
        }
        return true;
    })
    .argv;



    module.exports = argv;