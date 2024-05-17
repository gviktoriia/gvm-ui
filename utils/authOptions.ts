import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GithubProvider from "next-auth/providers/github";
import { login } from '../lib/auth';
import { LOGIN_ROUTE } from "./routesUtil";

export const authOptions: NextAuthOptions = {
  pages: {
    signIn: LOGIN_ROUTE, 
  },
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID as string,
      clientSecret: process.env.GITHUB_SECRET_ID as string,
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {label: "Email", type: "text"},
        password: {label: "Password", type: "password"},
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password)
          return null as any;

        try{
          const admin = await login(credentials.email, credentials.password);
          return admin;
        } catch (error) {
          console.log(error);
          return null;
        }
      }
    })
  ],
  secret: process.env.NEXTAUTH_SECRET as string,
};
