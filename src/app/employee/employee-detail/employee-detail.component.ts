import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../employee.class';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {


  IsDetailPage:boolean=true;
  pageTitle: string= "Employee Detail"
  emp!: Employee;
  constructor(
    private emplsvc: EmployeeService,
    private route: ActivatedRoute,
    private router: Router
    ) { }

    showVerifyButton:boolean=false;
    warning():void {
      this.showVerifyButton = !this.showVerifyButton;
    }
    
    verifyDelete(): void{
      this.emplsvc.remove(this.emp.id).subscribe({
        next:(res)=>{
          console.debug("Employee Deleted!")
          this.router.navigateByUrl("/empl/list")
        },
        error:(err)=>{
          console.error(err)
        }
      })
    }
    ngOnInit(): void {
      let id = +this.route.snapshot.params["id"];
      this.emplsvc.get(id).subscribe({
        next: (res) => {
          console.debug("Employee:",res)
          this.emp = res
        },
        error: (err) => {
          console.log(err);
        }
      })
    }
    
}
