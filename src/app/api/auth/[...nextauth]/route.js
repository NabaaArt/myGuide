import nextAuth from "next-auth";
import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";

const handler = nextAuth({
  providers: [
    GoogleProvider({
      clientId:'',
      clientSecret:'',
    }),
  ],
  async session ({session}){

  },

  async signIn ({profile}){
    
  }
});
