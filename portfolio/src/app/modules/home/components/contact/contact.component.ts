import { Component } from '@angular/core';
import { DataService } from '@shared/services/data.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {

  visible: boolean = false;
  text!: string;

  constructor(private dataService: DataService) {
    this.dataService.contactManager.subscribe(value => {
      this.visible = value
    })
  }
}
