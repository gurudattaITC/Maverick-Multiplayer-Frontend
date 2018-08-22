import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { MatchingUsers } from "./model/matchingUser";
import { Result } from "./model/multiPlayerResult";

@Injectable()
export class MatchingUserService {
  matchingUsers: MatchingUsers;
  constructor(private http: HttpClient) {}

  public getMatchingUsers(): Observable<MatchingUsers[]> {
    return this.http.get<MatchingUsers[]>(
      "http://localhost:8080/maverick/users"
    );
  }
  finalResult(): Observable<Result> {
    console.log("Inside service");
    return this.http.get<Result>(
      "http://localhost:8080/maverick/getResults"
    );
  }
}
