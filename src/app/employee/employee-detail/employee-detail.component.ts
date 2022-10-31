import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
    private route: ActivatedRoute
    ) { }
    
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
