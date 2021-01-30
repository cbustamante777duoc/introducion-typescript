interface Reproductor{
    volumen:number;
    segundo:number;
    cancion:string;
    detalle: Detalle;
}

interface Detalle{
    autor:string;
    anio: number;
}

const reproductor: Reproductor= {
    volumen:90,
    segundo:30,
    cancion:'solo',
    detalle:{
        anio:2019,
        autor:'jennie'
    }
    
}

const {volumen,segundo,cancion,detalle} = reproductor
const {autor:autorDetalle} = detalle;
const autor = 'lalisa';

// console.log('el volumen es de: '+volumen);
// console.log('el segundo  de: '+segundo);
// console.log('la cancion de: '+cancion);
// console.log('el autor es: '+autorDetalle);

const blackPink: string [] = ['Jennie','Lalisa','Rose','Jisoo'];
const[i1,i2] = blackPink;
//pero si quiero una sola variable se puede se esta manera(rose)
const {2:rose}= blackPink;
console.log('integrante 1 :'+i1);
console.log('integrante 2 :'+i2);
console.log('integrante 3 :'+rose);

// También se puede destructurar array's para evitar el "," por datos que no quieres, ejemplo:
// let nombres = ["David", "Erick", "Jean", "Jose"];

// Si quieres obtener cualquier valor del array, tener en cuenta que se hace mediante el índice que se encuentra el valor a destructurar (En este caso sacaré el valor de "Jean" que se encuentra en el índice 2)

// const { 2 : amigoJean } = nombres; 