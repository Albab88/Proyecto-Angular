import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarDiscoComponent } from './agregar-disco/agregar-disco.component';
import { DisqueriaAboutComponent } from './disqueria-about/disqueria-about.component';
import { DisqueriaMusicComponent } from './disqueria-music/disqueria-music.component';
import { SignUpComponent } from './sign-up/sign-up.component';

const routes: Routes = [
  
  {
    path: '',
    redirectTo: '/music',
    pathMatch: 'full'
  },
  {
    path: 'music',
    component: DisqueriaMusicComponent
  },
  {
    path: 'about',
    component: DisqueriaAboutComponent
  }, 
  {
    path: 'sign-up',
    component: SignUpComponent
  },
  {
    path: 'agregar-disco',
    component: AgregarDiscoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
