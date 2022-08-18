import { Component, OnInit } from '@angular/core';
import {VerifySuccessService} from "../../services/verify-success/verify-success.service";
import {logMessages} from "@angular-devkit/build-angular/src/builders/browser-esbuild/esbuild";

@Component({
  selector: 'app-verify-success',
  templateUrl: './verify-success.component.html',
  styleUrls: ['./verify-success.component.scss']
})
export class VerifySuccessComponent implements OnInit {

  constructor(private verifySuccessService : VerifySuccessService) { }

  ngOnInit(): void {
    this.verifySuccessService.verifySuccess().subscribe(result =>
    console.log(result));
  }

}
