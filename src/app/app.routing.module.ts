import { NgModule } from "@angular/core";
// importamos las rutas de angular
import { Routes, RouterModule } from '@angular/router';
import { PortafolioComponent } from "./pages/portafolio/portafolio.component";
import { AboutComponent } from "./pages/about/about.component";
import { ItemComponent } from "./pages/item/item.component";
import { SplitInterpolation } from "@angular/compiler";
// SE CREA UN MODULO PARA EVITAR CARGAR EL APP MODULE


// se especifican como queremos que funcionen las rutas
const app_routes: Routes = [
    // las rutas es un arreglo, dentro de este arreglo viene la deficion de las rutas a especificar
    
    // cuando la ruta este vacia redirige al componente home
    { path: 'home', component: PortafolioComponent},

    // para el componente about
    { path: 'about', component: AboutComponent},

    // para mostrar el item
    { path: 'item', component: ItemComponent},
    // cualquier otra ruta que se ingrese y no sea la de la lista redirecciona al path 'home'
    { path: '**', pathMatch:'full', redirectTo: 'home'},
    

];


@NgModule({

    // importamos el modulo routerModule
    imports: [

        // SE AGREGA EL HASH PARA QUE LOS NAVEGADORES WEB SEPAN QUE LO QUE SIGUE DEL HASH NO ES UN DIRECTORIO DEL SplitInterpolation, ES UNA PARTE DE UNA RUTA DEL index.HTML
        RouterModule.forRoot(app_routes, { useHash: true})
      ],

      exports: [
        // se debe exportar RouterModule
        RouterModule
      ]
})
// creamos la clase exportandola porque se usara fuera
export class AppRoutingModule{

}