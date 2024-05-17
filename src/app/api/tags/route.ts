import { getAuthSession } from "@/utilities/auth";
import prisma from "@/utilities/connect";
import { NextResponse } from "next/server";

//Get All Tags
export async function GET() {
  try {
    const tags = await prisma.tag.findMany();
    return new NextResponse(JSON.stringify(tags));
  } catch (err) {
    console.log(err);
    const errData = { message: "can't get request content!", status: 500 };
    return new NextResponse(JSON.stringify(errData));
  }
}
