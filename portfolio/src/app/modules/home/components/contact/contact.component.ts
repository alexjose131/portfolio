import { Component, OnInit } from '@angular/core';

import { TranslateService } from '@ngx-translate/core';
import { DataService } from '@shared/services/data.service';
import { ConfirmationService } from 'primeng/api';
import { Observable } from 'rxjs';

import { environment } from '@env/environment';




@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  providers: [ConfirmationService]
})
export class ContactComponent implements OnInit{

  langAsObservable!: Observable<string>
  lang: string = 'ES'
  previousLang: string = 'ES'
  visible: boolean = false;
  text1: string = '';
  name: string = '';
  mail: string = environment.mailCreds.to

  constructor(public translate: TranslateService,
              private dataService: DataService) {
    this.dataService.contactManager.subscribe(value => {
      this.visible = value
    })
    translate.addLangs(['ES', 'EN']);
    translate.setDefaultLang('ES');

    this.getBrowserlang();
  }

  ngOnInit(): void {
    this.getLanguage()
  }

  getBrowserlang() {
    const browserLang = this.translate.getBrowserLang();
    let lang = browserLang?.match(/ES|EN/) ? browserLang : 'ES';
    this.changeLang(lang);
  }

  getLanguage() {
    this.dataService.langManager.subscribe((value) => {
      this.previousLang = this.lang
      this.lang = value 
      if (this.lang != this.previousLang) {
        this.changeLang(this.lang)
      }
    })
  }

  changeLang(lang: string) {
    this.translate.use(lang);
  }
}
