import { Component, OnInit } from '@angular/core';
import {DomSanitizer, SafeHtml, SafeStyle, SafeScript, SafeUrl, SafeResourceUrl} from '@angular/platform-browser';

@Component({
  selector: 'app-iframe',
  templateUrl: './iframe.component.html',
  styleUrls: ['./iframe.component.css']
})
export class IframeComponent implements OnInit {

  htmlSnippet: SafeResourceUrl;
  constructor(protected sanitizer: DomSanitizer) {}

  ngOnInit() {
    this.htmlSnippet = this.sanitizer.bypassSecurityTrustResourceUrl("www.baidu.com");
  }

}
