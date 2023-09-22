import axios from "axios";

export const ApiHttp = axios.create({
  baseURL: 'https://api.tosspayments.com/v1/payments',
  headers: {
    Authorization: `Basic ${Buffer.from(
      `${process.env.NEXT_PUBLIC_TOSS_SECRET_KEY}:`
    ).toString("base64")}`
  }
});


export async function getOrderList(orderId: string) {
  try {
    const res = await ApiHttp.get(`/orders/${orderId}`);
    return res.data;
  } catch (e) {
    console.error(e);
  }
}

