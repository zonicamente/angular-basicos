import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HeroComponent } from './heroe/heroes.component';
import { ListadoComponent } from './listado/listado.component';

@NgModule({
    declarations: [
        HeroComponent,
        ListadoComponent
    ],
    exports:[
        ListadoComponent
    ],
    imports:[
        CommonModule
    ]
})
export class HeroModule {

}