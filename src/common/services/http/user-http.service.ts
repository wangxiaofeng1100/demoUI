/**
 * Created Date: Wednesday, October 25th 2017, 10:32:02 pm
 * Author: KSC
 * Copyright (c) 2017 Kingland System Corporation. All Rights Reserved
 */
import {Url} from '../../constants/url.constant';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/internal/Observable';

@Injectable()
export class UserHttpService {

  constructor(private http: HttpClient) {
  }

  public getAllUsers(): Observable<object> {
    return this.http.get(Url.GET_ALL_USERS);
  }

  public addUser(user): Observable<object> {
    return this.http.put(Url.ADD_USER, user);
  }

  public removeUserById(userId): Observable<object> {
    return this.http.delete(Url.DELETE_USER + userId);
  }
}
