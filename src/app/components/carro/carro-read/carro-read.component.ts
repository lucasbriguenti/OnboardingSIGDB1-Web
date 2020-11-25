import { Component, OnInit } from "@angular/core";
import { Carro } from "../carro.model";
import { CarroService } from "../carro.service";

@Component({
  selector: "app-carro-read",
  templateUrl: "./carro-read.component.html",
  styleUrls: ["./carro-read.component.css"],
})
export class CarroReadComponent implements OnInit {
  carros: Carro[];
  displayedColumns = ["placa", "marca", "modelo", "kilometragem", "action"];
  constructor(private service: CarroService) {}

  ngOnInit(): void {
    this.service.read().subscribe(carros => this.carros = carros);
  }
}
