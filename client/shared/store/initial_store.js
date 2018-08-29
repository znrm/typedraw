// const initialState = {
//   session: {},
//   users: {
//     userId: { email: '' },
//   },

//   documents: {
//     0: {
//       owner: {
//         id: { email: '' },
//       },
//       collaborators: [{
//         id: { email: '' },
//       }],
//       textLayer: {
//         text: '',
//       },
//       imageLayer: {
//         id: {  },
//         xPos: Number,
//         yPos: Number,
//         data: Array
//       }
//     },
//   },
//   errors: {}
// };

const initialState = {
  session: {},
  users: {
    1: { id: 1, email: "testuser@test.com" }
  },
  documents: {
    0: {
      owner: 1,
      collaborators: [],
      textLayer: '',
      imageLayer: []
    }
  }
};


export default initialState;
