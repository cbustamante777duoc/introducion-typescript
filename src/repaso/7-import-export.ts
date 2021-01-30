import { CalcularIva2, IProducto } from './6-desesctructuracion-funcion';

const carritoCompras: IProducto[] = [
    {
        desc:'telefono 1',
        precio:200
    },
    {
        desc:'telefono 2',
        precio:100
    }
];

const [total,iva] = CalcularIva2(carritoCompras);
console.log('total'+total);
console.log('iva'+iva);