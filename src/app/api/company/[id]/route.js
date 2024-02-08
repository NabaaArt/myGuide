import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function GET(req, res) {
    let data = await prisma.company.findUnique({
      where: {
        id: parseInt(res.params.id),
      },
      include: {
        job: {
          select: {
            jobTitle: true,
            jobDescription: true,
          },
        },
      },
    });
  
    return Response.json(data);
  }

