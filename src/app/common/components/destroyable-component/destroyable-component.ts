import { Component, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  template: '',
})
export class DestroyableComponent implements OnDestroy {
  protected destroy$ = new Subject<any>();

  ngOnDestroy(): void {
    this.destroy$.next(null);
    this.destroy$.complete();
    this.destroy$.unsubscribe();
  }
}
