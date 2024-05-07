import prisma from "@/utilities/connect";
import { Prisma } from "@prisma/client";
import { NextResponse } from "next/server";

//Get All Posts
export async function GET() {
  const orderBy: Prisma.PostOrderByWithRelationInput[] = [
    {
      views: "desc",
    },
  ];
  const query = {
    take: parseInt(process.env.POST_PER_PAGE || "5"),
    include: { user: true },
    orderBy,
  };

  try {
    const posts = await prisma.post.findMany(query);
    return new NextResponse(JSON.stringify(posts));
  } catch (err) {
    console.log(err);
    const errData = { message: "can't get request content!", status: 500 };
    return new NextResponse(JSON.stringify(errData));
  }
}
