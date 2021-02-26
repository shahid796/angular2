import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { SampleComponent } from './sample/sample.component';
import { CaluclatorComponent } from './caluclator/caluclator.component';
import { DemoComponent } from './demo/demo.component';
import { TodayComponent } from './today/today.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { ProductComponent } from './product/product.component';
import { HomewrkComponent } from './homewrk/homewrk.component';
import { EditorComponent } from './editor/editor.component';
import { Calculator2Component } from './calculator2/calculator2.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    SampleComponent,
    CaluclatorComponent,
    DemoComponent,
    TodayComponent,
    LoginComponent,
    ProductComponent,
    HomewrkComponent,
    EditorComponent,
    Calculator2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
