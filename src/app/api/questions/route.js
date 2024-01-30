import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function GET(req) {
  let questions = await prisma.question.findMany();
  return Response.json(questions);
}

export async function POST(req) {
  const body = await req.json();
  try {
    let question = await prisma.question.create({
      data: body,
    });
    return Response.json({
      success: true,
      question,
    });
  } catch (error) {
    return Response.json({
      success: false,
      error,
    });
  }
}
