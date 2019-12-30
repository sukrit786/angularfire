import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { AboutComponent } from './components/about/about.component';
import { VisionComponent } from './components/vision/vision.component';
import { ServicesComponent } from './components/services/services.component';
import { LeadersComponent } from './components/leaders/leaders.component';
import { ClientsComponent } from './components/clients/clients.component';
import { Or12Component } from './components/or12/or12.component';
import { ImplementComponent } from './components/implement/implement.component';
import { HcComponent } from './components/hc/hc.component';
import { PmComponent } from './components/pm/pm.component';
import { MsComponent } from './components/ms/ms.component';
import { CrmComponent } from './components/crm/crm.component';
import { HciComponent } from './components/hci/hci.component';
import { BankiComponent } from './components/banki/banki.component';
import { TrainComponent } from './components/train/train.component';
import { BiComponent } from './components/bi/bi.component';
import { ErpComponent } from './components/erp/erp.component';
import { CareerComponent } from './components/career/career.component';
import { EpmComponent } from './components/epm/epm.component';
import { OrcloudComponent } from './components/orcloud/orcloud.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AuthGuard } from './services/auth.guard';

const routes: Routes = [
  {path:'',component:MainComponent},
  {path:'about',component:AboutComponent},
  {path:'vision',component:VisionComponent},
  {path:'services',component:ServicesComponent},
  {path:'leader',component:LeadersComponent},
  {path:'clients',component:ClientsComponent},
  {path:'or12',component:Or12Component},
  {path:'implement',component:ImplementComponent},
  {path:'hc',component:HcComponent},
  {path:'pm',component:PmComponent},
  {path:'ms',component:MsComponent},
  {path:'crm',component:CrmComponent},
  {path:'hci',component:HciComponent},
  {path:'banki',component:BankiComponent},
  {path:'train',component:TrainComponent},
  {path:'erp',component:ErpComponent},
  {path:'bi',component:BiComponent},
  {path:'career',component:CareerComponent},
  {path:'epm',component:EpmComponent},
  {path:"orcloud",component:OrcloudComponent},
  {path:"login",component:LoginComponent,canActivate:[AuthGuard]},
  {path:"register",component:RegisterComponent,canActivate:[AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
