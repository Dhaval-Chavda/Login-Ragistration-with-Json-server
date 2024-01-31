import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RagistrationComponent } from './ragistration/ragistration.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:'login', component:LoginComponent},
  {path:'ragistration',component:RagistrationComponent},
  {path:'home', component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
