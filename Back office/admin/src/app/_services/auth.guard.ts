import {CanActivateFn, Router} from "@angular/router";
import {inject} from "@angular/core";
import {TokenService} from "./token.service";

export const authGuard: CanActivateFn = () => {
  const tokenService = inject(TokenService);
  const router = inject(Router);
  if (tokenService.isTokenNotValid()) {

    router.navigate(['auth/login']);
    return false;
  }
  return true;
};