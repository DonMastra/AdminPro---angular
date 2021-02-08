import { Component, OnDestroy } from '@angular/core';
import { Observable, interval, Subscription } from 'rxjs';
import { retry, take, map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: [
  ]
})
export class RxjsComponent implements OnDestroy {

  public intervalSubs: Subscription = new Subscription;


  constructor() {

    //======= observable subscription ========= //

    /* this.returnObservable().pipe(
      retry(1)
    )
    .subscribe(
      valor => console.log('Subs: ', valor),
      (error) => console.warn('Error: ', error),
      () => console.info('Obs finished')
    ); */

    this.intervalSubs = this.returnInterval().subscribe(console.log);
      //(valor) => console.log( valor )
    //)

   }

  ngOnDestroy(): void {
    this.intervalSubs.unsubscribe();
  }

   /*
   * La función interval() permite hacer clean code del código del observable,
   * omitiendo el observer y utilizando interval y pipe
   */
   returnInterval(): Observable<number> {

     return interval(100)
     .pipe(
       //take(10)
       map( valor => valor+1 ),
       filter( valor => ( valor % 2 === 0) ? true : false ),
       /* map( valor => {
         return 'Hola Mundo! ' + (valor+1);
       }) */
     );

   }

   returnObservable(): Observable<number> {

    let i = -1;

    return new Observable<number>( observer => {


      const interval = setInterval( () => {

        i++;
        observer.next(i);

        if(i === 4 ) {
          clearInterval(interval);
          observer.complete();
        }

        if(i === 2) {
          observer.error('i have reached value 2');
        }

      }, 1000)
    });

    //return obs$;
   }



}
