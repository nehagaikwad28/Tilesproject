import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material/material.module';
import { MatFormFieldModule } from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatButtonModule} from '@angular/material';
import {MatGridListModule } from '@angular/material';
import { MatCheckboxModule } from '@angular/material';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductionFormComponent } from './production-form/production-form.component';
import { CrumbsComponent } from './crumbs/crumbs.component';
import { SolutionBComponent } from './solution-b/solution-b.component';
import { MouldRComponent } from './mould-r/mould-r.component';
import { ColourComponent } from './colour/colour.component';
import { PayroleComponent } from './payrole/payrole.component';
import { SidenavbarComponent } from './sidenavbar/sidenavbar.component';
import { ColorNameComponent } from './color-name/color-name.component';
import { ColorCodeComponent } from './color-code/color-code.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    ProductionFormComponent,
    CrumbsComponent,
    SolutionBComponent,
    MouldRComponent,
    ColourComponent,
    PayroleComponent,
    SidenavbarComponent,
    ColorNameComponent,
    ColorCodeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
     MatFormFieldModule,
     BrowserAnimationsModule,
    MaterialModule,
    MatButtonModule,
    MatGridListModule,
    MatCheckboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
