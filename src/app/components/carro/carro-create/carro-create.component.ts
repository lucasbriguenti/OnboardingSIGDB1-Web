import { Component, OnInit } from "@angular/core";
import { Carro } from "../carro.model";
import { MASKS } from "ng-brazil";
import { CarroService } from '../carro.service';
import { Router } from '@angular/router';

@Component({
  selector: "app-carro-create",
  templateUrl: "./carro-create.component.html",
  styleUrls: ["./carro-create.component.css"],
})
export class CarroCreateComponent implements OnInit {
  public MASKS = MASKS;
  carro: Carro = {
    placa: null,
    kilometragem: 0,
    marca: null,
    modelo: null,
    id: 0,
  };
  constructor(private service: CarroService, private router: Router) {}

  ngOnInit(): void {}

  createCarro(): void{
    this.service.create(this.carro).subscribe(() => {
      this.service.showMessage('Carro cadastrado!');
      this.cancel();
    })
  }

  cancel(): void {
    this.router.navigate(["/carros"]);
  }
}
