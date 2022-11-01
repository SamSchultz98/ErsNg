import { Pipe, PipeTransform } from '@angular/core';
import { Employee } from './employee.class';

@Pipe({
  name: 'employeeSearch'
})
export class EmployeeSearchPipe implements PipeTransform {

  transform(empls: Employee[], search: string= ""): Employee[] {

    search = search.toLowerCase();
    let selected: Employee[] = [];    //This makes it an actual array, have to include the = [];
    for(let e of empls){
      if(e.name.toLowerCase().includes(search) || e.email !== null && e.email.toLowerCase().includes(search)){
        selected.push(e);
      }
    }
    return selected;
  }

}
