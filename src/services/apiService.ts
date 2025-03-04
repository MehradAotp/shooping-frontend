import {
  AuthenticationApi,
  BuyShoppingOutput,
  CreateUserOutputDto,
  LoginUserOutputDto,
  ShoppingApi,
  ShoppingOutput,
  UsersApi,
} from "./../api/todo/api";
import axiosInstance from "./axiosInstance";

const shoppingApi = new ShoppingApi(
  undefined,
  import.meta.env.VITE_API_BASE_URL,
  axiosInstance
);
const authApi = new AuthenticationApi(
  undefined,
  import.meta.env.VITE_API_BASE_URL,
  axiosInstance
);
const usersApi = new UsersApi(
  undefined,
  import.meta.env.VITE_API_BASE_URL,
  axiosInstance
);

export const signup = async (
  username: string,
  password: string
): Promise<CreateUserOutputDto> => {
  try {
    const response = await usersApi.register({
      createUserInputDto: { username, password },
    });
    return response.data;
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw error;
    } else {
      throw new Error(String(error));
    }
  }
};

export const login = async (
  username: string,
  password: string
): Promise<LoginUserOutputDto> => {
  try {
    const response = await authApi.login({
      loginInputDto: { username, password },
    });
    if (response.data.access_token) {
      localStorage.setItem("token", response.data.access_token);
    }

    return response.data;
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw error;
    } else {
      throw new Error(String(error));
    }
  }
};

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

export const buyShopping = async (): Promise<BuyShoppingOutput> => {
  const response = await shoppingApi.buy();
  return response.data;
};
