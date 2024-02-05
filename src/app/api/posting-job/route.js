 
import { PrismaClient } from '@prisma/client';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const prisma = new PrismaClient();

  try {
    const { title, descriptions } = req.body;

    // Save the job data to the database using Prisma
    const job = await prisma.job.create({
      data: {
        title,
        descriptions,
      },
    });

    res.status(201).json({ message: 'Job posted successfully', job });
  } catch (error) {
    console.error('Error posting job:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  } finally {
    await prisma.$disconnect();
  }
}