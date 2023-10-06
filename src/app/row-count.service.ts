import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RowCountService {
  private rowCountSubject = new BehaviorSubject<number>(0);

  setRowCount(count: number) {
    this.rowCountSubject.next(count);
  }

  getRowCount() {
    return this.rowCountSubject.asObservable();
  }
}
