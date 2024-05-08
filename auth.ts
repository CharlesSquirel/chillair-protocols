import { prisma } from "lib/db";
import NextAuth from "next-auth";
import bcrypt from "bcryptjs";
import credentials from "next-auth/providers/credentials";
import { PrismaAdapter } from "@auth/prisma-adapter";

export const { handlers, signIn, signOut, auth } = NextAuth({
  session: {
    strategy: "jwt",
  },
  callbacks: {
    jwt: async ({ token, user }) => {
      if (user) {
        token.id = user.id;
        token.email = user.email;
      }

      return token;
    },
  },
  secret: process.env.AUTH_SECRET,
  pages: {
    signIn: "/",
    signOut: "/",
  },
  adapter: PrismaAdapter(prisma),
  providers: [
    credentials({
      credentials: {
        email: {},
        password: {},
      },
      authorize: async (credentials) => {
        if (!credentials.email || !credentials.password) {
          console.log("error1");
          throw new Error("Proszę wpisać poprawny email i hasło");
        }
        const user = await prisma.user.findFirst({
          where: {
            email: credentials.email,
          },
        });

        if (!user) {
          console.log("error2");
          throw new Error("Nie znaleziono użytkownika");
        }

        if (!user.password) {
          console.log("error3");
          throw new Error("Hasło użytkownika jest puste");
        }

        if (
          typeof credentials.password !== "string" ||
          typeof user.password !== "string"
        ) {
          console.log("error4");
          throw new Error("Hasło użytkownika nie jest poprawnym typem");
        }

        const passwordMatch = await bcrypt.compare(
          credentials.password,
          user.password,
        );

        if (!passwordMatch) {
          console.log("error5");
          throw new Error("Nieprawidłowe hasło");
        }

        return user;
      },
    }),
  ],
});
