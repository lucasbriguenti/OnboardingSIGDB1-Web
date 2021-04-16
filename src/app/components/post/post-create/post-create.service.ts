import { Injectable } from '@angular/core';
import { HeaderService } from '../../template/header/header.service';
import { Post } from '../post.model';
import { PostService } from '../post.service';
import { Company, User } from '../user.model';

@Injectable({
  providedIn: 'root'
})
export class PostCreateService {
  private post: Post;
  private selectedUser: User;
  private selectedCompany: Company;
  constructor(private service: PostService, private headerService: HeaderService) { }
  get user(): User{
    return this.selectedUser;
  }
  set user(user: User){
    this.selectedUser = user;
  }

  get company(): Company{
    return this.selectedCompany;
  }

  set company(company: Company) {
    this.selectedCompany = company;
  }

  reset(){
    this.selectedCompany = null;
    this.selectedUser = null;
  }
  postar(title: string, body: string): void {
    const post: Post = {
      body: body,
      title: title,
      id: 0,
      userId: this.user.id
    };
    this.service.create(post).subscribe(_ => {
      this.headerService.avisarDataUltimoPost(new Date());
      this.service.showMessage('Post realizado com sucesso!');
    });
  }
}
