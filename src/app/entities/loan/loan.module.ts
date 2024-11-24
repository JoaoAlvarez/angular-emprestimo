import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

import { LoanConfirmationComponent } from './loan-confirmation/loan-confirmation.component';
import { LoanFormComponent } from './loan-form/loan-form.component';
import { LoanRoutingModule } from './loan-routing.module';
import { LoanSuccessComponent } from './loan-success/loan-success.component';
import { LoanService } from './loan.service';

@NgModule({
  declarations: [
    LoanFormComponent,
    LoanConfirmationComponent,
    LoanSuccessComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    LoanRoutingModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    MatDialogModule,
    MatCardModule,
    MatIconModule
  ],
  providers: [LoanService],
  entryComponents: [LoanConfirmationComponent]
})
export class LoanModule { }
