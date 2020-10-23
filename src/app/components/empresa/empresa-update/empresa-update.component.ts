import { ActivatedRoute } from "@angular/router";
import { Router } from "@angular/router";
import { EmpresaService } from "./../empresa.service";
import { Empresa } from "./../empresa.model";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-empresa-update",
  templateUrl: "./empresa-update.component.html",
  styleUrls: ["./empresa-update.component.css"],
})
export class EmpresaUpdateComponent implements OnInit {
  empresa: Empresa;

  constructor(
    private service: EmpresaService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    var id = this.route.snapshot.paramMap.get("id");
    this.service.readById(id).subscribe((empresa) => {
      this.empresa = empresa;
      console.log(empresa);
    });
  }

  updateEmpresa(): void {
    this.service.update(this.empresa).subscribe(() => {
      this.service.showMessage("Empresa autalizada com sucesso!");
      this.cancel();
    });
  }

  cancel(): void {
    this.router.navigate(["/empresas"]);
  }
}
