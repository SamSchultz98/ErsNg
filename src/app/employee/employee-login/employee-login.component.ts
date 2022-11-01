import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-login',
  templateUrl: './employee-login.component.html',
  styleUrls: ['./employee-login.component.css']
})
export class EmployeeLoginComponent implements OnInit {

  constructor(
    private empsrvc: EmployeeService,
    private router: Router
  ) { }

  email: string ="";
  password: string="";
  message: string= "";
  
  login(): void{
    this.empsrvc.login(this.email, this.password).subscribe({
      next:(res) => {
        console.debug(res)
        this.router.navigateByUrl("/empl/list");
      },
      error:(err) =>{
        if(err.status === 404){
          this.message = "Email & Password were not found!"
        }
        console.error(err);
      }
    })
  }
  ngOnInit(): void {
  }

}
