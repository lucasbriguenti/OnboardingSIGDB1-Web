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
import { MatSelectModule } from '@angular/material/select';
import { CarroReadComponent } from './components/carro/carro-read/carro-read.component';
import { CarroUpdateComponent } from './components/carro/carro-update/carro-update.component';
import { CarroDeleteComponent } from './components/carro/carro-delete/carro-delete.component';
import { CarroCreateComponent } from './components/carro/carro-create/carro-create.component';
import { CarrosCrudComponent } from './views/carros-crud/carros-crud.component';

registerLocaleData(localePt);

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    FuncionariosCrudComponent,
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
    CarroReadComponent,
    CarroUpdateComponent,
    CarroDeleteComponent,
    CarroCreateComponent,
    CarrosCrudComponent
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
