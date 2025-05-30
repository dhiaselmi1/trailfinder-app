import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AppStateService {
    private loginStateSource = new BehaviorSubject<boolean>(false);
    loginState = this.loginStateSource.asObservable();

    constructor() { }

    changeLoginState(state: boolean) {
        this.loginStateSource.next(state);
    }
}