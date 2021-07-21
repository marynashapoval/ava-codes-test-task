import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { FirstPageComponent } from './pages/routing-pages/first-page/first-page.component';
import { SecondPageComponent } from './pages/routing-pages/second-page/second-page.component';

const routes: Routes = [
  {
    path: 'main',
    component: MainPageComponent
  },
  {
    path: 'simple-page-1',
    component: FirstPageComponent
  },
  {
    path: 'simple-page-2',
    component: SecondPageComponent
  },
  {
    path: '**',
    redirectTo: 'main'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
