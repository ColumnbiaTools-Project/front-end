import { NextRequest, NextResponse } from "next/server";

export async function POST(NextRequest: NextRequest) {
  const { orderId, paymentKey, amount } = await NextRequest.json();
  const secertKey = process.env.NEXT_PUBLIC_TOSS_SECRET_KEY;
  const basicToken = Buffer.from(`${secertKey}:`).toString("base64");
  console.log(basicToken);

  try {
    const res = await fetch(
      "https://api.tosspayments.com/v1/payments/confirm",
      {
        method: "post",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Basic ${basicToken}`,
        },
        body: JSON.stringify({
          amount: amount,
          orderId: orderId,
          paymentKey: paymentKey,
        }),
      },
    );
    console.log("RES", res);

    if (res && res.status === 200) {
      console.log("res", res);
      return NextResponse.json(res);
    } else {
      console.log("error", res);
      if (res && res.status === 400) {
        return NextResponse.json({ error: "Bad Request" }, { status: 400 });
      }
      if (res && res.status === 404) {
        return NextResponse.json({ error: "Not Found" }, { status: 404 });
      }
    }
  } catch (err: any) {
    console.error("err", err);
    return {
      redirect: {
        destination: `/fail?code=${err.code}&message=${err.message}`,
        permanent: false,
      },
    };
  }
}
