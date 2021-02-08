import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute, ActivationEnd, Router } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styles: [
  ]
})
export class BreadcrumbsComponent implements OnDestroy {

  public title: string | undefined;
  public titleSubs$: Subscription = new Subscription;

  constructor( private router: Router, private route: ActivatedRoute) {


     this.titleSubs$ =  this.getRoutingData().subscribe( ({ title }) => {
      this.title = title;
      document.title = `AdminPro - ${ title }`;
    });

   }

  ngOnDestroy(): void {
    this.titleSubs$.unsubscribe();
  }

   getRoutingData() {
    return this.router.events
    .pipe(
      //TypeScript error
      filter( event => event instanceof ActivationEnd),
      filter( (event: ActivationEnd) => event.snapshot.firstChild === null),
      map( (event: ActivationEnd) => event.snapshot.data)
    );

   }


}
