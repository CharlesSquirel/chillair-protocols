import CredentialsProvider from "next-auth/providers/credentials";
import { compare } from "bcrypt";
import { prisma } from "lib/db";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { UserLoginDTO, UserDTO } from "@/utils/types/user";
import { NextAuthConfig } from "next-auth";

const authOptions: NextAuthConfig = {
  adapter: PrismaAdapter(prisma),
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/dashboard/user/add",
  },
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: {},
        password: {},
        userSignature: {},
        firstName: {},
        lastName: {},
      },
      async authorize(credentials: UserLoginDTO, request) {
        try {
          if (!credentials.email || !credentials.password) {
            throw new Error("Lack of required fields");
          }
          const user = await prisma.user.findUnique({
            where: {
              email: credentials.email,
            },
          });
          if (!user || !user?.password) {
            throw new Error("No user found");
          }
        } catch (error: any) {
          const errorMessage = error.response.data.message;
          throw new Error(errorMessage);
        }
      },
    }),
  ],
};

export default authOptions;
