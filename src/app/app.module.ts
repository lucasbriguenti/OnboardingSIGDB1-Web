import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/template/header/header.component';
import { FooterComponent } from './components/template/footer/footer.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { NavComponent } from './components/template/nav/nav.component';
import { MatSidenavModule } from'@angular/material/sidenav'
import { MatListModule } from '@angular/material/list';
import { HomeComponent } from './views/home/home.component';
import { MatCardModule } from '@angular/material/card';
import { FuncionariosCrudComponent } from './views/funcionarios-crud/funcionarios-crud.component';
import { CargosCrudComponent } from './views/cargos-crud/cargos-crud.component';
import { EmpresasCrudComponent } from './views/empresas-crud/empresas-crud.component';
import { RedDirective } from './directives/red.directive';
import { FuncionarioCreateComponent } from './components/funcionario/funcionario-create/funcionario-create.component';

import { MatButtonModule } from '@angular/material/button'
import { MatSnackBarModule } from '@angular/material/snack-bar'

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker'
import { MatNativeDateModule } from '@angular/material/core';
import { FuncionarioReadComponent } from './components/funcionario/funcionario-read/funcionario-read.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort'
import {MatMenuModule} from '@angular/material/menu';

import localePt from '@angular/common/locales/pt'
import { registerLocaleData } from '@angular/common';
import { FuncionarioUpdateComponent } from './components/funcionario/funcionario-update/funcionario-update.component';
import { FuncionarioDeleteComponent } from './components/funcionario/funcionario-delete/funcionario-delete.component';
import { MatDialogModule } from '@angular/material/dialog';
import { EmpresaReadComponent } from './components/empresa/empresa-read/empresa-read.component';
import { NgBrazil } from 'ng-brazil';
import { TextMaskModule } from 'angular2-text-mask';
import { EmpresaCreateComponent } from './components/empresa/empresa-create/empresa-create.component';
import { EmpresaDeleteComponent } from './components/empresa/empresa-delete/empresa-delete.component';
import { EmpresaUpdateComponent } from './components/empresa/empresa-update/empresa-update.component';
import { CargoReadComponent } from './components/cargo/cargo-read/cargo-read.component';
import { CargoDeleteComponent } from './components/cargo/cargo-delete/cargo-delete.component';
import { CargoCreateComponent } from './components/cargo/cargo-create/cargo-create.component';
import { CargoUpdateComponent } from './components/cargo/cargo-update/cargo-update.component';
import { FuncionarioVincularEmpresaComponent } from './components/funcionario/funcionario-vincular-empresa/funcionario-vincular-empresa.component';
import { MatSelectModule } from '@angular/material/select';
import { FuncionarioVincularCargoComponent } from './components/funcionario/funcionario-vincular-cargo/funcionario-vincular-cargo.component';

registerLocaleData(localePt);

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    FuncionariosCrudComponent,
    CargosCrudComponent,
    EmpresasCrudComponent,
    RedDirective,
    FuncionarioCreateComponent,
    FuncionarioReadComponent,
    FuncionarioUpdateComponent,
    FuncionarioDeleteComponent,
    EmpresaReadComponent,
    EmpresaCreateComponent,
    EmpresaDeleteComponent,
    EmpresaUpdateComponent,
    CargoReadComponent,
    CargoDeleteComponent,
    CargoCreateComponent,
    CargoUpdateComponent,
    FuncionarioVincularEmpresaComponent,
    FuncionarioVincularCargoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule, 
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MatSnackBarModule,
    HttpClientModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule, 
    MatDatepickerModule,
    MatNativeDateModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatMenuModule,
    MatDialogModule,
    NgBrazil, 
    TextMaskModule,
    MatSelectModule
  ],
  providers: [{
    provide: LOCALE_ID,
    useValue: 'pt-BR'
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
