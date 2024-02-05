// prisma/jobs.js
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const getJobById = async (jobId) => {
    try {
        console.log('Fetching company by ID:', companyId);
     return prisma.job.findUnique({
    where: {
      id: jobId,
    },
    include: {
      company: true,
      // Add other related entities as needed
    }})} catch (error) {
        console.error('Error in Prisma query function:', error);
        return null;
      }
    };