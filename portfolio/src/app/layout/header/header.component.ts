import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { DataService } from '@shared/services/data.service';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  value: any;
  lang: string = 'ES'
  previousLang: string = 'ES'
  showResumeDialog: boolean = false
  showContactDialog: boolean = false

  constructor(public translate: TranslateService, 
              public primeNGConfig: PrimeNGConfig,
              private dataService: DataService,
              private router: Router) {
    translate.addLangs(['ES', 'EN']);
    translate.setDefaultLang('ES');

    this.getBrowserlang();
}

  languageOptions: any[] = [
    { icon: '../../../../assets/images/spain.png', justify: 'center', text: 'ES' },
    { icon: '../../../../assets/images/en.png', justify: 'center', text: 'EN' },
  ]

  ngOnInit(): void {
    this.value = this.languageOptions[0];
    this.dataService.langManager.subscribe(value => this.lang = value);
    this.dataService.resumeManager.subscribe(value => this.showResumeDialog = value)
    this.dataService.contactManager.subscribe(value => this.showContactDialog = value)
    this.getLanguage()
  }

  changeLang(event: any) {
    this.lang = event.option.text
    this.dataService.setLang(this.lang)
  }

  getLanguage() {
    this.dataService.langManager.subscribe((value) => {
      this.previousLang = this.lang
      this.lang = value 
      if (this.lang != this.previousLang) {
        this.updateLang(this.lang)
      }
    })
  }

  getBrowserlang() {
    const browserLang = this.translate.getBrowserLang();
    let lang = browserLang?.match(/ES|EN/) ? browserLang : 'ES';
    this.updateLang(lang);
  }

  updateLang(lang: string) {
    this.translate.use(lang);
  }

  showResume() {
    this.dataService.setResume(true)
  }

  showContact() {
    console.log('entra')
    this.dataService.setContact(true)
  }
  
  goToLinkedin() {
   const url = 'https://github.com/alexjose131'

   window.open(url, '_blank')
  }
}
