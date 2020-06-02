export const selectToken = (state) => state.user.token;
export const selectMyHomepage = (state) => state.user.homepage;
export const selectUser = (state) => {
  console.log("state of user", state.user);
  return state.user;
};
