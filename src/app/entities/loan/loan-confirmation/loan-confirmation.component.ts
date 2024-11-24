import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { LoanSimulation } from '../models/loan-simulation';

@Component({
  selector: 'app-loan-confirmation',
  templateUrl: './loan-confirmation.component.html',
  styleUrls: ['./loan-confirmation.component.css']
})
export class LoanConfirmationComponent {
  constructor(
    public dialogRef: MatDialogRef<LoanConfirmationComponent>,
    @Inject(MAT_DIALOG_DATA) public data: LoanSimulation,
    private router: Router
  ) {}

  onConfirm(): void {
    this.dialogRef.close(true);
  }

  onCancel(): void {
    this.dialogRef.close(false);
  }
}
