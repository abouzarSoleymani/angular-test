import { Injectable } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BehaviorService {

  testName$: BehaviorSubject<any> = new BehaviorSubject<any>([]);

  constructor(private http : HttpClient) {
   }

  getData(){
    return this.http.get('https://jsonplaceholder.typicode.com/users')
      .pipe(
        map((response:any) => response.map((item: any) => this.testName$.next(item['name'])))
      )
  }

  getTestName() {
    return this.testName$.asObservable();
  }
}
