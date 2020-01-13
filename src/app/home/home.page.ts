import { Component } from "@angular/core";
import { VisiteeAutoCompleteService } from "../services/visitee-auto-complete.service";
import { environment } from "src/environments/environment";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"]
})
export class HomePage {
  constructor(public visiteeAutoCompleteService: VisiteeAutoCompleteService) {}

  public testRedirect() {
    window.location.href = environment.ise_login_url;
  }
}
