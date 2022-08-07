import { createAction, props } from "@ngrx/store";
import { User } from "src/app/Models/user";

export const getUser = createAction('[User] Get user')
export const addUser = createAction('[User] Add user',/*  props<{ user: User }>() */
  (user: User) => user
)
export const addUserSuccess = createAction('[User] Add user success', props<{ user: User }>())
