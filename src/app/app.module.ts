import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { GainComponent } from "./components/gain/gain.component";
import { ServicesComponent } from './components/services/services.component';
import { SolutionComponent } from './components/solution/solution.component';
import { IndustryComponent } from './components/industry/industry.component';
import { AboutComponent } from './components/about/about.component';
import { ClientsComponent } from './components/clients/clients.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { VisionComponent } from './components/vision/vision.component';
import { LeadersComponent } from './components/leaders/leaders.component';
import { Or12Component } from './components/or12/or12.component';
import { ImplementComponent } from './components/implement/implement.component';
import { HcComponent } from './components/hc/hc.component';
import { PmComponent } from './components/pm/pm.component';
import { MsComponent } from './components/ms/ms.component';
import { HciComponent } from './components/hci/hci.component';
import { BankiComponent } from './components/banki/banki.component';
import { OrcloudComponent } from './components/orcloud/orcloud.component';
import { ErpComponent } from './components/erp/erp.component';
import { BiComponent } from './components/bi/bi.component';
import { CrmComponent } from './components/crm/crm.component';
import { EpmComponent } from './components/epm/epm.component';
import { MainComponent } from './components/main/main.component';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { OwlModule } from 'ngx-owl-carousel';
import { NgwWowModule } from 'ngx-wow';
import { WhyusComponent } from './components/whyus/whyus.component';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { TrainComponent } from './components/train/train.component';
import { CareerComponent } from './components/career/career.component';
import { FormsModule } from '@angular/forms';
import { AlertModule } from 'ngx-bootstrap/alert';
import { CtrlService } from './services/ctrl.service';
import { ToastrModule } from 'ngx-toastr';
import { AuthGuard } from './services/auth.guard';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { DashComponent } from './components/dash/dash.component';
@NgModule({
  declarations: [
    AppComponent, 
    GainComponent,ServicesComponent,
    SolutionComponent,
    IndustryComponent,
    AboutComponent,
    ClientsComponent,
    FooterComponent,
    HeaderComponent,
    VisionComponent,
    LeadersComponent,
    Or12Component,
    ImplementComponent,
    HcComponent,
    PmComponent,
    MsComponent,
    HciComponent,
    BankiComponent,
    OrcloudComponent,
    ErpComponent,
    BiComponent,
    CrmComponent,
    EpmComponent,
    MainComponent,
    WhyusComponent,
    TrainComponent,
    CareerComponent,
    LoginComponent,
    RegisterComponent,
    DashComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: "serverApp" }),
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserAnimationsModule,
    ButtonsModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireAuthModule,
    OwlModule,
    NgwWowModule,
    TabsModule.forRoot(),
    FormsModule,
    AlertModule.forRoot(),
    ToastrModule.forRoot()
  ],
  providers: [CtrlService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule {}
