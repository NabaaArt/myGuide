import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function GET(req) {
  let questions = await prisma.questions.findMany();
  return Response.json(questions);
}

export async function POST(req) {
  const body = await req.json();
  try {
    let question = await prisma.questions.create({
      data: body,
    });
    return Response.json({
      success: true,
      question,
    });
  } catch (error) {
    return Response.json({
      success: false,
      error,
    });
  }
}

// import { PrismaClient } from "@prisma/client";
// const prisma = new PrismaClient();

// export async function GET(req, res) {
//   try {
//     const questions = await prisma.question.findMany();
//     res.json(questions);
//   } catch (error) {
//     console.error('Error in GET:', error);
//     res.status(500).json({
//       success: false,
//       error: 'Internal Server Error',
//     });
//   }
// }

// export async function POST(req, res) {
//   try {
//     const body = await req.json();
//     const question = await prisma.question.create({
//       data: body,
//     });
//     res.status(201).json({
//       success: true,
//       question,
//     });
//   } catch (error) {
//     console.error('Error in POST:', error);
//     res.status(500).json({
//       success: false,
//       error: 'Internal Server Error',
//     });
//   }
// }

// import { PrismaClient } from "@prisma/client";

// const prisma = new PrismaClient();

// export async function GET(req, res) {
//   try {
//     let questions = await prisma.question.findMany();
//     res.status(200).json(questions);
//   } catch (error) {
//     console.error('Error in GET:', error);
//     res.status(500).json({
//       success: false,
//       error: 'Internal Server Error',
//     });
//   }
// }

// export async function POST(req, res) {
//   const body = await req.json();
//   try {
//     let question = await prisma.question.create({
//       data: body,
//     });
//     res.status(200).json({
//       success: true,
//       question,
//     });
//   } catch (error) {
//     console.error('Error in POST:', error);
//     res.status(500).json({
//       success: false,
//       error: 'Internal Server Error',
//     });
//   }
// }
