import { FuncionarioDeleteComponent } from "./../funcionario-delete/funcionario-delete.component";
import { FuncionarioService } from "./../funcionario.service";
import { Funcionario } from "./../funcionario.model";
import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";

@Component({
  selector: "app-funcionario-read",
  templateUrl: "./funcionario-read.component.html",
  styleUrls: ["./funcionario-read.component.css"],
})
export class FuncionarioReadComponent implements OnInit {
  funcionarios: Funcionario[];
  displayedColumns = ["id", "nome", "cpf", "dataContratacao", "action"];

  constructor(private service: FuncionarioService, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.service.read().subscribe((func) => (this.funcionarios = func));
  }

  openDialog(): void {
    this.dialog.open(FuncionarioDeleteComponent);
  }
}
