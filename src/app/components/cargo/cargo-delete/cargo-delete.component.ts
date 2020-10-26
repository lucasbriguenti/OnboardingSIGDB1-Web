import { ActivatedRoute } from "@angular/router";
import { Router } from "@angular/router";
import { CargoService } from "./../cargo.service";
import { Cargo } from "./../cargo.model";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-cargo-delete",
  templateUrl: "./cargo-delete.component.html",
  styleUrls: ["./cargo-delete.component.css"],
})
export class CargoDeleteComponent implements OnInit {
  cargo: Cargo;
  constructor(
    private service: CargoService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    var id = this.route.snapshot.paramMap.get("id");
    this.service.readById(id).subscribe((cargo) => (this.cargo = cargo));
  }

  createCargo(): void {
    this.service.delete(this.cargo.id.toString()).subscribe(() => {
      this.service.showMessage("Cargo deletado com sucesso!");
      this.cancel();
    });
  }

  cancel(): void {
    this.router.navigate(["/cargos"]);
  }
}
