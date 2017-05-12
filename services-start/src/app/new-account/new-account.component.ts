import { Component, EventEmitter, Output } from '@angular/core';
import { LoggingService } from '../logging.service';
import { AccountsService } from '../accounts.service'
@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  providers: [LoggingService, AccountsService]
})
export class NewAccountComponent {
  
  constructor(private loggingService: LoggingService,private accountsService: AccountsService){

  }

  onCreateAccount(accountName: string, accountStatus: string) {
    this.loggingService.logStatusChange(accountStatus);
    this.accountsService.addAccount(accountName,accountStatus)
  }
}
