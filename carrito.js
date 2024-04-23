class Producto {
    constructor(codigo, nombre, precio) {
        this.codigo = codigo;
        this.nombre = nombre;
        this.precio = precio;
    
    }
}
class cliente{
    constructor(nombre, identificacion){
        this.nombre= nombre;
        this.identificacion=identificacion;
    }
  
    mostrarCliente(){
        console.log(`Informacion del cliente \n Nombre: ${this.nombre} \n Identificacion: ${this.identificacion}`);
    }
} 
  
class CarritoDeCompras {
    constructor() {
        this.productos = [];
        this.cliente = cliente;
    }

    agregarCliente(cliente) {
        this.cliente = cliente;
    }
    agregarProducto(producto) {
        this.productos.push(producto);//el push añade un nuevo elemento al array
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
        this.cliente.mostrarCliente()
        this.mostrarProductos();
        console.log(`Total a pagar: ${this.calcularTotal()}`);
    }
    vaciarCarrito() {
        this.productos = [];
        console.log("El carrito ha sido vaciado.");
    }    

}
console.log(" ");


let producto1 = new Producto(1, "blush anika", 25000);
let producto2 = new Producto(2, "Polvos sueltos AME", 30000);
let producto3 = new Producto(3, "Lip Oil Ruby Rose", 40000);
let cliente1 = new cliente('Mar', '123456789');

let carrito = new CarritoDeCompras();

carrito.agregarCliente(cliente1);
carrito.agregarProducto(producto1);
carrito.agregarProducto(producto2);
carrito.agregarProducto(producto3);

carrito.mostrarProductos();
carrito.mostrarFactura();
carrito.vaciarCarrito();

  