import prisma from "@/utilities/connect";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const categories = await prisma.category.findMany();
    const sendData = { categories: { ...categories }, status: 200 };
    console.log(sendData);
    return new NextResponse(JSON.stringify(categories));
  } catch (err) {
    console.log(err);
    const errData = { message: "can't get request content!", status: 500 };
    return new NextResponse(JSON.stringify(errData));
  }
}
