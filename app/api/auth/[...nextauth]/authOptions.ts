import CredentialsProvider from "next-auth/providers/credentials";
import { compare } from "bcrypt";
import { db } from "lib/db";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { UserCredentials } from "@/utils/types/payloads";
import { NextApiRequest } from "next";

const authOptions = {
  adapter: PrismaAdapter(prisma),
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/",
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      async authorize(credentials, request) {},
    }),
  ],
};

export default authOptions;
