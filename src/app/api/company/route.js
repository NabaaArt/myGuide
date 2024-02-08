import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

// export async function GET(req) {
//   let companies = await prisma.company.findMany();
//   return Response.json(companies);
// }

export async function GET(req) {
  try {
    let companies = await prisma.company.findMany({
      include: {
        job: {
          select: {
            jobTitle: true,
            jobDescription: true,
          },
        },
      },
    });
    return {
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(companies),
    };
  } catch (error) {
    return {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        success: false,
        error: error.message,
      }),
    };
  }
}
export async function POST(req) {
  const body = await req.json();
  try {
    let company = await prisma.company.create({
      data: body,
    });
    return Response.json({
      success: true,
      company,
    });
  } catch (error) {
    return Response.json({
      success: false,
      error,
    });
  }
}
