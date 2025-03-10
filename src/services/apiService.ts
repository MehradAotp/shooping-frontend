import {
  AuthenticationApi,
  BuyShoppingOutput,
  CreateUserOutputDto,
  LoginUserOutputDto,
  ShoppingApi,
  ShoppingOutput,
  UsersApi,
  CartApi,
  CartOutputDto,
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
const cartApi = new CartApi(
  undefined,
  import.meta.env.VITE_API_BASE_URL,
  axiosInstance
);

export interface CartItem {
  _id: string;
  product: ShoppingOutput;
  quantity: number;
}
const token = localStorage.getItem("token");
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

export const buyShopping = async (): Promise<BuyShoppingOutput> => {
  const response = await shoppingApi.buy();
  return response.data;
};

export const addToCart = async (productId: string): Promise<CartItem> => {
  try {
    const userId = token;
    if (!userId) throw new Error("کاربر لاگین نشده است");

    const response = await cartApi.addToCart({
      cartDto: { shoppingId: productId },
    });

    const item = response.data.items.find(
      (i) => i.shoppingId._id === productId
    );
    return {
      _id: item?.shoppingId._id || productId,
      product: item?.shoppingId as ShoppingOutput,
      quantity: item?.quantity || 1,
    };
  } catch {
    throw new Error("خطا در افزودن به سبد خرید");
  }
};

export const incrementCartItem = async (productId: string) => {
  const userId = token;
  if (!userId) throw new Error("کاربر لاگین نشده است");

  const response = await cartApi.incrementCartItem({
    cartDto: {
      shoppingId: productId,
    },
  });
  return response.data;
};

export const decrementCartItem = async (productId: string) => {
  const userId = token;
  if (!userId) throw new Error("کاربر لاگین نشده است");

  const response = await cartApi.decrementCartItem({
    cartDto: {
      shoppingId: productId,
    },
  });
  return response.data;
};

export const removeFromCart = async (productId: string) => {
  try {
    const userId = token;
    if (!userId) throw new Error("کاربر لاگین نشده است");

    const response = await cartApi.removeFromCart({
      cartDto: {
        shoppingId: productId,
      },
    });
    return response.data;
  } catch {
    throw new Error("خطا در حذف از سبد خرید");
  }
};

export const getCartItems = async (): Promise<CartOutputDto> => {
  try {
    const userId = token;
    if (!userId) throw new Error("کاربر لاگین نشده است");

    const response = await cartApi.getCart();
    return response.data;
  } catch {
    throw new Error("خطا در دریافت سبد خرید");
  }
};

export const clearCart = async () => {
  try {
    const userId = token;
    if (!userId) throw new Error("کاربر لاگین نشده است");

    const response = await cartApi.clearCart();
    return response.data;
  } catch {
    throw new Error("خطا در پاک کردن سبد خرید");
  }
};
