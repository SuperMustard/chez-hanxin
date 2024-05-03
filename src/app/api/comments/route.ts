import { getAuthSession } from "@/utilities/auth";
import prisma from "@/utilities/connect";
import { NextResponse } from "next/server";

// Get All Comments
export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const postSlug = searchParams.get("postSlug");

  try {
    const comments = await prisma.comment.findMany({
      where: {
        ...(postSlug && { postSlug }),
      },
      include: { user: true },
    });
    return new NextResponse(JSON.stringify(comments));
  } catch (err) {
    console.log(err);
    const errData = { message: "can't get request content!", status: 500 };
    return new NextResponse(JSON.stringify(errData));
  }
}

//Create a new comment
export async function POST(req: Request) {
  const session = await getAuthSession();
  if (!session) {
    const errData = { message: "not allowed!", status: 401 };
    return new NextResponse(JSON.stringify(errData));
  }

  try {
    const body = await req.json();
    const comments = await prisma.comment.create({
      data: { ...body, userEmail: session.user?.email },
    });
    return new NextResponse(JSON.stringify(comments));
  } catch (err) {
    console.log(err);
    const errData = { message: "can't get request content!", status: 500 };
    return new NextResponse(JSON.stringify(errData));
  }
}
