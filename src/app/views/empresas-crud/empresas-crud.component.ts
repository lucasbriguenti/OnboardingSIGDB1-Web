import { Router } from "@angular/router";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-empresas-crud",
  templateUrl: "./empresas-crud.component.html",
  styleUrls: ["./empresas-crud.component.css"],
})
export class EmpresasCrudComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}
  navigateToEmpresaCreate(): void {
    this.router.navigate(["/empresas/create"]);
  }
}
