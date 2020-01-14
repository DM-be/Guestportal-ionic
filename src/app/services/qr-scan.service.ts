import { Injectable, ElementRef } from "@angular/core";
//import { QRScanner, QRScannerStatus } from "@ionic-native/qr-scanner/ngx";
//import QrScanner from 'path/to/qr-scanner.min.js'; // if using plain es6 import
import QrScanner from "qr-scanner"; // if installed via package and bundling with webpack or rollup
import QrScannerWorkerPath from "qr-scanner/qr-scanner-worker.min.js";
QrScanner.WORKER_PATH = QrScannerWorkerPath;

@Injectable({
  providedIn: "root"
})
export class QrScanService {
  qrScanner: QrScanner;
  constructor() {}

  // public async scanQrCode() {
  //   // Optionally request the permission early
  //   const status: QRScannerStatus = await this.qrScanner.prepare();
  //   if (status.authorized) {
  //     // start scanning
  //     let scanSub = this.qrScanner.scan().subscribe((text: string) => {
  //       console.log("Scanned something", text);

  //       this.qrScanner.hide(); // hide camera preview
  //       scanSub.unsubscribe(); // stop scanning
  //     });
  //   }
  // }

  public async scanCode(videoRef: ElementRef) {
    this.qrScanner = new QrScanner(
      videoRef.nativeElement as HTMLVideoElement,
      result => this.stopScanning(result)
    );
    await this.qrScanner.start();
  }

  private stopScanning(decodedText: string) {
    console.log(decodedText);
    alert(decodedText);
    this.qrScanner.stop();
    this.qrScanner.destroy();
    // redirect to self-register
    // add to localstorage etc.
  }
}
