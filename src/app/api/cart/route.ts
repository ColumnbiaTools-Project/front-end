import { addOrUpdateToCart, getCart } from "@/services/firebase/product";
import { NextResponse } from "next/server";

export async function GET() {
  try{
    const cartData =  await getCart('pelican8118')
    return NextResponse.json({res:cartData})
  } catch (error) {
    console.error(error)
  }
}

export async function PUT(req:any) {
  try{
    const res =  await addOrUpdateToCart('pelican8118', req)
    return NextResponse.json({res})
  } catch (error) {
    console.error(error)
  }
}

