import { Injectable } from "@angular/core";
import { AutoCompleteService } from "ionic4-auto-complete";
import { HttpClient } from "@angular/common/http";
import { ActiveDirectoryUser } from "../models/ActiveDirectoryUser";
import Axios, { AxiosResponse, AxiosError, AxiosRequestConfig } from "axios";
import { environment } from "src/environments/environment";
import { map } from "rxjs/operators";
import { pipe, Observable } from "rxjs";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class VisiteeAutoCompleteService implements AutoCompleteService {
  private activeDirectoryUsers: BehaviorSubject<ActiveDirectoryUser[]>;
  labelAttribute = "email";
  formValueAttribute = "name";

  constructor() {
    // this.initializeActiveDirectoryUsers();
    this.generateTestUsers();
  }
zz
  public generateTestUsers() {
    this.activeDirectoryUsers = new BehaviorSubject([
      {
        email: "testemail",
        name: "Dennis"
      },
      {
        email: "testemail",
        name: "Lukas"
      }
    ] as ActiveDirectoryUser[]);
  }

  public async initializeActiveDirectoryUsers(): Promise<void> {
    try {
      const url = `${environment.backend_url}/ad/`;
      let axiosResponse: AxiosResponse = await Axios.get(url); // 204
      this.activeDirectoryUsers = new BehaviorSubject(
        axiosResponse.data as ActiveDirectoryUser[]
      );
    } catch (error) {
      console.log("could not get activedirectory users ", error);
    }
  }

  public getResults(keyword: string): Observable<any> | boolean {
    if (!keyword) {
      return false;
    }
    return this.activeDirectoryUsers.asObservable().pipe(
      map((result: any[]) => {
        return result.filter(item => {
          return item.name.toLowerCase().startsWith(keyword.toLowerCase());
        });
      })
    );
  }
}
