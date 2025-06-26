import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DisqueriaAboutComponent } from './disqueria-about/disqueria-about.component';
import { DisqueriaMusicComponent } from './disqueria-music/disqueria-music.component';

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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
