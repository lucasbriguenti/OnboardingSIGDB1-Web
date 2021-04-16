import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {
  private dataUltimoPost: Subject<Date> = new Subject<Date>();
  constructor() { }

  avisarDataUltimoPost(data: Date){
    this.dataUltimoPost.next(data);
  }

  dataUltimoPostObservable(): Observable<Date> {
    return this.dataUltimoPost.asObservable();
  }
}
