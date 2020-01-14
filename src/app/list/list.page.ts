import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  AfterContentInit,
  AfterViewInit
} from "@angular/core";
import { QrScanService } from "../services/qr-scan.service";

@Component({
  selector: "app-list",
  templateUrl: "list.page.html",
  styleUrls: ["list.page.scss"]
})
export class ListPage implements AfterViewInit {
  @ViewChild("videoRef", {static: false}) videoRef: ElementRef;

  constructor(private qrScanService: QrScanService) {}
  ngOnInit() {}

  async ngAfterViewInit() {
    console.log(this.videoRef)
   await this.qrScanService.scanCode(this.videoRef);
  }
}
