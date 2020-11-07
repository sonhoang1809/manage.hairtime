
import { GeneralHelperService } from './services/general-helper.service';
import { AuthService } from './services/auth-service/auth.service';

// Component
import { AppComponent } from './app.component';


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
import { IMPORTS } from './configs/import-configuration';

@NgModule({
  declarations: DECLARATIONS,
  imports: IMPORTS,
  providers: [
    GeneralStorage, AuthService, GeneralHelperService,
    { provide: SocialAuthService, useFactory: socialAuthConfig }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
