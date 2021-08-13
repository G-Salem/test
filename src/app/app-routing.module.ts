import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarnetAdressesComponent } from './pages/carnet-adresses/carnet-adresses.component';
import { CarnetDetailComponent } from './pages/carnet-detail/carnet-detail.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [


      { path: '', redirectTo: 'home', pathMatch: 'full' },
      {
        path: 'carnet',
        component: CarnetAdressesComponent
      },
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'carnetdetail/:id',
        component: CarnetDetailComponent
      },

    ];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
