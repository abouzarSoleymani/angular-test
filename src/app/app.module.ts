import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http'
import { BehaviorSubjectTestComponent } from './behavior-subject-test/behavior-subject-test.component';
import { InputOutputTestComponent } from './input-output-test/input-output-test.component';

@NgModule({
  declarations: [
    AppComponent,
    BehaviorSubjectTestComponent,
    InputOutputTestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
