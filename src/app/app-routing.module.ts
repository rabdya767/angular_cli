import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AbcComponent } from './abc/abc.component';
import { XyzComponent } from './abc/xyz/xyz.component';
import { PqrComponent } from './pqr.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const appRoutes: Routes = [
  { path: 'abc', component: AbcComponent },
  { path: 'xyz', component: XyzComponent },
  { path: 'pqr', component: PqrComponent },
  { path: '', redirectTo: '/abc', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];
@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
