export const roomReducer = (state = null, action) => {
  if (action.type === 'SET-ROOM')
    state = action.room
    
  return state
}

export const roomActionCreator = (room) => ({ type: 'SET-ROOM',   room:room })