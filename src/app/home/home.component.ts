import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs/operators';

import { QuoteService } from './quote.service';

import { getDatabase, ref, set, ListenOptions } from 'firebase/database'

import { initializeApp } from 'firebase/app';

import { ResultadosService } from '@app/services/resultados.service';
import { environment } from '@env/environment';
import { Resultado } from '@app/models/resultados.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  valor3 = false
  valor5 = false
  valor7 = false
  color: string = 'bc'
  quote: string | undefined;
  isLoading = false;
  private dbPath = '/resultados'
  cal: Resultado = {
    key: '',
    num: 0,
    mult3: [],
    mult5: [],
    mult7: []
  }

  num = 0;
  mult3: number[] = [];
  mult5: number[] = [];
  mult7: number[] = [];

  constructor(private quoteService: QuoteService) { }

  ngOnInit() {
    this.isLoading = true;
    this.quoteService.getRandomQuote({ category: 'dev' })
      .pipe(finalize(() => { this.isLoading = false; }))
      .subscribe((quote: string) => { this.quote = quote; });
  }


  multiplos(valor: number, multiplo: number) {
    let resto = valor % multiplo
    console.log(resto)
    if(resto==0) {
      return true
    } else {
      return false
    }
  }

  getMutiplos(num: number) {
    this.mult3 = []
    this.mult5 = []
    this.mult7 = []
    this.num = num
    this.valor3 = false
    this.valor5 = false
    this.valor7 = false
    for(let i=1; i<=num; i++) {
      if(this.multiplos(i, 3)) {
        this.mult3.push(i)
      }
      if(this.multiplos(i, 5)) {
        this.mult5.push(i)
      }
      if(this.multiplos(i, 7)) {
        this.mult7.push(i)
      }
    }
    let multiplo3 = num % 3
    let multiplo5 = num % 5
    let multiplo7 = num % 7

    if(multiplo5 === 0) {
      this.valor5 = true
      this.color = 'red'
    }
    if(multiplo7 === 0) {
      this.valor7 = true
      this.color = 'blue'
    }
    if(multiplo3 === 0) {
      this.valor3 = true
      this.color = 'green'
    }

    /*
    if (this.mult3.length === 0 ) {
      this.color = 'black'
    } else if (this.mult3.length > 0 ) {
      this.color = 'green'
    } else if (this.mult5.length > 0 ) {
      this.color = 'red'
    } else if (this.mult7.length > 0 ) {
      this.color = 'blue'
    }*/

    this.cal.num = num
    
    console.log("Multiplos de 3: ", this.mult3)
    console.log("Multiplos de 5: ", this.mult5)
    console.log("Multiplos de 7: ", this.mult7)
  }

  setResultado() {
    const app = initializeApp(environment.firebase);
    const db = getDatabase(app);
    set(ref(db, 'resultados'), {
      
      number: this.num,
      multiplos3: this.mult3,
      multiplos5: this.mult5,
      multiplos7: this.mult7
    })
    console.log("Datos: ", this.mult3, this.mult7)
  }

}
