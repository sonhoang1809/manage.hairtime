import { MatStepperModule } from '@angular/material/stepper';
import { VerifyActionComponent } from './sharings/components/verify-action/verify-action.component';
import { BookingChartComponent } from './pages/main-action/management/management-booking/booking-chart/booking-chart.component';
import { BookingDetailsComponent } from './pages/main-action/management/management-booking/booking-list/booking-details/booking-details.component';
import { BookingListComponent } from './pages/main-action/management/management-booking/booking-list/booking-list.component';

import { ErrorNotFoundComponent } from './pages/error-not-found/error-not-found.component';
import { ManagementRevenueComponent } from './pages/main-action/management/management-revenue/management-revenue.component';
import { ManagementStoreComponent } from './pages/main-action/management/management-store/management-store.component';
import { ManagementMarketingComponent } from './pages/main-action/management/management-marketing/management-marketing.component';
import { ManagementCostComponent } from './pages/main-action/management/management-cost/management-cost.component';
import { ManagementAccountComponent } from './pages/main-action/management/management-account/management-account.component';
import { ManagementBookingComponent } from './pages/main-action/management/management-booking/management-booking.component';
import { SummaryMarketingAtCountriesComponent } from './pages/main-action/dashboard/summary-marketing-at-countries/summary-marketing-at-countries.component';
import { DonutChartModule } from './sharings/modules/charts/donut-chart/donut-chart.module';
import { SummaryNumberStoreTypeComponent } from './pages/main-action/dashboard/summary-number-store-type/summary-number-store-type.component';
import { GeneralHelperService } from './services/general-helper.service';
import { SummaryAdvertisingMediaComponent } from './pages/main-action/dashboard/summary-advertising-media/summary-advertising-media.component';
import { SummaryMarketingBySocialComponent } from './pages/main-action/dashboard/summary-marketing-by-social/summary-marketing-by-social.component';
import { RecentNewStoreComponent } from './pages/main-action/dashboard/recent-new-store/recent-new-store.component';
import { SummaryRevenueByCategoryComponent } from './pages/main-action/dashboard/summary-revenue-by-category/summary-revenue-by-category.component';
import { PieChartModule } from './sharings/modules/charts/pie-chart/pie-chart.module';
import { StatisticsComponent } from './pages/main-action/dashboard/shared/statistics/statistics.component';
import { ProfileDetailsComponent } from './pages/main-action/profile-details/profile-details.component';
import { RouterModule } from '@angular/router';
import { SummaryNumberOfAccountComponent } from './pages/main-action/dashboard/summary-number-of-account/summary-number-of-account.component';
import { SummaryNumberOfNewStoreComponent } from './pages/main-action/dashboard/summary-number-of-new-store/summary-number-of-new-store.component';
import { SummaryNumberOfNewCustomerComponent } from './pages/main-action/dashboard/summary-number-of-new-customer/summary-number-of-new-customer.component';
import { SummaryNumberOfGuestComponent } from './pages/main-action/dashboard/summary-number-of-guest/summary-number-of-guest.component';
import { TopPerformingStoreComponent } from './pages/main-action/dashboard/top-performing-store/top-performing-store.component';
import { RecentCostComponent } from './pages/main-action/dashboard/recent-cost/recent-cost.component';
import { RecentBookingsComponent } from './pages/main-action/dashboard/recent-bookings/recent-bookings.component';
import { SummaryNumberOfBookingsInMonthComponent } from './pages/main-action/dashboard/summary-number-of-bookings-in-month/summary-number-of-bookings-in-month.component';
import { SummaryProfitInMonthComponent } from './pages/main-action/dashboard/summary-profit-in-month/summary-profit-in-month.component';
import { SummaryCostInMonthComponent } from './pages/main-action/dashboard/summary-cost-in-month/summary-cost-in-month.component';
import { SummaryRevenueInMonthComponent } from './pages/main-action/dashboard/summary-revenue-in-month/summary-revenue-in-month.component';
import { AuthService } from './services/auth-service/auth.service';
import { DashboardComponent } from './pages/main-action/dashboard/dashboard.component';
import { HeaderMainActionComponent } from './pages/main-action/shared/header-main-action/header-main-action.component';
import { FIREBASECONFIG } from './configs/import-configuration';
import { ROUTER } from './configs/router-configuration';
import { LineChartModule } from './sharings/modules/charts/line-chart/line-chart.module';
import { BarChartModule } from './sharings/modules/charts/bar-chart/bar-chart.module';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireModule } from '@angular/fire';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { MaterialModule } from './sharings/material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { MainActionComponent } from './pages/main-action/main-action.component';


// Component
import { AppComponent } from './app.component';
import { LeftSideBarComponent } from './pages/main-action/shared/left-side-bar/left-side-bar.component';
import { FooterComponent } from './pages/main-action/shared/footer/footer.component';
import { HeaderBarComponent } from './pages/main-action/shared/header-bar/header-bar.component';
import { MessageComponent } from './sharings/components/message/message.component';
import { CenterPopupMessageComponent } from './sharings/components/center-popup-message/center-popup-message.component';
import { WaitingComponent } from './sharings/components/waiting/waiting.component';
import { LoginComponent } from './pages/login/login.component';


// storages
import { GeneralStorage } from './services/storages/storages';


// Services
import { SummaryService } from './services/summary.service';

// module
import { NgModule } from '@angular/core';

// services
import { SocialAuthService } from 'angularx-social-login';

// js
import 'hammerjs';


// config
import { socialAuthConfig } from './configs/social-auth-configuration';
import { DECLARATIONS } from './configs/declare-configuration';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    WaitingComponent,
    VerifyActionComponent,
    CenterPopupMessageComponent,
    MessageComponent,
    MainActionComponent,
    HeaderBarComponent,
    HeaderMainActionComponent,
    FooterComponent,
    LeftSideBarComponent,
    DashboardComponent,
    SummaryRevenueInMonthComponent,
    SummaryCostInMonthComponent,
    SummaryProfitInMonthComponent,
    SummaryNumberOfBookingsInMonthComponent,
    RecentBookingsComponent,
    RecentCostComponent,
    TopPerformingStoreComponent,
    SummaryNumberOfGuestComponent,
    SummaryNumberOfNewCustomerComponent,
    SummaryNumberOfNewStoreComponent,
    SummaryNumberOfAccountComponent,
    ProfileDetailsComponent,
    StatisticsComponent,
    SummaryRevenueByCategoryComponent,
    RecentNewStoreComponent,
    SummaryMarketingBySocialComponent,
    SummaryAdvertisingMediaComponent,
    SummaryNumberStoreTypeComponent,
    SummaryMarketingAtCountriesComponent,
    ManagementBookingComponent,
    ManagementAccountComponent,
    ManagementCostComponent,
    ManagementMarketingComponent,
    ManagementStoreComponent,
    ManagementRevenueComponent,
    BookingListComponent,
    BookingChartComponent,
    BookingDetailsComponent,
    ErrorNotFoundComponent
  ],
  imports: [
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
    MatStepperModule,
    BarChartModule,
    LineChartModule,
    PieChartModule,
    DonutChartModule,
    AngularFireModule.initializeApp(FIREBASECONFIG),
    AngularFireAuthModule,
    ROUTER
  ],
  providers: [
    GeneralStorage, AuthService, GeneralHelperService,
    { provide: SocialAuthService, useFactory: socialAuthConfig }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
