import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { DataService } from '@shared/services/data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent {
  langAsObservable!: Observable<string>
  lang: string = 'ES'
  previousLang: string = 'ES'
  visible: boolean = false;

  constructor(public translate: TranslateService,
              private dataService: DataService) {
    this.dataService.resumeManager.subscribe(value => {
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

  getCV() {
    window.open('/assets/files/alexander-fernandez-cv.pdf', '_blank')
  }
}
