import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css'
})
export class DataBindingComponent {
 CourseName:string="Angular 18";
 stateName:string="Maharastra";
 inputType="checkbox";
 myclassname:string="bg-primary";
 rollno:number=23677;
 isindian:boolean=true;
 currentDate:Date=new Date();

 firstName=signal("Chetan Bhagat");

 constructor(){

 }
 showAlert(message:string){
alert(message);
 }

 ChangeCourse(){
  this.CourseName="React Js";
  this.firstName.set("Arjuna");
 }
}
