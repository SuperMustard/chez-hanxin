import prisma from "@/utilities/connect";
import { NextResponse } from "next/server";

export async function GET(req: { url: string | URL }) {
  const { searchParams } = new URL(req.url);
  const page = parseInt(searchParams.get("page") || "1");
  const cat = searchParams.get("cat") || "";

  const query = {
    take: parseInt(process.env.POST_PER_PAGE || "4"),
    skip: parseInt(process.env.POST_PER_PAGE || "4") * (page - 1),
    where: {
      ...(cat && { catSlug: cat }),
    },
  };

  try {
    const [posts, count] = await prisma.$transaction([
      prisma.post.findMany(query),
      prisma.post.count({ where: query.where }),
    ]);
    return new NextResponse(JSON.stringify({ posts, count }));
  } catch (err) {
    console.log(err);
    const errData = { message: "can't get request content!", status: 500 };
    return new NextResponse(JSON.stringify(errData));
  }
}
