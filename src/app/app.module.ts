import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AlertModule } from 'ngx-bootstrap';
import { RouterModule} from '@angular/router';
import {HttpClientModule, HttpClient} from '@angular/common/http';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import { MatSliderModule } from '@angular/material/slider';
import{MatButtonModule, MatCheckboxModule,MatTableModule,MatDialogModule } from'@angular/material';
import{BrowserAnimationsModule}from '@angular/platform-browser/animations';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireFunctionsModule } from '@angular/fire/functions';
import {AgmCoreModule} from '@agm/core';





import { AppComponent } from './app.component';
import { BookingComponent } from './booking/booking.component';
import { SiteComponent } from './site/site.component';
import { FaqComponent } from './faq/faq.component';
import { AboutComponent } from './about/about.component';
import { CleaningComponent } from './cleaning/cleaning.component';
import { ReceptionComponent } from './reception/reception.component';
import { HandymanComponent } from './handyman/handyman.component';
import { AdaptationComponent } from './adaptation/adaptation.component';
import { ClassificationComponent } from './classification/classification.component';
import { PricingComponent } from './pricing/pricing.component';
import { DialogComponent } from './dialog/dialog.component';
import { EmailComponent } from './email/email.component';






export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

const config = {
  apiKey: "AIzaSyDzNW0gpKa0leR2AZP4txj1ltN01mc9vR0",
  authDomain: "hosta-dc930.firebaseapp.com",
  databaseURL: "https://hosta-dc930.firebaseio.com",
  projectId: "hosta-dc930",
  storageBucket: "hosta-dc930.appspot.com",
  messagingSenderId: "996896761441",
  appId: "1:996896761441:web:4e1f4a9c0c9fff7c126c20",
  measurementId: "G-QR77RLKXE2"
};


@NgModule({
  declarations: [
    AppComponent,
    BookingComponent,
    SiteComponent,
    FaqComponent,
    AboutComponent,
    CleaningComponent,
    ReceptionComponent,
    HandymanComponent,
    AdaptationComponent,
    ClassificationComponent,
    PricingComponent,
    DialogComponent,
    EmailComponent,
  ],
  imports: [
    AlertModule.forRoot(),
    BrowserModule,
    MatSliderModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyC5HD22ZySCrbdJxTyUgwvJi9lNl-Dr9b0'
    }),
    AngularFireModule.initializeApp(config),
    AngularFireAuthModule, // auth
    AngularFireFunctionsModule,
  
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: (createTranslateLoader),
                deps: [HttpClient]
            }
        }),

       
   
    RouterModule.forRoot([
     
      { path: '', component:  SiteComponent  },
      { path: 'booking', component:  BookingComponent },
      { path: 'faq', component: FaqComponent},
      { path: 'about', component: AboutComponent},
      { path: 'cleaning', component: CleaningComponent},
      { path: 'handyman', component: HandymanComponent},
      { path: 'reception', component: ReceptionComponent},
      { path: 'adaptation', component: AdaptationComponent},
      { path: 'classification', component: ClassificationComponent},
      { path: 'pricing', component: PricingComponent},
      { path: 'email', component: EmailComponent},
      
     
    ]),
   
    BrowserAnimationsModule
  ],
  entryComponents:[
    DialogComponent,
  ],
  exports:[
    AngularFireModule,
    AngularFireAuthModule,
    MatDialogModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
