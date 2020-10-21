import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './views/home/home.component';
import { FuncionariosCrudComponent } from './views/funcionarios-crud/funcionarios-crud.component';
import { CargosCrudComponent } from './views/cargos-crud/cargos-crud.component';
import { EmpresasCrudComponent } from './views/empresas-crud/empresas-crud.component';
import { FuncionarioCreateComponent } from './components/funcionario/funcionario-create/funcionario-create.component';

const routes: Routes = [{
  path: "",
  component: HomeComponent
},{
  path: 'funcionarios',
  component: FuncionariosCrudComponent
},{
  path: 'cargos',
  component: CargosCrudComponent
},{
  path: 'empresas',
  component: EmpresasCrudComponent
},{
  path: 'funcionarios/create',
  component: FuncionarioCreateComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
