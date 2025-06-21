import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-structural-directive',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './structural-directive.component.html',
  styleUrl: './structural-directive.component.css'
})
export class StructuralDirectiveComponent {
 isdev11visible:boolean=true;

 isdiv2visible:boolean=true;

 num1:string="";
 num2:string="";

 Isactive:boolean=false;

 selectedstate:string="";

 cityArray:string[]=['Pune','Delhi','USA','Chennai','Varansi'];

 studentList:any[]=[
  {Id:12,name:"Ujala", city:"Pune", Active:false},
  {Id:34,name:"Anchal", city:"Delhi", Active:false},
  {Id:33,name:"Anju", city:"Goa", Active:false},
  {Id:54,name:"Rakhi", city:"Agra", Active:false},
  {Id:66,name:"Isha", city:"Renukut", Active:false},
  {Id:75,name:"Radhe", city:"Gurgaon", Active:true},
  {Id:18,name:"Krishna", city:"Pune", Active:false},


 ]
 showdiv11(){
  this.isdev11visible=true;
 }
  Hidediv11(){
  this.isdev11visible=false;
 }

 togglebutton(){
  this.isdiv2visible=!this.isdiv2visible;
 }
}
