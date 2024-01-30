import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function GET(req) {
  let jobCategories = await prisma.jobCategory.findMany();
  return Response.json(jobCategories);
}

export async function POST(req) {
  const body = await req.json();
  try {
    let jobCategory = await prisma.jobCategory.create({
      data: body,
    });
    return Response.json({
      success: true,
      jobCategory,
    });
  } catch (error) {
    return Response.json({
      success: false,
      error,
    });
  }
}
