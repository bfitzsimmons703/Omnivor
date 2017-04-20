export default (state = '', action) => {
  switch(action.type){
    case 'SET_CURRENT_USER_NAME':
      return action.payload;
    case 'WIPE_CURRENT_USER_NAME':
      return action.payload;
    default:
      return state;
  }
}