import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { HeaderService } from './header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {

  dataUltimoPost: Date = null;
  dataUltimoPostSubscription: Subscription;
  constructor(private headerService: HeaderService) { }

  ngOnDestroy(): void {
    this.dataUltimoPostSubscription.unsubscribe();
  }

  ngOnInit(): void {
    this.dataUltimoPostSubscription = this.headerService.dataUltimoPostObservable().subscribe(data => this.dataUltimoPost = data);
  }
  
}
