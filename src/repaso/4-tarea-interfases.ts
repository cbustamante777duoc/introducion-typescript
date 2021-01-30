interface SuperHeroeMarvel{
    nombre:string;
    edad:number;
    direccion:Direccion,
    mostrarDireccion:()=>string;
}

interface Direccion{
    calle: string;
    pais: string;
    cuidad: string;
}

const superHeroe:SuperHeroeMarvel = {
    nombre:'Spiderman',
    edad:30,
    direccion:{
        calle:'main st',
        pais:'usa',
        cuidad:'NY'
    },
    mostrarDireccion(){
        return this.nombre+', '+this.direccion.calle+','+this.direccion.cuidad;
    }
}
const direccion = superHeroe.mostrarDireccion();
console.log(direccion);