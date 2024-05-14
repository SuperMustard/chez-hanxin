import { getAuthSession } from "@/utilities/auth";
import prisma from "@/utilities/connect";
import { Prisma } from "@prisma/client";
import { NextResponse } from "next/server";

//Get All Posts
export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const page = parseInt(searchParams.get("page") || "1");
  const cat = searchParams.get("cat") || "";
  const orderBy: Prisma.PostOrderByWithRelationInput[] = [
    {
      createdAt: "desc",
    },
  ];
  const query = {
    take: parseInt(process.env.POST_PER_PAGE || "4"),
    skip: parseInt(process.env.POST_PER_PAGE || "4") * (page - 1),
    where: {
      ...(cat && { catSlug: cat }),
    },
    orderBy,
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

type tag = {
  name: string;
  label: string;
};
//Create a Post
export async function POST(req: Request) {
  const session = await getAuthSession();
  if (!session) {
    const errData = { message: "not allowed!", status: 401 };
    return new NextResponse(JSON.stringify(errData));
  }

  try {
    const body = await req.json();
    const tags = body["tag"].map((tag: tag) => {
      let temp = {
        create: { name: tag.name, label: tag.label },
        where: { name: tag.name },
      };

      return temp;
    });

    const post = await prisma.post.create({
      data: {
        ...body,
        userEmail: session.user?.email,
        tag: {
          connectOrCreate: tags,
        },
      },
    });
    return new NextResponse(JSON.stringify(post));
  } catch (err) {
    console.log(err);
    const errData = { message: "can't get request content!", status: 500 };
    return new NextResponse(JSON.stringify(errData));
  }
}
