import {HTTP_INTERCEPTORS, HttpClient, HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {SharedModule} from './shared/shared.module';
import {AuthComponent} from './components/auth/auth.component';
import {AdminComponent} from './components/admin/admin.component';
import {LoginComponent} from './components/auth/login/login.component';
import {ForgetPasswordComponent} from './components/auth/forget-password/forget-password.component';
import {RegisterComponent} from './components/auth/register/register.component';
import {ShopComponent} from './components/admin/shop/shop.component';
import {NgSelectModule} from "@ng-select/ng-select";
import {TableService} from "./_services/table.service";
import {ToastrModule} from "ngx-toastr";
import {NgxSpinnerModule} from "ngx-spinner";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {JwtInterceptorService} from "./_interceptor/jwt-interceptor.service";
import {ActivateAccountComponent} from "./components/auth/activate-acount/activate-acount.component";
import {PartnerComponent} from './components/admin/partner/partner.component';
import {NgxPermissionsModule} from "ngx-permissions";
import {NgxPaginationModule} from "ngx-pagination";
import { BoutiqueComponent } from './components/admin/boutique/boutique.component';
import {CalendarCommonModule} from "angular-calendar";

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, "./assets/i18n/", ".json");
}
@NgModule({
    declarations: [
        AppComponent,
        AuthComponent,
        AdminComponent,
        LoginComponent,
        ForgetPasswordComponent,
        RegisterComponent,
        ShopComponent,
        ActivateAccountComponent,
        PartnerComponent,
        BoutiqueComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        NgxSpinnerModule.forRoot({type: 'ball-scale-multiple'}),
        SharedModule,
        AppRoutingModule,
        HttpClientModule,
        NgxPaginationModule,
        NgxPermissionsModule.forRoot(),
        NgbModule,
        NgSelectModule,
        ToastrModule.forRoot(), // ToastrModule added
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient]
            },
        }),
        CalendarCommonModule,
    ],
  providers: [TableService,
    {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptorService, multi: true},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
