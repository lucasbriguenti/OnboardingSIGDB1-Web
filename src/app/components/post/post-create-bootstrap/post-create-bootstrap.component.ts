import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HeaderService } from '../../template/header/header.service';
import { PostCreateService } from '../post-create/post-create.service';
import { PostService } from '../post.service';
import { Company, User } from '../user.model';

@Component({
  selector: 'app-post-create-bootstrap',
  templateUrl: './post-create-bootstrap.component.html',
  styleUrls: ['./post-create-bootstrap.component.css']
})
export class PostCreateBootstrapComponent implements OnInit {
  companys: Company[];
  users: User[];
  firstFormGroup: FormGroup = new FormGroup({});
  constructor(private service: PostService,
    private router: Router, 
    private postService: PostCreateService,
    private formBuilder: FormBuilder,
    private headerService: HeaderService) { }

  ngOnInit(): void {
    this.getUsers();
    this.createForm();
  }
  createForm(){
    this.firstFormGroup = this.formBuilder.group({
      empresaName: ['', Validators.required],
      funcionarioName: ['', Validators.required],
      corpo: ['', Validators.required],
      titulo: ['', Validators.required]
    });
  }
  async getUsers(): Promise<void> {
    const users = await this.service.getUsers().toPromise();
    this.users = users;
    this.getCompanys();
  }
  getCompanys(){
    if(this.users){
      this.companys = this.users.map(x => x.company);
    }
  }
  setSelectedUser() {
      const {funcionarioName} = this.firstFormGroup.controls;
      const usuario = this.users.find(x => x.id === +funcionarioName.value);
      if(usuario){
        this.postService.user = usuario;
      }
  }
  
  resetar(){
    this.firstFormGroup.reset();
  }
  cancel(): void {
    this.resetar();
    this.router.navigate(["/post"]);
  }
  postar() {
    const {corpo, titulo} = this.firstFormGroup.controls;
    if(titulo.value && corpo.value){
      this.postService.postar(titulo.value, corpo.value);
      this.cancel();
    }
    else{
      this.service.showMessage('Preencha os campos obrigatórios!');
    }
  }
}
