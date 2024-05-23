import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})


export class ContactComponent {
  userName: string = '';
  userAge: string = '';
  userEmail: string = '';
  userPassword: string = '';

  userNameStat: string = '0px';
  userAgeStat: string = '0px';
  userEmailStat: string = '0px';
  userPasswordStat: string = '0px';

  updateStat(value: string, statProperty: 'userNameStat' | 'userAgeStat' | 'userEmailStat' | 'userPasswordStat') {
    this[statProperty] = value ? '-30px' : '0px';
  }
}
