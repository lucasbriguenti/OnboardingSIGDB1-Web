import { Funcionario } from "./../funcionario.model";
import { FuncionarioService } from "./../funcionario.service";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Validators } from '@angular/forms';
import { MASKS ,NgBrazilValidators } from 'ng-brazil';

@Component({
  selector: "app-funcionario-create",
  templateUrl: "./funcionario-create.component.html",
  styleUrls: ["./funcionario-create.component.css"],
})
export class FuncionarioCreateComponent implements OnInit {
  public MASKS = MASKS;
  funcionario: Funcionario = {
    nome: null,
    dataContratacao: null,
    id: null,
    cpf: null,
  };

  constructor(private service: FuncionarioService, private router: Router) {}

  ngOnInit(): void {}

  createFuncionario(): void {
    this.service.create(this.funcionario).subscribe(() => {
      this.service.showMessage("Funcionario cadastrado!");
      this.cancel();
    });
  }

  cancel(): void {
    this.router.navigate(["/funcionarios"]);
  }
}
