import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ClipboardModule } from 'ngx-clipboard';
import { TooltipModule } from 'ng2-tooltip-directive';
import { FormsModule } from '@angular/forms';
import { NgxScrollTopModule } from 'ngx-scrolltop';
import { NgxPaginationModule } from 'ngx-pagination';
import { LightboxModule } from 'ngx-lightbox';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeDemoOneComponent } from './components/pages/home-demo-one/home-demo-one.component';
import { HomeDemoTwoComponent } from './components/pages/home-demo-two/home-demo-two.component';
import { HomeDemoThreeComponent } from './components/pages/home-demo-three/home-demo-three.component';
import { JoinNowComponent } from './components/common/join-now/join-now.component';
import { WhyChooseUsComponent } from './components/common/why-choose-us/why-choose-us.component';
import { BlogComponent } from './components/common/blog/blog.component';
import { HomeoneBannerComponent } from './components/pages/home-demo-one/homeone-banner/homeone-banner.component';
import { FeaturedDealsComponent } from './components/common/featured-deals/featured-deals.component';
import { DealsComponent } from './components/common/deals/deals.component';
import { PopularStoreComponent } from './components/common/popular-store/popular-store.component';
import { PopularDealsComponent } from './components/common/popular-deals/popular-deals.component';
import { PartnerStyleOneComponent } from './components/common/partner-style-one/partner-style-one.component';
import { FeaturedDiscountDealsComponent } from './components/common/featured-discount-deals/featured-discount-deals.component';
import { FooterComponent } from './components/common/footer/footer.component';
import { TodaysHotDealsComponent } from './components/common/todays-hot-deals/todays-hot-deals.component';
import { NavbarStyleOneComponent } from './components/common/navbar-style-one/navbar-style-one.component';
import { TopHeaderComponent } from './components/common/top-header/top-header.component';
import { NotFoundComponent } from './components/common/not-found/not-found.component';
import { ContactPageComponent } from './components/pages/contact-page/contact-page.component';
import { NavbarStyleTwoComponent } from './components/common/navbar-style-two/navbar-style-two.component';
import { NavbarStyleThreeComponent } from './components/common/navbar-style-three/navbar-style-three.component';
import { HometwoBannerComponent } from './components/pages/home-demo-two/hometwo-banner/hometwo-banner.component';
import { BestDealsComponent } from './components/common/best-deals/best-deals.component';
import { DealsWithTabsComponent } from './components/common/deals-with-tabs/deals-with-tabs.component';
import { HomethreeBannerComponent } from './components/pages/home-demo-three/homethree-banner/homethree-banner.component';
import { PartnerStyleTwoComponent } from './components/common/partner-style-two/partner-style-two.component';
import { CategoriesWithDealsComponent } from './components/common/categories-with-deals/categories-with-deals.component';
import { PropertyTypeDealsComponent } from './components/common/property-type-deals/property-type-deals.component';
import { FaqPageComponent } from './components/pages/faq-page/faq-page.component';
import { CustomerServicePageComponent } from './components/pages/customer-service-page/customer-service-page.component';
import { LocationsPageComponent } from './components/pages/locations-page/locations-page.component';
import { CategoriesPageComponent } from './components/pages/categories-page/categories-page.component';
import { CouponsPageComponent } from './components/pages/coupons-page/coupons-page.component';
import { StoresPageComponent } from './components/pages/stores-page/stores-page.component';
import { StoresDetailsPageComponent } from './components/pages/stores-details-page/stores-details-page.component';
import { DealsPageComponent } from './components/pages/deals-page/deals-page.component';
import { HowItWorksPageComponent } from './components/pages/how-it-works-page/how-it-works-page.component';
import { ComingSoonPageComponent } from './components/pages/coming-soon-page/coming-soon-page.component';
import { ProfileAuthenticationPageComponent } from './components/pages/profile-authentication-page/profile-authentication-page.component';
import { BlogGridPageComponent } from './components/pages/blog-grid-page/blog-grid-page.component';
import { BlogRightSidebarPageComponent } from './components/pages/blog-right-sidebar-page/blog-right-sidebar-page.component';
import { BlogDetailsPageComponent } from './components/pages/blog-details-page/blog-details-page.component';
import { GalleryPageComponent } from './components/pages/gallery-page/gallery-page.component';
import { DealsDetailsPageComponent } from './components/pages/deals-details-page/deals-details-page.component';
import { CartPageComponent } from './components/pages/cart-page/cart-page.component';
import { CheckoutPageComponent } from './components/pages/checkout-page/checkout-page.component';
import { ProductsListPageComponent } from './components/pages/products-list-page/products-list-page.component';
import { ProductsDetailsPageComponent } from './components/pages/products-details-page/products-details-page.component';
import { RelatedProductsComponent } from './components/pages/products-details-page/related-products/related-products.component';
import { MyDashboardComponent } from './components/my-dashboard/my-dashboard.component';
import { DashboardProfileComponent } from './components/my-dashboard/dashboard-profile/dashboard-profile.component';
import { DashboardStoreComponent } from './components/my-dashboard/dashboard-store/dashboard-store.component';
import { DashboardCouponsComponent } from './components/my-dashboard/dashboard-coupons/dashboard-coupons.component';
import { DashboardAddCouponComponent } from './components/my-dashboard/dashboard-add-coupon/dashboard-add-coupon.component';
import { DashboardDealsComponent } from './components/my-dashboard/dashboard-deals/dashboard-deals.component';
import { DashboardAddDealComponent } from './components/my-dashboard/dashboard-add-deal/dashboard-add-deal.component';
import { DashboardVouchersComponent } from './components/my-dashboard/dashboard-vouchers/dashboard-vouchers.component';
import { DashboardAgentsComponent } from './components/my-dashboard/dashboard-agents/dashboard-agents.component';
import { DashboardAddAgentComponent } from './components/my-dashboard/dashboard-add-agent/dashboard-add-agent.component';
import {HttpClientModule} from "@angular/common/http";
import {NgForOf} from "@angular/common";
import { BoutiqueComponent } from './components/boutique/boutique.component';
import { QuickViewComponent } from './components/boutique/quick-view/quick-view.component';
import { SuccesComponent } from './components/pages/succes/succes.component';
import { ErrorComponent } from './components/pages/error/error.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeDemoOneComponent,
    HomeDemoTwoComponent,
    HomeDemoThreeComponent,
    JoinNowComponent,
    WhyChooseUsComponent,
    BlogComponent,
    HomeoneBannerComponent,
    FeaturedDealsComponent,
    DealsComponent,
    PopularStoreComponent,
    PopularDealsComponent,
    PartnerStyleOneComponent,
    FeaturedDiscountDealsComponent,
    FooterComponent,
    TodaysHotDealsComponent,
    NavbarStyleOneComponent,
    TopHeaderComponent,
    NotFoundComponent,
    ContactPageComponent,
    NavbarStyleTwoComponent,
    NavbarStyleThreeComponent,
    HometwoBannerComponent,
    BestDealsComponent,
    DealsWithTabsComponent,
    HomethreeBannerComponent,
    PartnerStyleTwoComponent,
    CategoriesWithDealsComponent,
    PropertyTypeDealsComponent,
    FaqPageComponent,
    CustomerServicePageComponent,
    LocationsPageComponent,
    CategoriesPageComponent,
    CouponsPageComponent,
    StoresPageComponent,
    StoresDetailsPageComponent,
    DealsPageComponent,
    HowItWorksPageComponent,
    ComingSoonPageComponent,
    ProfileAuthenticationPageComponent,
    BlogGridPageComponent,
    BlogRightSidebarPageComponent,
    BlogDetailsPageComponent,
    GalleryPageComponent,
    DealsDetailsPageComponent,
    CartPageComponent,
    CheckoutPageComponent,
    ProductsListPageComponent,
    ProductsDetailsPageComponent,
    RelatedProductsComponent,
    MyDashboardComponent,
    DashboardProfileComponent,
    DashboardStoreComponent,
    DashboardCouponsComponent,
    DashboardAddCouponComponent,
    DashboardDealsComponent,
    DashboardAddDealComponent,
    DashboardVouchersComponent,
    DashboardAgentsComponent,
    DashboardAddAgentComponent,
    BoutiqueComponent,
    QuickViewComponent,
    SuccesComponent,
    ErrorComponent,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        CarouselModule,
        BrowserAnimationsModule,
        ClipboardModule,
        TooltipModule,
        FormsModule,
        NgxScrollTopModule,
        NgxPaginationModule,
        LightboxModule,
        HttpClientModule,
        NgForOf,
        NgForOf,

    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
