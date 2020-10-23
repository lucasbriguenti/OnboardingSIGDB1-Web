import { Funcionario } from "./../funcionario.model";
import { ActivatedRoute, Router } from "@angular/router";
import { FuncionarioService } from "./../funcionario.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-funcionario-update",
  templateUrl: "./funcionario-update.component.html",
  styleUrls: ["./funcionario-update.component.css"],
})
export class FuncionarioUpdateComponent implements OnInit {
  funcionario: Funcionario;

  constructor(
    private service: FuncionarioService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    var id = this.route.snapshot.paramMap.get("id");
    this.service.readById(id).subscribe((funcionario) => {
      this.funcionario = funcionario;
    });
  }

  updateFuncionario(): void {
    this.service.update(this.funcionario).subscribe(() => {
      this.service.showMessage("Funcionário atualizado com sucesso!");
      this.cancel();
    });
  }

  cancel(): void {
    this.router.navigate(["/funcionarios"]);
  }
}
