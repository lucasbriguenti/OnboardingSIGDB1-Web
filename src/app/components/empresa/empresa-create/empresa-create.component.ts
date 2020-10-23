import { Router } from "@angular/router";
import { EmpresaService } from "./../empresa.service";
import { Empresa } from "./../empresa.model";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-empresa-create",
  templateUrl: "./empresa-create.component.html",
  styleUrls: ["./empresa-create.component.css"],
})
export class EmpresaCreateComponent implements OnInit {
  empresa: Empresa = {
    cnpj: null,
    nome: null,
    id: null,
    dataFundacao: null,
  };

  constructor(private service: EmpresaService, private router: Router) {}

  ngOnInit(): void {}
  createEmpresa(): void {
    this.service.create(this.empresa).subscribe(() => {
      this.service.showMessage("Empresa cadastrada!");
      this.cancel();
    });
  }

  cancel(): void {
    this.router.navigate(["/empresas"]);
  }
}
