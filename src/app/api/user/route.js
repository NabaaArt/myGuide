import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function GET(req) {
  let users = await prisma.user.findMany();
  return Response.json(users);
}

export async function POST(req) {
  const body = await req.json();
  try {
    let user = await prisma.user.create({
      data: body,
    });
    return Response.json({
      success: true,
      user,
    });
  } catch (error) {
    return Response.json({
      success: false,
      error,
    });
  }
}

export async function PATCH(req) {
  const { id } = req.params;
  const body = await req.json();
  try {
    let user = await prisma.user.update({
      where: { id: parseInt(id) },
      data: body,
    });
    return Response.json({
      success: true,
      user,
    });
  } catch (error) {
    return Response.json({
      success: false,
      error,
    });
  }
}
