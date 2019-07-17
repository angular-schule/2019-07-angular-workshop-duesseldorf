import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { BreakpointObserver, BreakpointState, Breakpoints } from '@angular/cdk/layout';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-breakpoint-observer',
  templateUrl: './breakpoint-observer.component.html',
  styleUrls: ['./breakpoint-observer.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class BreakpointObserverComponent implements OnInit {

  constructor(public breakpointObserver: BreakpointObserver) {}

  ngOnInit() {
    this.breakpointObserver
      .observe([Breakpoints.Handset])
      .subscribe((state: BreakpointState) => {
        if (state.matches) {
          console.log('Viewport reached Handset size!');
        } else {
          console.log('Viewport is bigger that Handset size!');
        }
      });
  }

}
