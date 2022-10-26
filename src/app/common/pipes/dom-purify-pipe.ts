import { NgModule, Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import DOMPurify from 'dompurify';

@Pipe({
  name: 'safeHtml',
})
export class SafeHtmlPipe implements PipeTransform {
  constructor(private _sanitizer: DomSanitizer) {}

  public transform(value: any): any {
    const sanitizedContent = DOMPurify.sanitize(value);
    return this._sanitizer.bypassSecurityTrustHtml(sanitizedContent);
  }
}

@NgModule({ declarations: [SafeHtmlPipe], exports: [SafeHtmlPipe] })
export class SafeHtmlPipeModule {}
