interface Pasajero{
    nombre:string;
    hijos?:string[]
}
const pasajero1: Pasajero ={
    nombre:'Jennie Kim'
}

const pasajero2: Pasajero = {
    nombre:'Gloria',
    hijos:['Cristian','Michael','Felipe']
}


function imprimirHijos(pasajero:Pasajero) {
    //pregunta si tiene hijos = ? sino lanza el 0
    //de esta manera se evita el error con el undifinet.lenght 
    
    const cuantosHijos = pasajero.hijos?.length || 0;
    console.log(cuantosHijos);
    
}

imprimirHijos(pasajero1);