import { getAuthSession } from "@/utilities/auth";
import prisma from "@/utilities/connect";
import { NextResponse } from "next/server";

//Get All Tags
export async function GET() {
  try {
    const tags = await prisma.category.findMany();
    return new NextResponse(JSON.stringify(tags));
  } catch (err) {
    console.log(err);
    const errData = { message: "can't get request content!", status: 500 };
    return new NextResponse(JSON.stringify(errData));
  }
}

//Create a new tag
export async function POST(req: Request) {
  const session = await getAuthSession();
  if (!session) {
    const errData = { message: "not allowed!", status: 401 };
    return new NextResponse(JSON.stringify(errData));
  }

  try {
    const body = await req.json();
    const post = await prisma.tag.create({
      data: { ...body, userEmail: session.user?.email },
    });
    return new NextResponse(JSON.stringify(post));
  } catch (err) {
    console.log(err);
    const errData = { message: "can't get request content!", status: 500 };
    return new NextResponse(JSON.stringify(errData));
  }
}
