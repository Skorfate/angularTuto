import {Injectable} from '@angular/core';

@Injectable()
export class RopaService{
    public nombre_prenda = 'pantalones';
    public coleccion_ropa = ['Pantalones blanco', 'Camiseta roja'];

    prueba(){
        return this.nombre_prenda;
    }

    addRopa(nombre_prenda:string):Array<string>{
        if(!this.coleccion_ropa.includes(nombre_prenda))
            this.coleccion_ropa.push(nombre_prenda);
        return this.getRopa();
    }

    getRopa():Array<string>{
        console.log(this.coleccion_ropa);
        return this.coleccion_ropa;
    }
    deleteRopa(posicion:number):Array<string>{
        this.coleccion_ropa.splice(posicion,1);
        return this.getRopa();
    }

}