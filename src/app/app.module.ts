import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StudentModule } from './student/student.module';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AbcComponent } from './abc/abc.component';
import { XyzComponent } from './abc/xyz/xyz.component';
import { PqrComponent } from './pqr.component';
import { CustomerService } from './customer-service.service';
import { StaffModule } from './staff/staff.module';
import { MydirectiveDirective } from './mydirective.directive';
import { MydirectiveSkipImportDirective } from './mydirective-skip-import.directive';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
// import { RouterModule ,Routes} from '@angular/router';



// const appRoutes: Routes = [
//   {path: 'abc', component: AbcComponent},
//   {path: 'xyz', component: XyzComponent},
//   {path: 'pqr', component: PqrComponent},
//   {path: '', redirectTo:'/abc',pathMatch:'full'},
//   {path: '**', component: PageNotFoundComponent},
// ];
@NgModule({
  declarations: [
    AppComponent,
    AbcComponent,
    XyzComponent,
    PqrComponent,
    MydirectiveDirective,
    MydirectiveSkipImportDirective,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StudentModule,
    StaffModule
    // RouterModule.forRoot(appRoutes)
  ],
  providers: [CustomerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
