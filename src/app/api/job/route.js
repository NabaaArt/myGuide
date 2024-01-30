import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function GET(req) {
  let jobs = await prisma.job.findMany();
  return Response.json(jobs);
}

export async function POST(req) {
  const body = await req.json();
  try {
    let job = await prisma.job.create({
      data: body,
    });
    return Response.json({
      success: true,
      job,
    });
  } catch (error) {
    return Response.json({
      success: false,
      error,
    });
  }
}
