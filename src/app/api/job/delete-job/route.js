import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();


export async function DELETE(req) {
    const { id } = req.params;
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
  