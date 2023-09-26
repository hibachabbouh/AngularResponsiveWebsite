import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MenuComponent } from './pages/menu/menu.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AboutComponent } from './pages/about/about.component';
import { MenupageComponent } from './pages/menupage/menupage.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'menu',component:MenuComponent},
  {path:'menu/:id',component:MenupageComponent},
  {path:'contact',component:ContactComponent},
  {path:'about',component:AboutComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
