let initialState = {
  catogries: [
    {
      normalizedName: "E",
      displaynName: "electronics",
      description: "where you can find all elecrtonic products",
      display: false,
    },
    {
      normalizedName: "A",
      displaynName: "acceccories",
      description: "where you can find all acceccories products",
      display: false,
    },
  ],
  activeCatogry: ""
};

export default (state = initialState, action) => {
  let { type, payload } = action;

  switch (type) {
    case "Display":
      console.log(payload);
      // let active = payload;
      let catogries = state.catogries.map((catogry) => {
        if (catogry.normalizedName == payload) {
          return {
            normalizedName:catogry.normalizedName,
            displaynName: catogry.displaynName,
            description: catogry.description,
          };
        }
        return catogry;
      });

      return { ...state, activeCatogry: payload ,catogries:catogries};

    default:
      return state;
  }
};

// export const display = (name) => {
//   return {
//     type: "Display",
//     payload: name,
//   };
// };
