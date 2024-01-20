import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeModule } from '@modules/home/home.module';

import { SkeletonComponent } from '@layout/skeleton/skeleton.component';

import { EMPTY_STRING, INTERNAL_PATHS } from '@data/constants/index';

const routes: Routes = [
  {
    path: EMPTY_STRING,
    component: SkeletonComponent,
    children: [
     {
      path: INTERNAL_PATHS.APP_DEFAULT,
      loadChildren: () => import('@modules/home/home.module').then((m): typeof HomeModule => m.HomeModule),
     },
     { path: '**', redirectTo: 'home', pathMatch: 'full' },
    ],
   },
   { path: '**', redirectTo: EMPTY_STRING, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
