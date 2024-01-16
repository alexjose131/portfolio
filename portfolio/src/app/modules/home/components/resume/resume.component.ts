import { Component } from '@angular/core';
import { DataService } from '@shared/services/data.service';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent {
  visible: boolean = false;

  constructor(private dataService: DataService) {
    this.dataService.resumeManager.subscribe(value => {
      this.visible = value
    })
  }
}
