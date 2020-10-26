import { ActivatedRoute } from "@angular/router";
import { Router } from "@angular/router";
import { CargoService } from "./../cargo.service";
import { Cargo } from "./../cargo.model";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-cargo-update",
  templateUrl: "./cargo-update.component.html",
  styleUrls: ["./cargo-update.component.css"],
})
export class CargoUpdateComponent implements OnInit {
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

  cancel(): void {
    this.router.navigate(["/cargos"]);
  }

  updateCargo(): void {
    this.service.update(this.cargo).subscribe(() => {
      this.service.showMessage("Cargo alterado com sucesso!");
      this.cancel();
    });
  }
}
