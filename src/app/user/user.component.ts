import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormControlName } from '@angular/forms';
import { Store } from '@ngrx/store';
import { User } from '../Models/user';
import { addUser, getUser } from '../Store/Actions/user.action';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  userForm = this.formBuilder.group({
    name: new FormControl(''),
    age: new FormControl(),
    date: new FormControl(),
  })
  user: User[] = [];
  newUser: User = new User()
  constructor(private formBuilder: FormBuilder,
    private store: Store) { }

  ngOnInit(): void {
    this.store.dispatch(getUser())
  }
  addNewUser() {
    this.userForm.get('date')?.setValue(new Date())
    console.log(this.userForm.value);
    this.newUser = new User()
    // this.store.dispatch(addUser({ user: this.newUser }))
    this.store.dispatch(addUser(this.newUser))
  }
}
