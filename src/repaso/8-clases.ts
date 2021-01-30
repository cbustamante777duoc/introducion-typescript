class PersonaNormal{
    constructor(
        public nombre:string,
        public direccion:string,

    ){}
}


class Heroe extends PersonaNormal{
       
    //la manera nueva de declarar las variables que tiene la clase
    constructor(
        public alterEgo:string,
        public edad:number,
        public nombreReal:string,
    ){
        super(nombreReal,'NY');
    }
} 

const ironman = new Heroe('iromam',38,'tony star');
console.log(ironman);