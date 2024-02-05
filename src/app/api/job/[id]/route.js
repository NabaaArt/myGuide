import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function GET(req, res) {
  let data = await prisma.job.findUnique({
    where: {
      id: parseInt(res.params.id),
    },
    include: {
      company: {
        select: {
          companyName: true,
          companyAddress: true,
        },
      },
    },
  });

  return Response.json(data);
}
