import { BookingChartComponent } from './../pages/main-action/management/management-booking/booking-chart/booking-chart.component';
import { BookingListComponent } from './../pages/main-action/management/management-booking/booking-list/booking-list.component';

import { ErrorNotFoundComponent } from './../pages/error-not-found/error-not-found.component';
import { ManagementStoreComponent } from './../pages/main-action/management/management-store/management-store.component';
import { ManagementMarketingComponent } from './../pages/main-action/management/management-marketing/management-marketing.component';
import { ManagementRevenueComponent } from './../pages/main-action/management/management-revenue/management-revenue.component';
import { ManagementCostComponent } from './../pages/main-action/management/management-cost/management-cost.component';
import { ManagementAccountComponent } from './../pages/main-action/management/management-account/management-account.component';
import { ManagementBookingComponent } from './../pages/main-action/management/management-booking/management-booking.component';
import { ProfileDetailsComponent } from './../pages/main-action/profile-details/profile-details.component';
import { LoginComponent } from './../pages/login/login.component';
import { DashboardComponent } from './../pages/main-action/dashboard/dashboard.component';
import { MainActionComponent } from '../pages/main-action/main-action.component';
import { RouterModule, Routes } from '@angular/router';

export const paths = {
  login: 'login',
  main: 'main'
}

export const ROUTER = RouterModule.forRoot([

  { path: '', redirectTo: paths.login, pathMatch: 'full' },
  { path: paths.login, component: LoginComponent },
  {
    path: paths.main, component: MainActionComponent, children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'profile', component: ProfileDetailsComponent },
      {
        path: 'management-booking', component: ManagementBookingComponent, children: [
          { path: '', redirectTo: 'booking-list', pathMatch: 'prefix' },
          { path: 'booking-list', component: BookingListComponent },
          { path: 'booking-chart', component: BookingChartComponent }
        ]
      },
      { path: 'management-account', component: ManagementAccountComponent },
      { path: 'management-cost', component: ManagementCostComponent },
      { path: 'management-revenue', component: ManagementRevenueComponent },
      { path: 'management-marketing', component: ManagementMarketingComponent },
      { path: 'management-store', component: ManagementStoreComponent }
    ]
  },
  { path: '**', redirectTo: '404' },
  { path: '404', component: ErrorNotFoundComponent }
]);
