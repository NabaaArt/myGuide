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

export async function DELETE(req, res) {
  const { id } = res.params;
  try {
    await prisma.job.delete({
      where: { id: parseInt(id) },
    });
    return Response.json({
      success: true,
      message: `job with ID ${id} deleted successfully.`,
    });
  } catch (error) {
    return Response.json({
      success: false,
      error: error.message,
    });
  }
}
