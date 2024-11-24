import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { LoanRequest } from './models/loan-request.model';
import { LoanSimulation } from './models/loan-simulation';

@Injectable({
  providedIn: 'root'
})
export class LoanService {
  simularEmprestimo(request: LoanRequest): Observable<LoanSimulation> {
    const juros = request.valor * 0.05; // 5% de juros
    const valorTotal = request.valor + juros;
    const valorParcela = valorTotal / request.parcelas;

    const simulacao: LoanSimulation = {
      valorParcelas: valorParcela,
      numeroParcelas: request.parcelas,
      valorTotal: valorTotal
    };

    return of(simulacao).pipe(delay(1000));
  }
}
