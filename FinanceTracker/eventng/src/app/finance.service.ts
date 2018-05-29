import {
  Injectable
} from '@angular/core';
import {
  Finance
} from './models/finance';
import {
  HttpClient
} from '@angular/common/http';
import {
  Observable,
  throwError
} from 'rxjs';
import {
  catchError,
  tap
} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FinanceService {

  private url = 'http://localhost:8080/api/expenses';

  finances: Finance[] = [
    // new Finance(1, 'Groceries', 25.10, 'YES', 'NO', '5/25/2018'),
    // new Finance(2, 'Gas', 45.34, 'YES', 'NO', '5/26/2018')
  ];

  index() {
    return this.http.get < Finance[] > (this.url)
      .pipe(
        catchError((err: any) => {
          console.log(err);
          return throwError('Error in Service: index()');
        })
      );
  }

  create(finance) {
    return this.http.post < Finance > (this.url, finance)
      .pipe(
        catchError((err: any) => {
          console.log(err);
          return throwError('Error in Service: create()');
        })
      );
  }

  update(id: number, finance: Finance) {
    return this.http.put < Finance > (this.url + '/' + id, finance)
      .pipe(
        catchError((err: any) => {
          console.log(err);
          return throwError('KABOOM');
        })
      );
  }

  destroy(id) {
    return this.http.delete(this.url + '/' + id)
      .pipe(
        catchError((err: any) => {
          console.log(err);
          return throwError('KABOOM');
        })
      );
  }

  constructor(
    private http: HttpClient
  ) {}

}
