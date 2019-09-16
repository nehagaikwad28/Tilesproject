import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatCardModule,MatFormFieldModule, MatInputModule,MatGridListModule,
  MatSidenavModule,MatTableModule,MatListModule,MatToolbarModule,MatIconModule,
  MatPaginatorModule
} from '@angular/material';
/* import {MatTableDataSource} from '@angular/material'; */



@NgModule({
  declarations: [],
  imports: [
    CommonModule,MatButtonModule,MatCardModule,MatFormFieldModule,MatInputModule,MatGridListModule,MatSidenavModule,MatTableModule,MatListModule,MatIconModule,MatToolbarModule
    ,MatPaginatorModule
  ],
  exports:[
    CommonModule,MatButtonModule,MatCardModule,MatFormFieldModule,MatInputModule,MatGridListModule,MatSidenavModule,MatTableModule, MatListModule,MatIconModule,MatToolbarModule
  ,MatPaginatorModule
  ]
})
export class MaterialModule { }
