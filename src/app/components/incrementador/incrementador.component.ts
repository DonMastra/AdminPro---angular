import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: [
  ]
})
export class IncrementadorComponent implements OnInit {


  @Input('valor') progreso: number = 40;
  @Input() btnClass: string = 'btn-primary';

  @Output('valor') valorSalida: EventEmitter<number> = new EventEmitter();

  ngOnInit() {
    this.btnClass = `btn ${ this.btnClass }`;
  }

  cambiarValor( valor: number ) {

    if( this.progreso >= 100 && valor >= 0 ) {
      this.valorSalida.emit(100);
      return this.progreso = 100;
    }

    if( this.progreso < 0 && valor < 0 ) {
      this.valorSalida.emit(0);
      return this.progreso = 0;
    }

    this.valorSalida.emit( this.progreso );
    return this.progreso = this.progreso + valor;
  }

  onChange( nuevoValor: number ) {

    if( nuevoValor >= 100 ) {
      this.progreso = 100;
    } else if(nuevoValor < 0) {
      this.progreso = 100;
    } else {
      this.progreso = nuevoValor;
    }

    this.valorSalida.emit( this.progreso );
  }


}
