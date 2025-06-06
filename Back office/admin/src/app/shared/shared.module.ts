import {CommonModule, DecimalPipe} from "@angular/common";
import { NgModule } from "@angular/core";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { RouterModule } from "@angular/router";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { TranslateModule } from "@ngx-translate/core";

import { NavService } from "./services/nav.service";
import { LayoutService } from "./services/layout.service";

import { BookmarkComponent } from "./components/bookmark/bookmark.component";
import { BreadcrumbComponent } from "./components/breadcrumb/breadcrumb.component";
import { FeatherIconsComponent } from "./components/feather-icons/feather-icons.component";
import { FooterComponent } from "./components/footer/footer.component";
import { HeaderComponent } from "./components/header/header.component";
import { ContentComponent } from "./components/layout/content/content.component";
import { FullComponent } from "./components/layout/full/full.component";
import { LoaderComponent } from "./components/loader/loader.component";
import { SidebarComponent } from "./components/sidebar/sidebar.component";
import { DisableKeyPressDirective } from "./directives/disable-key-press.directive";
import { OnlyAlphabetsDirective } from "./directives/only-alphabets.directive";
import { OnlyNumbersDirective } from "./directives/only-numbers.directive";
import { ShowOptionsDirective } from "./directives/show-options.directive";
import {NgSelectModule} from "@ng-select/ng-select";
import {NgbdSortableHeader} from "./directives/NgbdSortableHeader";
import { ContentAuthComponent } from './components/layout/content-auth/content-auth.component';
import { AuthComponent } from './components/layout/auth/auth.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    ContentComponent,
    BreadcrumbComponent,
    BookmarkComponent,
    FeatherIconsComponent,
    FullComponent,
    ShowOptionsDirective,
    DisableKeyPressDirective,
    OnlyAlphabetsDirective,
    OnlyNumbersDirective,
    LoaderComponent,
    NgbdSortableHeader,
    ContentAuthComponent,
    AuthComponent
  ],
    imports: [CommonModule, RouterModule, FormsModule, NgbModule, TranslateModule, NgSelectModule, ReactiveFormsModule],
  providers: [
  NavService,DecimalPipe,
    LayoutService],
  exports: [LoaderComponent, FeatherIconsComponent, DisableKeyPressDirective, OnlyAlphabetsDirective, OnlyNumbersDirective, TranslateModule,NgbdSortableHeader],
})
export class SharedModule {}
