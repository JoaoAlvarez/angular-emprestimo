import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoanFormComponent } from './loan-form/loan-form.component';
import { LoanSuccessComponent } from './loan-success/loan-success.component';

const routes: Routes = [
  {
    path: '',
    component: LoanFormComponent
  },
  {
    path: 'success',
    component: LoanSuccessComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoanRoutingModule { }
