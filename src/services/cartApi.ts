import axios from "axios";

export const ApiHttp = axios.create({
  baseURL: "http://localhost:3000/api"
});

export async function getCartList() {
  try {
    const res = await ApiHttp.get("/cart")
    return res.data;
  } catch (error) {
    console.error(error);
  }
}
export async function updateCartList({cartData} : {cartData: CartProduct}) {
  try {
    const res = await ApiHttp.put("/cart",{
      cartData
    })
    return res.data;
  } catch (error) {
    console.error(error);
  }
}