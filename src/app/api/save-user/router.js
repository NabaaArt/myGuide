// pages/api/save-user.js

import { PrismaClient } from '@prisma/client';
import { hash } from 'bcryptjs';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  try {
    const {
      fullName,
      email,
      password,
      userType,
    } = req.body;

    // Hash the password before storing it in the database
    const hashedPassword = await hash(password, 10);

    // Save user data to the database using Prisma
    const savedUser = await prisma.user.create({
      data: {
        fullName,
        email,
        password: hashedPassword,
        userType,
      },
    });

    // Return the saved user data
    res.status(200).json({ message: 'User data saved successfully', user: savedUser });
  } catch (error) {
    console.error('Error saving user data:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  } finally {
    await prisma.$disconnect();
  }
}
