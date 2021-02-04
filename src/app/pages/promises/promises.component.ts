import { Component, OnInit } from '@angular/core';
/* import { rejects } from 'assert';
import { resolve } from 'dns'; */

@Component({
  selector: 'app-promises',
  templateUrl: './promises.component.html',
  styles: [
  ]
})
export class PromisesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    this.getUsuarios().then( usuarios => {
      console.log(usuarios);
    })

    /* const promise = new Promise( ( resolve, reject ) => {

      if(false) {
        resolve('Hola Mundo!');
      } else {
        reject('Algo salió mal!');
      }
    });

    promise
    .then( ( message ) => {
      console.log(message);
    })
    .catch( error => console.log('Error en la promesa', error) );

    console.log('Fin del init'); */
  }

  getUsuarios() {
    //return new Promise()
    const promise = new Promise( resolve => {

      fetch('https://reqres.in/api/users')
      .then( resp => resp.json() )
      .then( body => resolve(body.data) );

    });

    return promise;
  }
}
