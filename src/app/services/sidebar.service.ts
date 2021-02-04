import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  menu: any[] = [
    {
      title: 'Dashboard',
      icon: 'mdi mdi-gauge',
      submenu: [
        { title: 'Main', url: '/' },
        { title: 'Graphics', url: 'charts' },
        { title: 'Promises', url: 'promises'},
        { title: 'ProgressBar', url: 'progress' },
        { title: 'Rxjs', url: 'rxjs' }
      ]
    }
  ]

  constructor() { }
}
