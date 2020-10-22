import { FuncionarioService } from "./../funcionario.service";
import { ActivatedRoute, Router } from "@angular/router";
import { Funcionario } from "./../funcionario.model";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-funcionario-delete",
  templateUrl: "./funcionario-delete.component.html",
  styleUrls: ["./funcionario-delete.component.css"],
})
export class FuncionarioDeleteComponent implements OnInit {
  funcionario: Funcionario;

  constructor(
    private router: Router,
    private service: FuncionarioService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    var id = this.route.snapshot.paramMap.get("id");
    this.service
      .readById(id)
      .subscribe((funcionario) => (this.funcionario = funcionario));
  }

  cancel(): void {
    this.router.navigate(["/funcionarios"]);
  }

  deleteFuncionario(): void {
    this.service
      .delete(this.funcionario.id.toString())
      .subscribe(() => {
        this.service.showMessage("Funcionario excluido com sucesso!");
        this.cancel();
      });
  }
}
