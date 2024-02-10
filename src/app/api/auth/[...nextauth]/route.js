import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const authOptions = {
  providers: [
    Credentials({
      // The name to display on the sign in form (e.g. "Sign in with...")
      name: "credentials",

      async authorize(credentials, req) {
        let { email, password } = credentials;
        const user = await prisma.user.findFirst({
          where: {
            userEmail: email,
            userPassword: password,
          },
        });
        if (user)
          return {
            email: JSON.stringify(user),
          };
        else return null;
      },
    }),
  ],

  callbacks: {
    async session({ session, token, user }) {
      // Send properties to the client, like an access_token and user id from a provider.
      session.accessToken = token.accessToken;
      session.user.id = token.id;

      return session;
    },
  },

  secret: process.env.NEXTAUTH_SECRET,

  pages: {
    signIn: "/login",
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
