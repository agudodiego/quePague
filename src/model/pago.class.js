export class Pago {
    
    nombre = '';
    pagado = false;
    fecha = null;
    
    constructor (nombre, pagado = false){
        this.nombre = nombre;
        this.pagado = pagado;
        this.fecha = new Date();
    }
}