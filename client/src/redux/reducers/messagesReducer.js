export const messagesReducer = (state = [], action) => {

  switch (action.type) {
    
    case 'SET-MESSAGES':
      state.push({
        name: action.name,
        id: action.id,
        message: action.message,
      })
      break;

    case 'INIT-MESSAGES-FROM-SERVER':
      state=action.messages
      break;
  }
  return state
}

export const messagesActionCreator = (name, message, id) => {
  return {
    type: 'SET-MESSAGES',
    name: name,
    id: id,
    message: message

  }

}