import { Injectable } from "@angular/core";
import Axios, { AxiosResponse, AxiosError, AxiosRequestConfig } from "axios";
import { CreateGuestUserDto } from "../models/CreateGuestUserDto";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root"
})
export class BackendApiService {
  constructor() {}

  public async createGuestUser(createGuestUserDto: CreateGuestUserDto): Promise<void>{
    try {
      const url = `${environment.backend_url}/guest-user`;
      return await Axios.post(url, createGuestUserDto);
    } catch (error) {
      console.log(error);
    }
  }
}
