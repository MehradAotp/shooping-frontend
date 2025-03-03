import { ShoppingApi, ShoppingOutput } from "./../api/todo/api";

const shoppingApi = new ShoppingApi(
  undefined,
  import.meta.env.VITE_API_BASE_URL
);

export const getShoppings = async (): Promise<ShoppingOutput[]> => {
  const response = await shoppingApi.findAll();
  return response.data;
};

export const getShopping = async (id: string): Promise<ShoppingOutput> => {
  const response = await shoppingApi.findOne({ id });
  return response.data;
};

export const createShopping = async (
  name: string,
  price: number,
  image: string
): Promise<ShoppingOutput> => {
  const response = await shoppingApi.create({
    createShopping: {
      name,
      price,
      image,
    },
  });
  return response.data;
};

export const updateShopping = async (
  id: string,
  name: string,
  price: number,
  image: string
): Promise<ShoppingOutput> => {
  const response = await shoppingApi.update({
    id,
    updateShopping: {
      name,
      price,
      image,
    },
  });
  return response.data;
};

export const deleteShopping = async (id: string): Promise<void> => {
  await shoppingApi._delete({ id });
};
