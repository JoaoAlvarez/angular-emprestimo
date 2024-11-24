import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoanSimulation } from '../models/loan-simulation';

@Component({
  selector: 'app-loan-success',
  templateUrl: './loan-success.component.html',
  styleUrls: ['./loan-success.component.css']
})
export class LoanSuccessComponent implements OnInit {
  simulacao: LoanSimulation | null = null;

  constructor(private router: Router) {
    const navigation = this.router.getCurrentNavigation();
    if (navigation && navigation.extras && navigation.extras.state) {
      this.simulacao = navigation.extras.state.simulacao;
    }
  }

  ngOnInit(): void {
    if (!this.simulacao) {
      this.router.navigate(['/']);
    }
  }

  voltarParaInicio(): void {
    this.router.navigate(['/']);
  }
}
