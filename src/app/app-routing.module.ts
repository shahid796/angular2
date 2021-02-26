import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CaluclatorComponent} from './caluclator/caluclator.component';
import {TodayComponent}  from './today/today.component';
import {AppComponent} from './app.component';

const routes: Routes = [{
  path:"calaculator",
  component:CaluclatorComponent
},{
  path:"todolist",
  component:TodayComponent
},{
  path:"app",
  component:AppComponent

}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
