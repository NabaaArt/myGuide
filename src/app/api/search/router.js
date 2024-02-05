//  import { Company, User ,job } from "@prisma/client";
// // import prisma from "../../prisma/client";
import { Company,User,job, } from "@prisma/client";

export default async function handler(
  req,
  res
) {
  if (req.method === "GET") {
    try {
      const { q: query } = req.query;

      if (typeof query !== "string") {
        throw new Error("Invalid request");
      }

      const jobs = await prisma.job.findMany({
        where: {
          OR: [
            {
                jobTitle: {
                contains: query,
                mode: "insensitive",
              },
            },
            {
                company: {
                name: {
                  contains: query,
                  mode: "insensitive",
                },
              },
            },
          ],
        },
        include: {
            company: true,
        },
      });

    
      await prisma.searchQuery.create({
        data: {
          query,
        },
      });

      res.status(200).json({ posts });
    } catch (error) {
      console.log(error);
      res.status(500).end();
    }
  }
}
