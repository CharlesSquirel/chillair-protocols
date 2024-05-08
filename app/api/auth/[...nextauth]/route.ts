import { handlers } from "auth";
export const { GET, POST } = handlers;

// import { NextAuthOptions } from "next-auth";
// import CredentialsProvider from "next-auth/providers/credentials";
// import bcrypt from "bcrypt";
// import { prisma } from "lib/db";
// import NextAuth from "next-auth";

// const authOptions: NextAuthOptions = {
//   session: {
//     strategy: "jwt",
//   },
//   callbacks: {
//     jwt: async ({ token, user }) => {
//       if (user) {
//         token.id = user.id;
//         token.email = user.email;
//       }

//       return token;
//     },
//   },
//   secret: process.env.AUTH_SECRET,
//   debug: process.env.NODE_ENV === "development",
//   providers: [
//     CredentialsProvider({
//       name: "credentials",
//       credentials: {
//         email: { placeholder: "Email", type: "text" },
//         password: { placeholder: "Hasło", type: "password" },
//       },
//       async authorize(credentials, req) {
//         console.log("zacyznam");
//         if (!credentials.email || !credentials.password) {
//           console.log("error1");
//           throw new Error("Proszę wpisać poprawny email i hasło");
//         }
//         const user = await prisma.user.findFirst({
//           where: {
//             email: credentials.email,
//           },
//         });

//         if (!user) {
//           console.log("error2");
//           throw new Error("Nie znaleziono użytkownika");
//         }

//         if (!user.password) {
//           console.log("error3");
//           throw new Error("Hasło użytkownika jest puste");
//         }

//         if (
//           typeof credentials.password !== "string" ||
//           typeof user.password !== "string"
//         ) {
//           console.log("error4");
//           throw new Error("Hasło użytkownika nie jest poprawnym typem");
//         }

//         const passwordMatch = await bcrypt.compare(
//           credentials.password,
//           user.password,
//         );

//         if (!passwordMatch) {
//           console.log("error5");
//           throw new Error("Nieprawidłowe hasło");
//         }

//         return user;
//       },
//     }),
//   ],
// };

// const handler = NextAuth(authOptions);
// export { handler as GET, handler as POST };
