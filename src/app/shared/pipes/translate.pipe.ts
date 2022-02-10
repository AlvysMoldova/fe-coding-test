import { Pipe, PipeTransform } from '@angular/core';
import { TranslatePipe as ngxTranslate } from '@ngx-translate/core';

@Pipe({
  name: 'translate',
  pure: false,
})
export class TranslatePipe extends ngxTranslate implements PipeTransform {
  public transform(query: string, ...args: any[]): any {
    if (!args.length) {
      args.push({});
    }

    return super.transform(query, ...args);
  }
}
