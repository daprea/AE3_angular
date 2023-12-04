import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PrincipalComponent } from './principal/principal.component';
import { ContactoComponent } from './contacto/contacto.component';
import { SobreNosotrosComponent } from './sobre-nosotros/sobre-nosotros.component';
import { DetalleComponent } from './detalle/detalle.component';

const routes: Routes = [
  { path: '', component: LoginComponent }, // Redirigimos al login por defecto
  { path: 'login', component: LoginComponent },
  { path: 'principal', component: PrincipalComponent },
  { path: 'detalle/:id', component: DetalleComponent }, //  Permitimos pasar un parametro al ir a la pantalla de detalle
  { path: 'contacto', component: ContactoComponent },
  { path: 'sobreNosotros', component: SobreNosotrosComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
