import NextAuth, { AuthOptions, getServerSession } from "next-auth";
import Github from "next-auth/providers/github";
import Google from "next-auth/providers/google";
import { PrismaAdapter } from "@auth/prisma-adapter";
import prisma from "./connect";
import { Adapter } from "next-auth/adapters";

export const authOptions: AuthOptions = {
  adapter: PrismaAdapter(prisma) as Adapter,
  providers: [
    Google({
      profile(profile) {
        return {
          id: profile.sub,
          name: profile.given_name,
          email: profile.email,
          image: profile.picture,
          role: "User",
        };
      },
      clientId: process.env.GOOGLE_ID as string,
      clientSecret: process.env.GOOGLE_SECRET as string,
    }),
    Github({
      profile(profile) {
        return {
          id: profile.id,
          name: profile.login,
          email: profile.email,
          image: profile.avatar_url,
          role: "User",
        };
      },
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
  ],
  callbacks: {
    session({ session, user }) {
      session.user.role = user.role;
      return session;
    },
  },
};

export const getAuthSession = () => getServerSession(authOptions);
