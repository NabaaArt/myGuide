import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function GET(req, res) {
  let data = await prisma.company.findUnique({
    where: {
      id: parseInt(res.params.id),
    },
  });

  return Response.json(data);
}
