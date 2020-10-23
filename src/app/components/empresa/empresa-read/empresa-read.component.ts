import { EmpresaService } from "./../empresa.service";
import { Component, OnInit } from "@angular/core";
import { Empresa } from "../empresa.model";

@Component({
  selector: "app-empresa-read",
  templateUrl: "./empresa-read.component.html",
  styleUrls: ["./empresa-read.component.css"],
})
export class EmpresaReadComponent implements OnInit {
  empresas: Empresa[];
  displayedColumns = ["id", "nome", "cnpj", "dataFundacao", "action"];
  constructor(private service: EmpresaService) {}

  ngOnInit(): void {
    this.service.read().subscribe((empresas) => (this.empresas = empresas));
  }
}
