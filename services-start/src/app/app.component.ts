import { Component, OnInit } from '@angular/core';
import { AccountsService } from './accounts.service'
import { LoggingService } from './logging.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [LoggingService, AccountsService]
})
export class AppComponent implements OnInit {
  accounts: { name: string, status: string }[] = []
  constructor(private accountsService: AccountsService) {
  }
  ngOnInit() {
    this.accounts = this.accountsService.accounts;
  }

}
