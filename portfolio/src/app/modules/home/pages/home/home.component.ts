import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { DataService } from '@shared/services/data.service';
import { ConfirmationService, PrimeNGConfig } from 'primeng/api';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [ConfirmationService]
})
export class HomeComponent implements OnInit{

  langAsObservable!: Observable<string>
  lang: string = 'ES'
  previousLang: string = 'ES'
  visibleDialog: boolean = false;

  constructor(public translate: TranslateService, 
              public primeNGConfig: PrimeNGConfig,
              private dataService: DataService) {
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

  showContactDialog() {
    this.visibleDialog = true;
  }
}
