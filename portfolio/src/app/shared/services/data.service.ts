import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  lang: string = 'ES'
  langManager:  BehaviorSubject<string> = new BehaviorSubject<string>(this.lang)
  resumeManager: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false)
  contactManager: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false)

  constructor() { }

  getLang(): Observable<string> {
    return this.langManager.asObservable();
  }

  setLang(lang: string) {
    this.langManager.next(lang == null ? this.lang : lang)
  }

  setResume(resumeVisible: boolean) {
    this.resumeManager.next(resumeVisible === null ? false : resumeVisible)
  }

  setContact(contactVisible: boolean) {
    this.contactManager.next(contactVisible === null ? false : contactVisible)
  }
}
