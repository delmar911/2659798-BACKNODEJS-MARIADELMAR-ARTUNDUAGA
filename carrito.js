
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

class Producto {
    constructor(codigo, nombre, precio) {
        this.codigo = codigo;
        this.nombre = nombre;
        this.precio = precio;
    }
}

class Cliente {
    constructor(nombre, identificacion) {
        this.nombre = nombre;
        this.identificacion = identificacion;
    }

    mostrarCliente() {
        console.log(`Informacion del cliente \n Nombre: ${this.nombre} \n Identificacion: ${this.identificacion}`);
    }
}

class CarritoDeCompras {
    constructor() {
        this.productos = [];
        this.cliente = null;
    }

    agregarCliente(cliente) {
        this.cliente = cliente;
    }

    agregarProducto(producto) {
        this.productos.push(producto);
        console.log(`${producto.codigo}. ${producto.nombre} ha sido agregado al carrito.`);
    }

    calcularTotal() {
        let total = 0;
        this.productos.forEach(producto => {
            total += producto.precio;
        });
        return total;
    }

    mostrarProductos() {
        console.log(" ");
        console.log("Productos en el carrito:");
        console.log(" ");
        this.productos.forEach(producto => {
            console.log(`${producto.codigo}. ${producto.nombre}...Precio: ${producto.precio}`);
        });
    }

    mostrarFactura() {
        console.log(" ");
        console.log("-- Factura: --");
        console.log(" ");
        if (this.cliente)
            this.cliente.mostrarCliente();
        this.mostrarProductos();
        console.log(`Total a pagar: ${this.calcularTotal()}`);
    }

    vaciarCarrito() {
        this.productos = [];
        console.log("El carrito ha sido vaciado.");
    }
}

console.log(" ");

rl.question('Ingrese su nombre: ', (nombre) => {
    rl.question('Ingrese su identificación: ', (identificacion) => {
        let cliente1 = new Cliente(nombre, identificacion);
        let carrito = new CarritoDeCompras();
        carrito.agregarCliente(cliente1);

        function agregarProducto() {
            rl.question('Ingrese el nombre del producto: ', (nombreProducto) => {
                rl.question('Ingrese el código del producto: ', (codigoProducto) => {
                    rl.question('Ingrese el precio del producto: ', (precioProducto) => {
                        let producto = new Producto(parseInt(codigoProducto), nombreProducto, parseInt(precioProducto));
                        carrito.agregarProducto(producto);
                        rl.question('¿Desea agregar otro producto? (si/no): ', (respuesta) => {
                            if (respuesta.toLowerCase() === 'si') {
                                agregarProducto();
                            } else {
                                carrito.mostrarFactura();
                                carrito.vaciarCarrito();
                            }
                        });
                    });
                });
            });
        }

        agregarProducto();
    });
});
