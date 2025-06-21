import { Routes } from '@angular/router';
import { AddEmployeeComponent } from './Component/add-employee/add-employee.component';
import { DataBindingComponent } from './Component/data-binding/data-binding.component';
import { AttributeDirctiveComponent } from './Component/Directive/attribute-dirctive/attribute-dirctive.component';
import { StructuralDirectiveComponent } from './Component/Directive/structural-directive/structural-directive.component';
import { EmployeeListComponent } from './Component/employee-list/employee-list.component';

export const routes: Routes = [
    {
        path:'add-emp',
        component:AddEmployeeComponent
        
    },
     {
        path:'data-binding',
        component:DataBindingComponent
        
    },
      {
        path:'attribute-Dir',
        component:AttributeDirctiveComponent
        
    },
       {
        path:'structural-Dir',
        component:StructuralDirectiveComponent
        
    },   {
        path:'Emp_List',
        component:EmployeeListComponent
        
    }
];
