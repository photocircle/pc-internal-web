import {
  AuthActions, IAuthState,
} from "./auth.types"

const initialState: IAuthState = {
  pending: false,
  user: null,
  appConfig: {
    internalIdsEnabled: false,
  },
}

export default (state = initialState, action: AuthActions) => {
  switch (action.type) {

    default:
      return state
  }
}
