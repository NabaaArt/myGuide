
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function GET(req) {
  try {
    let appliedUsers = await prisma.appliedUsers.findMany({
      include: {
        company: {
          select: {
            companyName: true,
            companyAddress: true,
          },
        },
      },
    });
    return Response.json(appliedUsers);
  } catch (error) {
    return Response.json({
      success: false,
      error,
    });
  }
}

export async function POST(req) {
  const body = await req.json();
  try {
    let appliedUsers = await prisma.appliedUsers.create({
      data: body,
    });
    return Response.json({
      success: true,
      appliedUsers,
    });
  } catch (error) {
    return Response.json({
      success: false,
      error,
    });
  }
}
