import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ContentComponent } from "./shared/components/layout/content/content.component";
import { Activate, content, contentAuth} from "./shared/routes/routes";
import {ContentAuthComponent} from "./shared/components/layout/content-auth/content-auth.component";
import {AuthComponent} from "./shared/components/layout/auth/auth.component";

const routes: Routes = [
  {
    path: "",
    redirectTo: "auth/login",
    pathMatch: "full",
  },
  {
    path: "",
    component: ContentComponent,
    children: content,
  },
  {
    path: "auth",
    component: ContentAuthComponent,
    children: contentAuth,
  },{
    path: "auth",
    component: AuthComponent,
    children: Activate,
  },
  {
    path: "**",
    redirectTo: "",
  },
];

@NgModule({
  imports: [
    [
      RouterModule.forRoot(routes, {
        anchorScrolling: "enabled",
        scrollPositionRestoration: "enabled",
      }),
    ],
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
