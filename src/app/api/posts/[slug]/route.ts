import prisma from "@/utilities/connect";
import { NextResponse } from "next/server";

type searchParams = {
  slug: string;
};

export async function GET(
  req: { url: string | URL },
  { params }: { params: searchParams }
) {
  const { slug } = params;
  try {
    const post = await prisma.post.findUnique({
      where: { slug },
      include: { user: true },
    });
    return new NextResponse(JSON.stringify(post));
  } catch (err) {
    console.log(err);
    const errData = { message: "can't get request content!", status: 500 };
    return new NextResponse(JSON.stringify(errData));
  }
}
