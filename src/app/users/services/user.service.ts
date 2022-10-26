import { map, Observable } from 'rxjs';
import { ApiClient } from 'src/app/common/services';
import { Injectable } from '@angular/core';
import { User } from '../models';

@Injectable({ providedIn: 'root' })
export class UsersService {
  constructor(private _apiClient: ApiClient) {}

  getUser(userId: number): Observable<User> {
    return this._apiClient
      .get(`users/${userId}`)
      .pipe(map((user) => user as User));
  }

  getAllUsers(): Observable<User[]> {
    return this._apiClient
      .get('users')
      .pipe(map((users) => users.map((u) => u as User)));
  }
}
