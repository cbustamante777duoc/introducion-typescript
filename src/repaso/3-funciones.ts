
function sumar(a:number,b:number):number {
    return a+b;
    
}

const sumarFlecha = (a:number,b:number):number => {
    return a + b;
}

function multiplicar(numero1:number,otroNumero?:number, numero2:number =2):number {
    return numero1*numero2;
}



const multiplicacion = multiplicar(5,0,5);
console.log(multiplicacion);
const resultado = sumar(22,3);
console.log(resultado);


interface PersonajeLor{
    nombre:string;
    puntoVida:number;
    mostrarHp:() =>void;
}

/**
 * funcion que a curar los personajes que utiliza la interfase de PersonajeLor
 * @param personaje 
 * @param cantidadCuracion = cantidad de puntos a ser curados
 */
function curar(personaje:PersonajeLor,cantidadCuracion:number):void {
    personaje.puntoVida += cantidadCuracion;
    console.log(`el personaje ${personaje.nombre} ha sido curado en ${cantidadCuracion}`);
}

const Gandalf: PersonajeLor = {
    nombre:'gandalf el gris',
    puntoVida:80,
    mostrarHp(){
        console.log(`la vida de ${this.nombre} es de ${this.puntoVida}`);
    }

}

curar(Gandalf,20);
Gandalf.mostrarHp();
Gandalf.toString();