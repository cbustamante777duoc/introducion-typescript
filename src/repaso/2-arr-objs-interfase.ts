let habilidades2:(string | number)[] = ['angular','bash','laravel',20];
let nombres2:string[] =['jennie','cristian','lalisa'];
/* recorriendo el arreglo con foreach */
nombres2.forEach((value,index)=>{
    console.log(index+'-'+value);
});

interface Personaje {
    nombre:string;
    hp:number;
    habilidades: string[];
    pais?:string;
}

const personaje2: Personaje = {
    nombre:'cristian bustamante',
    hp:100,
    habilidades:['correr','velocidad','saltar']
}

//deberia estar adentro del objeto esto es un ejemplo
personaje2.pais = 'chile';

console.table(personaje2);