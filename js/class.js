class productos1 {

    constructor(producto) {
        this.id= producto.id;
        this.nombre= producto.nombre;
        this.precio= parseFloat(producto.precio);
        this.contenido= producto.contenido;
        this.img= producto.img;
        this.cantidad= producto.cantidad;
    }


    sumarIva(){
        this.precio= this.precio*1.21;
        alert(nombrePersona + "El precio de tu producto es de: ")


    }

    descuento(resta){
        this.precio -= resta;
    }

    sumarCantidad(){
        this.cantidad++; 
    }

    restarCantidad(){
        this.cantidad--;
    }


}


