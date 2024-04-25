import NextAuth from "next-auth";
import Github from "next-auth/providers/github";
import LinkedIn from "next-auth/providers/linkedin";
import Google from "next-auth/providers/google";

export const authOptions = {
  providers: [
    Google({
      clientId: process.env.GOOGLE_ID as string,
      clientSecret: process.env.GOOGLE_SECRET as string,
    }),
    Github({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
  ],
};
