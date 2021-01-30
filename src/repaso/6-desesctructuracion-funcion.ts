export interface IProducto {
    desc:string;
    precio:number;
}

const telefono: IProducto ={
    desc:'sansung 20',
    precio:100
}

const tablet: IProducto ={
    desc:'lg 98',
    precio:69
}

/**
 * funcion que va a recibir un arreglo de producto y va a calcular el iva
 * @param productos arreglo de productos
 */

function CalcularIva(productos: IProducto[]):number{
    let total = 0;
    productos.forEach((producto)=>{
        total+= producto.precio;
    })

    return total*0.19;
}
/**
 * funcion que va a retornar el total y el iva
 * @param productos arreglo de productos
 */
export function CalcularIva2(productos:IProducto[]):[number,number] {
    let total = 0;
    productos.forEach(({precio})=>{
        total+= precio;
    })

    return [total,total*0.19];
    
}
//arreglo de productos
const articulos = [telefono,tablet];

// const iva = CalcularIva(articulos);
// console.log('iva',iva);

// la dos variables que son necesarias para el retorno de la funcion
const [total,iva] = CalcularIva2(articulos);
console.log('total: ',total);
console.log('iva:',iva);