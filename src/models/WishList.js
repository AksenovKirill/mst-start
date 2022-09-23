import { types } from "mobx-react-state";

export const WishListItem = types
  .model({
    name: types.string,
    price: types.number,
    image: "",
  })
  .actions((self) => ({
    changeName(newName) {
      self.name = newName;
    },
    changePrice(newPrice) {
      self.price = newPrice;
    },
    changeImage(newImage) {
      self.image = newImage;
    },
  }));

export const WishList = types
  .model({
    items: types.array(WishListItem),
  })
  .actions((self) => ({
    add(item) {
      self.items.push(item);
    },
  }));
