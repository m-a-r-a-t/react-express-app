export const nameReducer = (state = null, action) => {
  if (action.type === 'RENAME') {
    state = action.name
  }
  return state
}



export const nameActionCreator = (value) => {

  return {
    type: 'RENAME',
    name: value
  }

}