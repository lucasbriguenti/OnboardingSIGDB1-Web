import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Carro } from '../carro.model';
import { CarroService } from '../carro.service';

@Component({
  selector: 'app-carro-update',
  templateUrl: './carro-update.component.html',
  styleUrls: ['./carro-update.component.css']
})
export class CarroUpdateComponent implements OnInit {
  carro: Carro = {
    modelo: null,
    marca: null,
    kilometragem: 0,
    placa: null,
    id: null
  };

  constructor(
    private service: CarroService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    var id = this.route.snapshot.paramMap.get("id");
    this.service.readById(id).subscribe((carro) => {
      this.carro = carro;
    });
  }

  updateCarro(): void {
    this.service.update(this.carro).subscribe(() => {
      this.service.showMessage("Carro atualizado com sucesso!");
      this.cancel();
    });
  }

  cancel(): void {
    this.router.navigate(["/carros"]);
  }

}
