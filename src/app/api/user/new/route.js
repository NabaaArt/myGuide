import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();


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