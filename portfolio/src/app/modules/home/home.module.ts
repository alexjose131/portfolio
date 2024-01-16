import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DividerModule} from 'primeng/divider';
import {ImageModule} from 'primeng/image';
import { CardModule } from 'primeng/card';
import { DialogModule } from 'primeng/dialog';

import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from '@shared/shared.module';
import { HomeComponent } from './pages/home/home.component';
import { TranslateModule } from '@ngx-translate/core';
import { ResumeComponent } from './components/resume/resume.component';
import { ContactComponent } from './components/contact/contact.component';


@NgModule({
  declarations: [
    HomeComponent,
    ResumeComponent,
    ContactComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    DividerModule,
    CardModule,
    ImageModule,
    TranslateModule,
    DialogModule
  ]
})
export class HomeModule { }
