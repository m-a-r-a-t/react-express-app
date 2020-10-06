export const authReducer = (state = false, action) => {
  if (action.type === 'IS-AUTH')
    state = true

  return state
}


