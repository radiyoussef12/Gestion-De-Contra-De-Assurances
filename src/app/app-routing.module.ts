import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';





import { AddContraComponent } from './client/add-contra/add-contra.component';
import { ClientComponent } from './client/client.component';
import { SidenavComponent } from './client/sidenav/sidenav.component';
import { HomeClientComponent } from './client/home-client/home-client.component';
import { AddContraDialogComponent } from './client/add-contra-dialog/add-contra-dialog.component';
import { ViecontraComponent } from './client/viecontra/viecontra.component';


import {  CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { FootComponent } from './components/foot/foot.component';
import { MelioComponent } from './components/melio/melio.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BranchesComponent } from './components/branches/branches.component';
import { ProfileComponent } from './components/profile/profile.component';



import { AdminComponent } from './Admin/admin.component';
import { SidenavAdminComponent } from './Admin/sidenav-admin/sidenav-admin.component';
import { LoginAdminComponent } from './Admin/login-admin/login-admin.component';
import { SinginAdminComponent } from './Admin/singin-admin/singin-admin.component';
import { AddContraAdminComponent } from './Admin/add-contra-admin/add-contra-admin.component';
import { AddContraDialogAdminComponent } from './Admin/add-contra-dialog-admin/add-contra-dialog-admin.component';
import { AgentComponent } from './Admin/agent/agent.component';
import { AgentDialogComponent } from './Admin/agent-dialog/agent-dialog.component';
import { GetcontraComponent } from './Admin/getcontra/getcontra.component';
import { DilogtestComponent } from './Admin/dilogtest/dilogtest.component';
import { DeteleComponent } from './Admin/detele/detele.component';
import { BrancheComponent } from './Admin/branche/branche.component';
import { DashboardComponent } from './Admin/dashboard/dashboard.component';
const routes: Routes = [
  {path : 'client',component:ClientComponent, children :

  [
  
    {
      path: '',
      pathMatch: 'full',
      component: HomeClientComponent,
    },
    {path : 'sidenav', component: SidenavComponent},

    {path : 'addContra', component: AddContraComponent},
    {path : 'homeClient', component: HomeClientComponent},
    {path : 'addContraDialog', component: AddContraDialogComponent},
    {path : 'VieContra', component: ViecontraComponent
  ,
},

    



]


},


  {path : 'admin',component :AdminComponent, children :

[

  // {
  //   path: '',
  //   pathMatch: 'full',
  //   component: HomeClientComponent,
  // },
  {path : 'sidenavAdmin', component: SidenavAdminComponent

},
  {path : 'addcontra', component: AddContraAdminComponent},
  {path : 'addContraDialogAdmin', component: AddContraDialogAdminComponent},
  {path : 'agent', component: AgentComponent},

  {path : 'agentdialog', component: AgentDialogComponent},
  {path : 'getcontra', component: GetcontraComponent},
  {path : 'testdialog', component: DilogtestComponent},
  {path : 'delet', component: DeteleComponent},
  {path : 'branch', component: BrancheComponent},
  {path : 'dashboard', component: DashboardComponent},


 



  





]
},




  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent,
  

  },
  {
    path: 'login',
    component: LoginComponent,
    // ...canActivate(redirectLoggedInToHome),
    
  },
  
  {
    path: 'branches',
    component: BranchesComponent,
    // ...canActivate(redirectLoggedInToHome),
  },
  
  {
    path: 'sign-up',
    component: SignUpComponent,
    // ...canActivate(redirectLoggedInToHome),

  },
  {
    path: 'home',
    component: HomeComponent,
    // ...canActivate(redirectUnauthorizedToLogin),
  },
 
  {
   
    path: 'melio',
    component: MelioComponent,
  },
  {
   
    path: 'foot',
    component:FootComponent,
  },
  
  {
   
    path: 'nav-bar',
    component: NavbarComponent,
  },
  {
    path: 'profile',
    component: ProfileComponent,
    // ...canActivate(redirectUnauthorizedToLogin),
  },
  {path : 'loginAdmin', component: LoginAdminComponent},
  {path : 'singinAdmin', component: SinginAdminComponent}
];

@NgModule({
  declarations: [],
  imports: [CommonModule,RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
