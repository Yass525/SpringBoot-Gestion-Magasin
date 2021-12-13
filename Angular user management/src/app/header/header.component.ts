import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: []
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router, private cookieService: CookieService) { }

  ngOnInit() {

    
  }
 onLogout() {
   //localStorage.removeItem('token');
   this.cookieService.delete("token", '/');
    this.router.navigate(['/entry/user/login']);
  }
}
