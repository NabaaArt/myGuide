// pages/api/save-company.js

const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  try {
    const {
      companyName,
      companyAddress,
      companyTitle,
      companyImage,
      companyEmail,
      companyNumber,
      categoryId,
    } = req.body;

    // Save company data to the database using Prisma
    const savedCompany = await prisma.company.create({
      data: {
        companyName,
        companyAddress,
        companyTitle,
        companyImage,
        companyEmail,
        companyNumber,
        categoryId: parseInt(categoryId, 10), // Assuming categoryId is a number
      },
      include: {
        category: true, // Include the associated category in the response
      },
    });

    // Return the saved company data
    res.status(200).json({ message: 'Company data saved successfully', company: savedCompany });
  } catch (error) {
    console.error('Error saving company data:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  } finally {
    await prisma.$disconnect();
  }
}
