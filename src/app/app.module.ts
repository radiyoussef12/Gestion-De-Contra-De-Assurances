
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// import { LandingComponent } from './components/landing/landing.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';

import { provideAuth,getAuth } from '@angular/fire/auth';

import { MelioComponent } from './components/melio/melio.component';
import { FootComponent } from './components/foot/foot.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { OffresComponent } from './components/offres/offres.component';
import { BranchesComponent } from './components/branches/branches.component';

import { getStorage } from '@angular/fire/storage';
import { HotToastModule } from '@ngneat/hot-toast';
import { ProfileComponent } from './components/profile/profile.component';
import { ToastrModule } from 'ngx-toastr';


import { LayoutModule } from '@angular/cdk/layout';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { ClientComponent } from './client/client.component';
import { AddContraComponent } from './client/add-contra/add-contra.component';
import { SidenavComponent } from './client/sidenav/sidenav.component';
import { HeaderComponent } from './client/header/header.component';
import { HomeClientComponent } from './client/home-client/home-client.component';

// import { MaterialModule } from './material/material/material.module';
import { MatMenuModule } from '@angular/material/menu';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDividerModule } from '@angular/material/divider';
import {MatCardModule } from '@angular/material/card';
import { AddContraDialogComponent } from './client/add-contra-dialog/add-contra-dialog.component';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore'

import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { MaterialModule } from './material/material/material.module';
import { environment } from 'src/environments/environment.development';
import { ViecontraComponent } from './client/viecontra/viecontra.component';
import { AdminComponent } from './Admin/admin.component';
import { SidenavAdminComponent } from './Admin/sidenav-admin/sidenav-admin.component';
import { HeaderAminComponent } from './Admin/header-amin/header-amin.component';
import { LoginAdminComponent } from './Admin/login-admin/login-admin.component';
import { SinginAdminComponent } from './Admin/singin-admin/singin-admin.component';
import { AgentComponent } from './Admin/agent/agent.component';
import { AgentDialogComponent } from './Admin/agent-dialog/agent-dialog.component';
import { AddContraAdminComponent } from './Admin/add-contra-admin/add-contra-admin.component';
import { AddContraDialogAdminComponent } from './Admin/add-contra-dialog-admin/add-contra-dialog-admin.component';
import { GetcontraComponent } from './Admin/getcontra/getcontra.component';
import { DilogtestComponent } from './Admin/dilogtest/dilogtest.component';
import { DeteleComponent } from './Admin/detele/detele.component';
import { BrancheComponent } from './Admin/branche/branche.component';
import { DashboardComponent } from './Admin/dashboard/dashboard.component';
// import { AreaComponent } from './sharede/widgets/area/area.component';
// import { HighchartsChartModule } from 'highcharts-angular';
import { NgModule } from '@angular/core';
// import { ReactiveFormsModule } from '@angular/forms';
import {  CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HighchartsChartModule } from 'highcharts-angular';
import { AreaComponent } from './sharede/widgets/area/area.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CardComponent } from './sharede/widgets/card/card.component';
import { PieComponent } from './sharede/widgets/pie/pie.component';
import { DataService } from './shared/service/data.service';
import { GlobalComponent } from './sharede/widgets/global/global.component';

@NgModule({
  declarations: [
    // ReactiveFormsModule,
    AppComponent,
    // LandingComponent,
    LoginComponent,
    HomeComponent,
    SignUpComponent,
    NavbarComponent,
    MelioComponent,
       FootComponent,
       NavbarComponent,
       OffresComponent,
       BranchesComponent,
       ProfileComponent,
      
       ClientComponent,
       AddContraComponent,
       SidenavComponent,
       HeaderComponent,
       HomeClientComponent,
       AddContraDialogComponent,
       ViecontraComponent,
       AdminComponent,
       SidenavAdminComponent,
       HeaderAminComponent,
       LoginAdminComponent,
       SinginAdminComponent,
       AgentComponent,
       AgentDialogComponent,
       AddContraAdminComponent,
       AddContraDialogAdminComponent,
       GetcontraComponent,
       DilogtestComponent,
       DeteleComponent,
       BrancheComponent,
       DashboardComponent,
       AreaComponent,
       CardComponent,
       PieComponent,
       GlobalComponent,
   
      //  AreaComponent,
       
       
     
     
      
  ],

  
  imports: [
    
    AppRoutingModule,
    MatFormFieldModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    // ReactiveFormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore()),
    AngularFireModule.initializeApp(environment.firebase),
    provideAuth(() => getAuth()),
    AngularFirestoreModule,
    BrowserModule,
    ToastrModule.forRoot(),
    HotToastModule.forRoot(),
    LayoutModule,
    MatSidenavModule,
    MatListModule,
    BrowserAnimationsModule,
    
    HighchartsChartModule,
    MatSidenavModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatDividerModule,
    MatCardModule,
    MaterialModule,
    // ReactiveFormsModule,
    FormsModule,
    ReactiveFormsModule,
    HighchartsChartModule,
    FlexLayoutModule,
    MatCardModule,
    
  ],















  
  providers: [AngularFirestore,DataService,DashboardComponent],
  

  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  // entryComponents:[AddContraDialogComponent],
// exports:[AreaComponent],
})
export class AppModule { }
function provideStorage(arg0: () => any): any[] | import("@angular/core").Type<any> | import("@angular/core").ModuleWithProviders<{}> {
  throw new Error('Function not implemented.');
}

