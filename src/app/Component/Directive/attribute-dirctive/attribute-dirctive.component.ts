import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-attribute-dirctive',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './attribute-dirctive.component.html',
  styleUrl: './attribute-dirctive.component.css'
})
export class AttributeDirctiveComponent {

  div1Color:string='bg-primary';
  IsActivetoggle:boolean=false;
  num1:string='';
  num2:string='';
  IsActive:boolean=true;

  CustomerStyle:any={
    'color':'black',
    'background-color':'Yellow',
    'width':'250px',
    'height':'250px',
    'border-radius':'20%',
    'font-size':'20px',
    'font-weight':'700'
  }

   studentList:any[]=[
  {Id:12,gender:"Male",Marks:"24",name:"Ujala", city:"Pune", Active:false},
  {Id:34,gender:"FeMale",Marks:"32",name:"Anchal", city:"Delhi", Active:true},
  {Id:33,gender:"Male",Marks:"45",name:"Anju", city:"Goa", Active:false},
  {Id:54,gender:"Male",Marks:"77",name:"Rakhi", city:"Agra", Active:false},
  {Id:66,gender:"FeMale",Marks:"90",name:"Isha", city:"Renukut", Active:false},
  {Id:75,gender:"Male",Marks:"54",name:"Radhe", city:"Gurgaon", Active:true},
  {Id:18,gender:"Male",Marks:"23",name:"Krishna", city:"Pune", Active:false},


 ]
  AddRed(){
    this.div1Color='bg-danger';

  }
  AddBlue(){
        this.div1Color='bg-primary';
  }
  Togglechange(){
    this.IsActivetoggle=!this.IsActivetoggle;
  }
}
