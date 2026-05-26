import { Component } from '@angular/core';
import { AccountService } from '@app/_services';
import { Account, Role } from '@app/_models';

@Component({ selector: 'app-root', templateUrl: 'app.component.html', standalone: false })
export class AppComponent {
    Role = Role;
    account?: Account | null;

    constructor(private accountService: AccountService) {
        this.accountService.account.subscribe(x => this.account = x);
    }

    Logout() {
        this.accountService.Logout();
    }
}
