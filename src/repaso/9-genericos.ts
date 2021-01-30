//al momento de poner <T> significa que va a recibir de cualquier tipo
function queTipoSoy<T>(argumeto:T){
    return argumeto;
}

let soyString= queTipoSoy('hola');
let soyNumero = queTipoSoy(100);
let soyBolea = queTipoSoy(true);
