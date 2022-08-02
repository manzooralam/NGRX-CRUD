import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { User } from '../Models/user';
import { UserState } from '../Store/Reducers/user.reducers';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  users: User[] = []
  /* users->Reducers with app.module */
  // users$ = this.store.select('users');

  constructor(private store: Store<UserState>) { }

  ngOnInit(): void {
  }

}
