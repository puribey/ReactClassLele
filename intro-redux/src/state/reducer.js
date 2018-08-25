import { handleActions } from "redux-actions";
import * as actions from "./actions";

const INITIAL_STATE = {
  selectedProducts: [],
  selectedProduct: null
};

const MoverProductos = handleActions(
  {
    [actions.ADD_PRODUCT]: (state, action) => {
      const { product } = action.payload;
      const { selectedProducts } = state;
      const newArrayOfSelectedProducts = [...selectedProducts, product];
      return {
        selectedProducts: newArrayOfSelectedProducts,
        selectedProduct: Object.assign({}, product)
      };
    },
    [actions.REMOVE_PRODUCT]: (state, action) => {
      const { product } = action.payload;
      const { selectedProducts } = state;
      const index = selectedProducts.indexOf(product);
      let newArrayOfSelectedProducts = [...selectedProducts];
      if (index >= 0) {
        newArrayOfSelectedProducts = [
          ...selectedProducts.slice(0, index),
          ...selectedProducts.slice(index + 1)
        ];
      }

      return {
        selectedProducts: newArrayOfSelectedProducts,
        selectedProduct: product
      };
    }
  },
  INITIAL_STATE
);

export default MoverProductos;
