import CredentialsProvider from "next-auth/providers/credentials";
import { compare } from "bcrypt";
import { UserCredentials } from "@/utils/types/payloads";
import { NextApiRequest } from "next";
