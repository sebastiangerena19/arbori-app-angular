import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { HelliwellMethodComponent } from './helliwell-method/helliwell-method.component';
import { CtlaMethodComponent } from './ctla-method/ctla-method.component';
import { ErrorComponent } from './error/error.component';
import { ValueComponent } from './value/value.component';
import { MethodSelectionComponent } from './method-selection/method-selection.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    HelliwellMethodComponent,
    CtlaMethodComponent,
    ErrorComponent,
    ValueComponent,
    MethodSelectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
