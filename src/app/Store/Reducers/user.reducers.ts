import { createReducer, on } from '@ngrx/store';
import { User } from 'src/app/Models/user';
import {
  addUser,
  getUser
} from '../Actions/user.action';

/* B/c-> reducer is immutable */
export interface UserState {
  Users: ReadonlyArray<User>;
}

const initialState: ReadonlyArray<User> = [];

export const userReducer = createReducer(
  initialState,
  on(addUser, (state) => [...mockUsers()])
);





/* Mocks users */

function mockUsers(): User[] {
  const user = new User(
    'Manzoor',
    13,
    new Date('26 Apr, 2019 05:30:00')
  );
  user.id = 1;

  const user1 = new User(
    'Manzoor 2',
    13,
    new Date('26 Apr, 2019 05:30:00')
  );
  user1.id = 2;

  const user2 = new User(
    'Manzoor 3',
    13,
    new Date('26 Apr, 2019 05:30:00')
  );
  user2.id = 3;

  const Users = [user, user1, user2];
  return Users;
}
