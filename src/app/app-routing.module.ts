import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { HomeComponent } from "./views/home/home.component";
import { CarroCreateComponent } from './components/carro/carro-create/carro-create.component';
import { CarroUpdateComponent } from './components/carro/carro-update/carro-update.component';
import { CarroDeleteComponent } from './components/carro/carro-delete/carro-delete.component';
import { CarrosCrudComponent } from './views/carros-crud/carros-crud.component';
import { PostCrudComponent } from "./views/post-crud/post-crud.component";
import { PostCreateComponent } from "./components/post/post-create/post-create.component";
import { PostCreateBootstrapComponent } from "./components/post/post-create-bootstrap/post-create-bootstrap.component";

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
  },
  {
    path: "carros",
    component: CarrosCrudComponent,
  },
  {
    path: "carros/create",
    component: CarroCreateComponent,
  },
  {
    path: "carros/update/:id",
    component: CarroUpdateComponent,
  },
  {
    path: "carros/delete/:id",
    component: CarroDeleteComponent,
  },
  {
    path:"post",
    component: PostCrudComponent
  },
  {
    path:"post/new",
    component: PostCreateComponent
  },
  {
    path:"post/bootstrap/new",
    component: PostCreateBootstrapComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
