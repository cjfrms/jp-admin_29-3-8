import { Component, OnInit } from '@angular/core';
import {DomSanitizer, SafeHtml, SafeStyle, SafeScript, SafeUrl, SafeResourceUrl} from '@angular/platform-browser';

@Component({
  selector: 'app-extenal-url',
  templateUrl: './extenal-url.component.html',
  styleUrls: ['./extenal-url.component.css']
})
export class ExtenalUrlComponent implements OnInit {
  htmlSnippet = "https://www.baidu.com/";

  constructor(protected sanitizer: DomSanitizer) { }

  ngOnInit() {
  }

}
