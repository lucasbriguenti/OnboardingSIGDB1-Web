import { Router } from '@angular/router';
import { CargoService } from './../cargo.service';
import { Cargo } from './../cargo.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cargo-create',
  templateUrl: './cargo-create.component.html',
  styleUrls: ['./cargo-create.component.css']
})
export class CargoCreateComponent implements OnInit {
  cargo: Cargo = {
    id: null,
    descricao: null
  }
  constructor(private service: CargoService, private router: Router) { }

  ngOnInit(): void {
  }

  cancel(): void {
    this.router.navigate(['/cargos'])
  }

  createCargo(): void {
    this.service.create(this.cargo).subscribe(() => {
      this.service.showMessage('Cargo criado com sucesso!');
      this.cancel();
    })
  }
}
