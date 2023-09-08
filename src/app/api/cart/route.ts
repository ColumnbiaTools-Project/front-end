import { getCart } from "@/services/firebase";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const cartData = await getCart('pelican8118')
  return NextResponse.json({cartData})
}

/*export async function POST(request: Request) {
}*/

/*
export async function PUT(request: Request) {
}*/
