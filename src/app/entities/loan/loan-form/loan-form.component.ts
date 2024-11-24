import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { LoanConfirmationComponent } from '../loan-confirmation/loan-confirmation.component';
import { LoanService } from '../loan.service';

@Component({
  selector: 'app-loan-form',
  templateUrl: './loan-form.component.html',
  styleUrls: ['./loan-form.component.css']
})
export class LoanFormComponent {
  loanForm: FormGroup;
  simulacao: any = null;
  isLoading = false;

  constructor(
    private fb: FormBuilder,
    private loanService: LoanService,
    private dialog: MatDialog,
    private router: Router
  ) {
    this.loanForm = this.fb.group({
      nome: ['', [Validators.required, Validators.minLength(3)]],
      valor: ['', [Validators.required, Validators.min(100)]],
      parcelas: ['', [Validators.required, Validators.min(1), Validators.max(48)]]
    });
  }

  simularEmprestimo(): void {
    if (this.loanForm.valid) {
      this.isLoading = true;
      this.loanService.simularEmprestimo(this.loanForm.value)
        .subscribe(
          (resultado) => {
            this.simulacao = resultado;
            this.isLoading = false;
          },
          (error) => {
            console.error('Erro ao simular empréstimo:', error);
            this.isLoading = false;
          }
        );
    }
  }

  confirmarEmprestimo() {
    const dialogRef = this.dialog.open(LoanConfirmationComponent, {
      width: '400px',
      data: this.simulacao
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.router.navigate(['/loan/success'], { state: { simulacao: this.simulacao } });
      }
    });
  }
}
