import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../employee/employee.class';

@Injectable({
  providedIn: 'root'
})
export class SystemService {

  baseurl:string= "http://localhost:5112/api"
  employee: any = null;



  constructor(
    private router: Router
  ) { }

  chkLogin(): void {
    if (this.employee === null){
      this.router.navigateByUrl("/empl/login")
    }
  }
}
