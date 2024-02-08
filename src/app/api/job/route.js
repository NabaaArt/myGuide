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

export async function POST(req) {
  const body = await req.json();
  try {
    let job = await prisma.job.create({
      data: body,
    });
    return Response.json({
      success: true,
      job,
    });
  } catch (error) {
    return Response.json({
      success: false,
      error,
    });
  }
}

async function getCompanyDataFromJob(jobId) {
  try {
    const jobWithCompany = await prisma.job.findUnique({
      where: {
        id: jobId,
      },
      include: {
        company: true,
      },
    });

    if (!jobWithCompany) {
      console.log(`Job with ID ${jobId} not found.`);
      return null;
    }

    const companyData = jobWithCompany.company;
    console.log("Company Data:", companyData);
    return companyData;
  } catch (error) {
    console.error("Error fetching company data:", error);
    return null;
  }
}
