import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCardComponent } from './card/add-card/add-card.component';
import { CardComponent } from './card/card.component';
import { EditCardComponent } from './card/edit-card/edit-card.component';
import { ShowCardComponent } from './card/show-card/show-card.component';
import { GridComponent } from './grid/grid.component';
import { GridEditComponent } from './grid/grid-edit/grid-edit.component';
import { GridAddComponent } from './grid/grid-add/grid-add.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path:'', component:CardComponent},
  {path:'list-card', component:ShowCardComponent},
  {path:'add-card', component:AddCardComponent},
  {path:'add-grid', component:GridAddComponent},
  {path:'list-grid', component:GridComponent},
  {path:'register', component:RegisterComponent},
  {path:'login', component:LoginComponent},
  {path:'edit-card/:cardId', component:EditCardComponent},
  {path:'edit-grid/:gridId', component:GridEditComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
