import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function GET(req) {
  let companies = await prisma.company.findMany();
  return Response.json(companies);
}

export async function POST(req) {
  const body = await req.json();
  try {
    let company = await prisma.company.create({
      data: body,
    });
    return Response.json({
      success: true,
      company,
    });
  } catch (error) {
    return Response.json({
      success: false,
      error,
    });
  }
}
