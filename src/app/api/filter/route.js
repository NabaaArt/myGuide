import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function GET(req) {
  let filters = await prisma.filter.findMany();
  return Response.json(filters);
}

export async function POST(req) {
  const body = await req.json();
  try {
    let filter = await prisma.filter.create({
      data: body,
    });
    return Response.json({
      success: true,
      filter,
    });
  } catch (error) {
    return Response.json({
      success: false,
      error,
    });
  }
}
