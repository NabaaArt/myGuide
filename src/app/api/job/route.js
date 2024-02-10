import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function GET(req) {
  try {
    let jobs = await prisma.job.findMany({
      include: {
        company: {
          select: {
            companyName: true,
            companyAddress: true,
          },
        },
      },
    });

   
    return Response.json(jobs);
  } catch (error) {
    return Response.json({
      success: false,
      error,
    });
  }
}

 