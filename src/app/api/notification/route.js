import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function GET(req) {
  let notifications = await prisma.notification.findMany();
  return Response.json(notifications);
}

export async function POST(req) {
  const body = await req.json();
  try {
    let notification = await prisma.notification.create({
      data: body,
    });
    return Response.json({
      success: true,
      notification,
    });
  } catch (error) {
    return Response.json({
      success: false,
      error,
    });
  }
}
