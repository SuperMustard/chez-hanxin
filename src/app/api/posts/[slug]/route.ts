import prisma from "@/utilities/connect";
import { NextResponse } from "next/server";

type searchParams = {
  slug: string;
};

export async function GET(req: Request, { params }: { params: searchParams }) {
  const { slug } = params;
  try {
    const post = await prisma.post.update({
      where: { slug },
      data: { views: { increment: 1 } },
      include: { user: true, tag: true },
    });
    return new NextResponse(JSON.stringify(post));
  } catch (err) {
    console.log(err);
    const errData = { message: "can't get request content!", status: 500 };
    return new NextResponse(JSON.stringify(errData));
  }
}
