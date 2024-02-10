import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function GET(req, res) {
  let data = await prisma.user.findUnique({
    where: {
      id: parseInt(res.params.id),
    },
  });

  return Response.json(data);
}

// export async function GET(req, res) {
//   try {
//     const userId = parseInt(req.params.id);
//     const user = await prisma.user.findUnique({
//       where: {
//         id: userId,
//       },
//     });

//     if (!user) {
//       return res.status(404).json({ error: "User not found" });
//     }

//     return res.json(user);
//   } catch (error) {
//     console.error("Error retrieving user:", error);
//     return res.status(500).json({ error: "Internal server error" });
//   }
// }
