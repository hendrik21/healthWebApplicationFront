import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {SurveyModule} from "survey-angular-ui";
import { TableComponent } from './table/table.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import {MatTableModule} from '@angular/material/table';
import {MatGridListModule} from "@angular/material/grid-list";

const routes: Routes = [
  { path: 'results', component: TableComponent },
  // ... other routes
];

@NgModule({
  declarations: [
    AppComponent,
    TableComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    SurveyModule,
    HttpClientModule,
    MatGridListModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
