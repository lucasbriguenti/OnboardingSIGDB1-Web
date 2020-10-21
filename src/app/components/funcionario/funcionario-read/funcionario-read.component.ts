import { FuncionarioService } from './../funcionario.service';
import { Funcionario } from './../funcionario.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-funcionario-read',
  templateUrl: './funcionario-read.component.html',
  styleUrls: ['./funcionario-read.component.css']
})
export class FuncionarioReadComponent implements OnInit {

  funcionarios: Funcionario[]

  constructor(private service: FuncionarioService) { }

  ngOnInit(): void {
    this.service.read().subscribe(func => {
      this.funcionarios = func;
      console.log(this.funcionarios);
    })
  }


}
