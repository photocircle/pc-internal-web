import { Action } from "redux"
import { ActionTypes } from "../actionTypes"
import { AppConfig, Profile, } from "../../generated/web_app_grpc_pb.js"

export interface IAuthState {
    pending: boolean;
    user: Profile.AsObject | null;
    appConfig: AppConfig.AsObject | null;
}

// #region ACTION TYPES

export interface IInitAuth extends Action<string> {
    type: typeof ActionTypes.INIT_AUTH;
    keepShareCode: boolean;
}

// #region ACTION TYPES

export type AuthActions =
    | IInitAuth
