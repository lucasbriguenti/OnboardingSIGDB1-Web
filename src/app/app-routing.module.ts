import { EmpresaUpdateComponent } from "./components/empresa/empresa-update/empresa-update.component";
import { EmpresaDeleteComponent } from "./components/empresa/empresa-delete/empresa-delete.component";
import { EmpresaCreateComponent } from "./components/empresa/empresa-create/empresa-create.component";
import { FuncionarioDeleteComponent } from "./components/funcionario/funcionario-delete/funcionario-delete.component";
import { FuncionarioUpdateComponent } from "./components/funcionario/funcionario-update/funcionario-update.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { HomeComponent } from "./views/home/home.component";
import { FuncionariosCrudComponent } from "./views/funcionarios-crud/funcionarios-crud.component";
import { EmpresasCrudComponent } from "./views/empresas-crud/empresas-crud.component";
import { FuncionarioCreateComponent } from "./components/funcionario/funcionario-create/funcionario-create.component";
import { CarroCreateComponent } from './components/carro/carro-create/carro-create.component';
import { CarroUpdateComponent } from './components/carro/carro-update/carro-update.component';
import { CarroDeleteComponent } from './components/carro/carro-delete/carro-delete.component';
import { CarrosCrudComponent } from './views/carros-crud/carros-crud.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
  },
  {
    path: "funcionarios",
    component: FuncionariosCrudComponent,
  },
  {
    path: "carros",
    component: CarrosCrudComponent,
  },
  {
    path: "empresas",
    component: EmpresasCrudComponent,
  },
  {
    path: "funcionarios/create",
    component: FuncionarioCreateComponent,
  },
  {
    path: "funcionarios/update/:id",
    component: FuncionarioUpdateComponent,
  },
  {
    path: "funcionarios/delete/:id",
    component: FuncionarioDeleteComponent,
  },
  {
    path: "empresas/create",
    component: EmpresaCreateComponent,
  },
  {
    path: "empresas/delete/:id",
    component: EmpresaDeleteComponent,
  },
  {
    path: "empresas/update/:id",
    component: EmpresaUpdateComponent,
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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
