
const fs = require('fs');
const argv = require('../config/yargs');

const crearArchivo = async  (base=5,listar,hasta) =>{

    const colors = require('colors');   

    let salida,consola='';

for (let index = 1; index <= hasta; index++) {
    salida+=(`${base} x ${index} = ${index*base}\n`);   
    consola+=(`${base} ` + colors.green('x ')+ `${index} ${ '='.blue} ${index*base}\n`);   
}
if (listar){
    console.log('==================='.green);
    console.log(colors.bgGreen(`    TABLA DEL ${base}    `));
    console.log('==================='.green);
    console.log(consola);
}

const nombreArchivo=`./salida/tabla-${base}.txt`;

try {
  fs.writeFileSync(nombreArchivo, salida);
    return nombreArchivo;

} catch (error) {
    throw error
}





// console.log(`${nombreArchivo} creado`);

}


module.exports={
    crearArchivo
}