import { NextAuthConfig } from "next-auth";
import credentials from "next-auth/providers/credentials";
import bcrypt from "bcrypt";
import { prisma } from "lib/db";

const authOptions: NextAuthConfig = {
  pages: {
    signIn: "/",
  },
  session: {
    strategy: "jwt",
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const isOnDashboard = nextUrl.pathname.startsWith("/dashboard");
      if (isOnDashboard) {
        if (isLoggedIn) return true;
        return false;
      } else if (isLoggedIn) {
        return Response.redirect(new URL("/dashboard", nextUrl));
      }
      return true;
    },
  },
  secret: process.env.AUTH_SECRET,
  debug: process.env.NODE_ENV === "development",
  providers: [
    credentials({
      name: "credentials",
      credentials: {
        email: { placeholder: "Email", type: "text" },
        password: { placeholder: "Hasło", type: "password" },
      },
      async authorize(credentials, req) {
        console.log("zacyznam");
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
};

export default authOptions;
