import { FuncionarioVincularEmpresaComponent } from './components/funcionario/funcionario-vincular-empresa/funcionario-vincular-empresa.component';
import { CargoDeleteComponent } from "./components/cargo/cargo-delete/cargo-delete.component";
import { CargoUpdateComponent } from "./components/cargo/cargo-update/cargo-update.component";
import { CargoCreateComponent } from "./components/cargo/cargo-create/cargo-create.component";
import { EmpresaUpdateComponent } from "./components/empresa/empresa-update/empresa-update.component";
import { EmpresaDeleteComponent } from "./components/empresa/empresa-delete/empresa-delete.component";
import { EmpresaCreateComponent } from "./components/empresa/empresa-create/empresa-create.component";
import { FuncionarioDeleteComponent } from "./components/funcionario/funcionario-delete/funcionario-delete.component";
import { FuncionarioUpdateComponent } from "./components/funcionario/funcionario-update/funcionario-update.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { HomeComponent } from "./views/home/home.component";
import { FuncionariosCrudComponent } from "./views/funcionarios-crud/funcionarios-crud.component";
import { CargosCrudComponent } from "./views/cargos-crud/cargos-crud.component";
import { EmpresasCrudComponent } from "./views/empresas-crud/empresas-crud.component";
import { FuncionarioCreateComponent } from "./components/funcionario/funcionario-create/funcionario-create.component";

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
    path: "cargos",
    component: CargosCrudComponent,
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
    path: "cargos/create",
    component: CargoCreateComponent,
  },
  {
    path: "cargos/update/:id",
    component: CargoUpdateComponent,
  },
  {
    path: "cargos/delete/:id",
    component: CargoDeleteComponent,
  },{
    path: 'funcionarios/vincularempresa/:id',
    component: FuncionarioVincularEmpresaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
