import { templateJitUrl } from "@angular/compiler";
import { Component } from "@angular/core";

@Component({
    selector: 'app-heroe',
    templateUrl: 'heroes.component.html'
})

export class HeroComponent{
    nombre: string = 'Ironman'; 
    edad  : number = 45;

    get nombreCapitalizado ():string{
            return this.nombre.toUpperCase();
    }

    obtenerNombre(): string{
        return `${this.nombre} - ${this.edad}`
    }

    cambiarNombre(): void{
        this.nombre = 'Spiderman';
    }

    cambiarEdad(): void{
        this.edad=10;
    }
}