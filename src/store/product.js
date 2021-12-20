let initialState = {
  products: [
    {
      categoryAssociation: "E",
      name: "Mobile Phone",
      description: "I phone pro max",
      price: "300$",
      inventoryCount: 50,
      img: "https://s.yimg.com/uu/api/res/1.2/K5V5FGS0ubWOtzxhF8m2Jg--~B/aD0xMDEzO3c9MTgwMDthcHBpZD15dGFjaHlvbg--/https://s.yimg.com/os/creatr-uploaded-images/2021-09/25c681c0-1cfe-11ec-b1ed-aff3c2fd2c38.cf.jpg",
      initial: 0,
    },
    {
      categoryAssociation: "E",
      name: "Tablet",
      description: "new tablet",
      price: "100$",
      inventoryCount: 10,
      img: "https://cdn.vox-cdn.com/thumbor/Y-o_TTsIOovds4gxZQC0b0Lq964=/0x170:2040x1190/fit-in/1200x600/cdn.vox-cdn.com/uploads/chorus_asset/file/22024674/dseifert_201107_4280_0002.0.jpg",
      initial: 0,
    },
    {
      categoryAssociation: "A",
      name: "Mobile Accessories",
      description: "Its for your mobile",
      price: "100$",
      inventoryCount: 10,
      img: "https://i1.wp.com/fanappic.com/wp-content/uploads/2010/12/iPhone-Accessories-for-Travelling.jpg?resize=405%2C306",
      initial: 0,
    },
  ],
};
const productRed = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case "Display":
      let product = state.products.filter((product) => {
        if (product.categoryAssociation == payload) {
          return product.categoryAssociation;
        } else {
          return null;
        }
      });
      return { ...state, product: product };

    case "ADDED":
      state.products.map((product) => {
        if (product.name == payload.name) {
          if (product.inventoryCount > 0) {
            product.inventoryCount = product.inventoryCount - 1;
          }
          return product;
        }
        return product;
      });

    default:
      return state;
  }
};

export default productRed;
