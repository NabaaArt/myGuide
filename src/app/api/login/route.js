// pages/api/login.js

import { PrismaClient } from '@prisma/client';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const prisma = new PrismaClient();

  try {
    const { email, password } = req.body;

    // Check if the user with the provided email and password exists
    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (!user || user.password !== password) {
      // User not found or incorrect password
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Return the authenticated user data (you might want to exclude the password)
    res.status(200).json({ message: 'Login successful', user });
  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  } finally {
    await prisma.$disconnect();
  }
}
