
import { LineChartModule } from './../sharings/modules/charts/line-chart/line-chart.module';
import { BarChartModule } from './../sharings/modules/charts/bar-chart/bar-chart.module';
import { MaterialModule } from './../sharings/material/material.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ROUTER } from './router-configuration';
import { AppRoutingModule } from './../app-routing.module';
// Module
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { ChartsModule } from 'ng2-charts';
import { ReactiveFormsModule } from '@angular/forms';

import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatExpansionModule } from '@angular/material/expansion';
import { SocialLoginModule, SocialAuthService, FacebookLoginProvider, GoogleLoginProvider } from 'angularx-social-login';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';

export const IMPORTS = [
  BrowserModule,
  HttpClientModule,
  AppRoutingModule,
  ChartsModule,
  ReactiveFormsModule,
  BrowserAnimationsModule,
  MaterialModule,
  MatDialogModule,
  MatInputModule,
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule,
  MatProgressSpinnerModule,
  MatSelectModule,
  MatIconModule,
  MatTableModule,
  MatPaginatorModule,
  MatSortModule,
  MatCheckboxModule,
  MatSidenavModule,
  MatExpansionModule,
  MatSnackBarModule,
  BrowserAnimationsModule,
  NgbModule,
  //AngularFireModule.initializeApp(firebaseConfig),
  AngularFireAuthModule,
  BarChartModule,
  LineChartModule,
  ROUTER,
];

export const FIREBASECONFIG = {
  apiKey: "AIzaSyDkkBiAI_FQF8XeZhJrY1o4MjSgG_rp6wM",
  authDomain: "hair-time-3fbdb.firebaseapp.com",
  databaseURL: "https://hair-time-3fbdb.firebaseio.com",
  projectId: "hair-time-3fbdb",
  storageBucket: "hair-time-3fbdb.appspot.com",
  messagingSenderId: "767399682957",
  appId: "1:767399682957:web:ff8f83ece4f70ae90f53c4",
  measurementId: "G-B4EVP2LKV2"
};
