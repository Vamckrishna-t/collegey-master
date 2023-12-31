import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from "@angular/platform-browser";

@Pipe({
  name: 'safe'
})
export class SafePipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) { }

  /* transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  } */

  transform(url) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
  
}
