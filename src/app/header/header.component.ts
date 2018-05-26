import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public displayUserName;
  constructor(public sharedService: SharedService) {
    
   }

  ngOnInit() {
    this.sharedService.IsUserLoggedIn.subscribe(data => {
      this.displayUserName = data;
    });
  }

}
