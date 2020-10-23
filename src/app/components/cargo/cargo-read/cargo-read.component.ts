import { Cargo } from "./../cargo.model";
import { CargoService } from "./../cargo.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-cargo-read",
  templateUrl: "./cargo-read.component.html",
  styleUrls: ["./cargo-read.component.css"],
})
export class CargoReadComponent implements OnInit {
  cargos: Cargo[];
  displayedColumns = ["id", "descricao", "action"];
  constructor(private service: CargoService) {}

  ngOnInit(): void {
    this.service.read().subscribe((cargos) => (this.cargos = cargos));
  }
}
