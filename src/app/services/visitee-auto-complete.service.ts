import { Injectable } from "@angular/core";
import { AutoCompleteService } from "ionic4-auto-complete";
import { HttpClient } from "@angular/common/http";
import { ActiveDirectoryUser } from "../models/ActiveDirectoryUser";
import Axios, { AxiosResponse, AxiosError, AxiosRequestConfig } from "axios";
import { environment } from "src/environments/environment";
import "rxjs/add/operator/map";
import "rxjs/add/operator/pipe";

@Injectable({
  providedIn: "root"
})
export class VisiteeAutoCompleteService implements AutoCompleteService {
  private activeDirectoryUsers: ActiveDirectoryUser[];

  constructor(private http: HttpClient) {
    this.initializeActiveDirectoryUsers();
  }

  public async initializeActiveDirectoryUsers(): Promise<void> {
    try {
      const url = `${environment.backend_url}/ad/`;
      let axiosResponse: AxiosResponse = await Axios.get(url); // 204
      this.activeDirectoryUsers = (await axiosResponse.data) as ActiveDirectoryUser[];
    } catch (error) {
      console.log("could not get activedirectory users ", error);
    }
  }

  getResults(keyword: string) {
    if (!keyword) {
      return false;
    }
    return this.activeDirectoryUsers.pipe(
      map((result: any[]) => {
        return result.filter(item => {
          return item.name.toLowerCase().startsWith(keyword.toLowerCase());
        });
      })
    );
  }
}
