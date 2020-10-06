export const roomReducer = (state = null, action) => {

  if (action.type === 'SET-ROOM')
    state = action.room
    console.log(state)
    
  return state
}

export const roomActionCreator = (room) => {

  return {
    type: 'SET-ROOM',
    room:room
  }
}