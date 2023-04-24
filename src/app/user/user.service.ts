import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { User, UserAPIList } from "./user.interfaces";
import { delay } from "rxjs";

const USER_API = "https://codingfactory.ddns.net/api/user";

@Injectable()
export class UserService {
  constructor(private http: HttpClient) {}

  findAll() {
    return this.http.get<UserAPIList>(`${USER_API}/findall`).pipe(delay(1000));
  }

  insertUser(user: User) {
    return this.http.post<UserAPIList>(`${USER_API}/create`, user);
  }
}
