import { EmpresaService } from "./../../empresa/empresa.service";
import { ActivatedRoute, Router } from "@angular/router";
import { FuncionarioService } from "./../funcionario.service";
import { Funcionario } from "./../funcionario.model";
import { Component, OnInit } from "@angular/core";
import { Empresa } from "../../empresa/empresa.model";

@Component({
  selector: "app-funcionario-vincular-empresa",
  templateUrl: "./funcionario-vincular-empresa.component.html",
  styleUrls: ["./funcionario-vincular-empresa.component.css"],
})
export class FuncionarioVincularEmpresaComponent implements OnInit {
  funcionario: Funcionario = {
    nome: null,
    cpf: null,
    empresa: null,
  };
  empresas: Empresa[];
  idEmpresa: number;
  constructor(
    private service: FuncionarioService,
    private empresaService: EmpresaService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    var id = this.route.snapshot.paramMap.get("id");
    this.service.readById(id).subscribe((funcionario) => {
      console.log(funcionario);
      this.funcionario = funcionario;
      if (funcionario.empresa != null)
        this.funcionario.idEmpresa = funcionario.empresa.id;
    });
    this.empresaService.read().subscribe((empresas) => {
      console.log(empresas);
      this.empresas = empresas;
    });
  }

  cancel(): void {
    this.router.navigate(["/funcionarios"]);
  }

  vincularFuncionarioEmpresa(): void {
    this.service.vincularEmpresa(this.funcionario).subscribe(() => {
      this.service.showMessage("Vinculado com sucesso!");
      this.cancel();
    }, error => {
      this.service.exibirMsgErro(error);
    });
  }
}
