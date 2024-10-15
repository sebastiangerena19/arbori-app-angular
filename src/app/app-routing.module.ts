import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { HelliwellMethodComponent } from './helliwell-method/helliwell-method.component';
import { MethodSelectionComponent } from './method-selection/method-selection.component';
import { CtlaMethodComponent } from './ctla-method/ctla-method.component';
import { ValueComponent } from './value/value.component';

const routes: Routes = [
  { path: '', component: MainPageComponent },
  { path: 'method-selection', component: MethodSelectionComponent },
  { path: 'helliwell', component: HelliwellMethodComponent },
  { path: 'ctla', component: CtlaMethodComponent },
  { path: 'value', component: ValueComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
