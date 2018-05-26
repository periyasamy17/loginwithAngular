import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor() { 
    console.log('shared')
  }
  
  public IsUserLoggedIn: Subject<any> = new Subject<any>();
}
