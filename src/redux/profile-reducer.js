const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

let initialState = {
  postData: [
    { id: 1, message: "Love 2 code!", likesCount: 1020 },
    { id: 2, message: "First post!", likesCount: 34 },
    { id: 3, message: "Lets go surfing!", likesCount: 130 },
  ],
  newPostText: "Alexxxx",
}

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: 4,
        message: state.newPostText,
        likesCount: 0,
      };
      state.postData.push(newPost);
      state.newPostText = "";
      return state;
    case UPDATE_NEW_POST_TEXT:
      state.newPostText = action.newText;
      return state;
    default:
      return state;
  }

  /*  */
};
export let addPostActionCreator = () => ({ type: "ADD-POST" });

export let updateNewPostTextActionCreator = (text) => ({
  type: "UPDATE-NEW-POST-TEXT",
  newText: text,
});
export default profileReducer;
//we delete this cause we put in reducer only nessesary piece of state