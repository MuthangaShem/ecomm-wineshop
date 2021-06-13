import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BreakPointService {

  constructor(
    private breakpointObserver: BreakpointObserver
  ) { }

  breakpoint(pixels: number): Observable<BreakpointState> {
    return this.breakpointObserver.observe(`(min-width: ${pixels}px)`)
  }

}
