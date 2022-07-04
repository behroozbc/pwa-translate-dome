import { Component } from '@angular/core';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor (public translate: TranslateService) {
    translate.addLangs(['en', 'fa']);
    translate.setDefaultLang('en');

    const browserLang = translate.getBrowserLang();
    translate.use(browserLang?.match(/en|fr/) ? browserLang : 'en');
    translate.onLangChange.subscribe((langChange: LangChangeEvent) => {
      const html = document.getElementsByTagName("html")[0];
      html.setAttribute('lang', langChange.lang);
      if (langChange.lang == 'fa')
        html.setAttribute('dir', 'rtl');
      else
        html.setAttribute('dir', 'ltr');
    });
  }
}
