import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { APIResponse } from '../models/api.model';
import { Card } from '../models/card.model';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private readonly http: HttpClient) {}

  getAPIResponse(): Observable<Card[]> {
    const route = `https://jsonplaceholder.typicode.com/users`;
    return this.http.get<any>(route).pipe(
      map((arr: APIResponse[]) =>
        arr.map((val: APIResponse) => ({
          capitalLetters: `${val.name.split(' ')[0].slice(0, 1)} ${val.name
            .split(' ')[1]
            .slice(0, 1)}`,
          name: val.name,
          userName: val.username,
          email: val.email,
          phoneNumber: val.phone,
        }))
      )
    );
  }
}
