import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";
import { prisma } from "lib/db";
import { NextAuthConfig } from "next-auth";
import { PrismaAdapter } from "@next-auth/prisma-adapter";

const authOptions: NextAuthConfig = {
  adapter: PrismaAdapter(prisma),
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/",
  },
  secret: process.env.AUTH_SECRET,
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: {
          placeholder: "Email",
          label: "Wpisz swój email",
          type: "text",
        },
        firstName: {
          placeholder: "Imię",
          label: "Wpisz swoje imię",
          type: "text",
        },
        lastName: {
          placeholder: "Nazwisko",
          label: "Wpisz swoje nazwisko",
          type: "text",
        },
        userSignature: {
          placeholder: "Nr uprawnień",
          label: "Wpisz swój numer uprawnień",
          type: "text",
        },
        password: {
          placeholder: "Hasło",
          label: "Wpisz hasło",
          type: "password",
        },
      },
      async authorize(credentials, req) {
        if (!credentials.email || !credentials.password) {
          throw new Error("Proszę wpisać poprawny email i hasło");
        }
        const user = await prisma.user.findFirst({
          where: {
            email: credentials.email,
          },
        });

        if (!user) {
          throw new Error("Nie znaleziono użytkownika");
        }

        if (!user.password) {
          throw new Error("Hasło użytkownika jest puste");
        }

        if (
          typeof credentials.password !== "string" ||
          typeof user.password !== "string"
        ) {
          throw new Error("Hasło użytkownika nie jest poprawnym typem");
        }

        const passwordMatch = await bcrypt.compare(
          credentials.password,
          user.password,
        );

        if (!passwordMatch) {
          throw new Error("Nieprawidłowe hasło");
        }

        return user;
      },
    }),
  ],
};

export default authOptions;
