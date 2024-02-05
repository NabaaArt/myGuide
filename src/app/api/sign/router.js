import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export  async function POST(req, res) {
    if (req.method !== 'POST') {
      return res.status(405).end();
    }
  
    const { username, email, password } = req.body;
  
    try {
      const hashedPassword = await bcrypt.hash(password, 10);
  
      const user = await prisma.user.create({
        data: {
          username,
          email,
          password: hashedPassword,
        },
      });
  
      res.status(201).json({ user });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }