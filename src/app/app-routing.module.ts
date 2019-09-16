import { NgModule, Component } from '@angular/core';
import{Router,RouterModule}from '@angular/router';
import { LoginComponent} from './login/login.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {ProductionFormComponent}from './production-form/production-form.component';
import {CrumbsComponent}from './crumbs/crumbs.component';
import {MouldRComponent}from './mould-r/mould-r.component';
import {PayroleComponent}from './payrole/payrole.component';
import {SolutionBComponent}from './solution-b/solution-b.component';
import {ColourComponent}from './colour/colour.component';
import {SidenavbarComponent}from './sidenavbar/sidenavbar.component' ;
import {ColorNameComponent}from './color-name/color-name.component';
import {ColorCodeComponent}from './color-code/color-code.component';





@NgModule({
  imports: [RouterModule.forRoot( 
     [{path:'',component:LoginComponent},
 
  {path:'sidenavbar',component:SidenavbarComponent,
children:[
  {path:'' ,component:DashboardComponent},
  {path:'production-form',component:ProductionFormComponent},
  {path:'crumbs',component:CrumbsComponent},
  {path:'mould-r',component:MouldRComponent},
  {path:'payrole',component:PayroleComponent},
  {path:'solution-b',component:SolutionBComponent},
  {path:'color',component:ColourComponent,

  children:[
    {path:'color-code',component:ColorCodeComponent},
    {path:'color-name',component:ColorNameComponent}
            ]
  },
        ]
  }
     ])],
  exports: [RouterModule]
})
export class AppRoutingModule { }
