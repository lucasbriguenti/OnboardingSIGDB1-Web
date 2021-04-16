import { Component, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { title } from 'process';
import { Subscription } from 'rxjs';
import { HeaderService } from '../../template/header/header.service';
import { Post } from '../post.model';
import { PostService } from '../post.service';
import { Company, User } from '../user.model';
import { PostCreateService } from './post-create.service';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit, OnDestroy {
  firstFormGroup: FormGroup = new FormGroup({});
  secondFormGroup: FormGroup = new FormGroup({});
  thirdFormGroup: FormGroup = new FormGroup({});
  users: User[];
  companys: Company[];
  dataSubs: Subscription = new Subscription();

  constructor(private service: PostService,
     private router: Router, 
     private postService: PostCreateService,
     private formBuilder: FormBuilder,
     private headerService: HeaderService) { }
     
  ngOnDestroy(): void {
    this.dataSubs.unsubscribe();
  }

  
  ngOnInit(): void {
    this.getUsers();
    this.createForm();
  }

  createForm(){
    this.firstFormGroup = this.formBuilder.group({empresaName: ['', Validators.required]});
    this.secondFormGroup = this.formBuilder.group({usuarioId: ['', Validators.required]});
    this.thirdFormGroup = this.formBuilder.group({
      titleForm: ['', Validators.required],
      bodyForm: ['', Validators.required]
    });
  }

  async getUsers(): Promise<void> {
    const users = await this.service.getUsers().toPromise();
    this.users = users;
    this.getCompanys();
    // this.service.getUsers().subscribe(users => {
    //   this.users = users;
    //   this.getCompanys();
    // } );
  }

  getCompanys(){
    if(this.users){
      this.companys = this.users.map(x => x.company);
    }
  }

  cancel(): void {
    this.router.navigate(["/post"]);
  }

  setSelectedUser() {
    const {usuarioId} = this.secondFormGroup.controls;
    const usuario = this.users.find(x => x.id === +usuarioId.value);
    console.log(usuario);
    this.postService.user = usuario;
  }

  setSelectedCompany() {
    const {empresaName} = this.firstFormGroup.controls;
    const empresa = this.companys.find(x => x.name === empresaName.value);
    this.postService.company = empresa;
    this.dataSubs = this.headerService.dataUltimoPostObservable().subscribe(data => console.log(data));
  }
  getUserName(): string {
    if(!this.postService.user){
      return '';
    }
    return this.postService.user.name;
  }
  getCompanyName(): string{
    if(!this.postService.company){
      return '';
    }
    return this.postService.company.name;
  }
  validarUsuario() {
    const {usuarioId} = this.secondFormGroup.controls;
    const usuario = this.users.find(x => x.id === +usuarioId.value);
    if(usuario.company.name !== this.postService.company.name){
      this.secondFormGroup.reset();
      this.service.showMessage('Usuário inválido');
    }
  }
  postar() {
    const {titleForm, bodyForm} = this.thirdFormGroup.controls;
    if(titleForm.value && bodyForm.value){
      this.postService.postar(titleForm.value, bodyForm.value);
      this.cancel();
    }
    else{
      this.service.showMessage('Preencha os campos obrigatórios!');
    }
  }
}
