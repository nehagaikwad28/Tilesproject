import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as $ from 'jquery';
import { from } from 'rxjs';
@Component({
  selector: 'app-sidenavbar',
  templateUrl: './sidenavbar.component.html',
  styleUrls: ['./sidenavbar.component.css']
})
export class SidenavbarComponent implements OnInit {
 opened=false;
 Num:any;
 name:any="neha_gkwd";
 number:number;
 show : boolean=false;

 
 constructor(private router:Router) {  }
 count=0;
  OpenOnClick(){
       if(this.count==0){
       this.show = true;
       this.count++;
       }
       else{
         this.count--;
         this.show = false;
       }
  }
 ngOnInit() 
 {}
 set(event:number)
 {
   this.number=event;
   switch(this.number)
   {
     case 0:
        this.router.navigate(['C:\Users\Lenovo\tiles-website\src\app\production-form']);
        break;
     case 1:
        this.router.navigate(['/sidenavbar/crumbs']);
        break;
     case 2:
       this.router.navigate(['/sidenavbar/solution-b']);
       break;
     case 3:
       this.router.navigate(['/sidenavbar/mould-r']);
       break;
     case 4:
       this.router.navigate(['/sidenavbar/colour/colour-code']);
       break;
       case 5:
       this.router.navigate(['/sidenavbar/colour/colour-code/colour-name']);
       break;
       case 6:
       this.router.navigate(['/sidenavbar/payrole']);
       break;
    default:alert("error");   
   }

 }

}
