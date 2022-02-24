import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http'
import { BehaviorSubjectTestComponent } from './behavior-subject-test/behavior-subject-test.component';
import { InputOutputTestComponent } from './input-output-test/input-output-test.component';
import { FormCvaTestComponent } from './form-cva-test/form-cva-test.component';
import { InputTestComponent } from './form-cva-test/input-test/input-test.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    BehaviorSubjectTestComponent,
    InputOutputTestComponent,
    FormCvaTestComponent,
    InputTestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
