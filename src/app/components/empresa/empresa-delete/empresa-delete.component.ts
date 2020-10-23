import { ActivatedRoute } from "@angular/router";
import { Router } from "@angular/router";
import { EmpresaService } from "./../empresa.service";
import { Empresa } from "./../empresa.model";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-empresa-delete",
  templateUrl: "./empresa-delete.component.html",
  styleUrls: ["./empresa-delete.component.css"],
})
export class EmpresaDeleteComponent implements OnInit {
  empresa: Empresa;
  constructor(
    private service: EmpresaService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    var id = this.route.snapshot.paramMap.get("id");
    this.service.readById(id).subscribe((empresa) => (this.empresa = empresa));
  }

  deleteEmpresa(): void {
    this.service.delete(this.empresa.id.toString()).subscribe(() => {
      this.service.showMessage("Empresa excluida!");
      this.cancel();
    });
  }

  cancel(): void {
    this.router.navigate(["/empresas"]);
  }
}
