import NextAuth, { AuthOptions } from "next-auth";
import OneLoginProvider from "next-auth/providers/onelogin";

export const authOptions: AuthOptions = {
  pages: {
    signIn: "/auth/signin",
    signOut: "/auth/signout",
    error: "/auth/error",
  },
  providers: [
    OneLoginProvider({
      clientId: process.env.ONELOGIN_CLIENT_ID,
      clientSecret: process.env.ONELOGIN_CLIENT_SECRET,
      issuer: process.env.ONELOGIN_ISSUER,
    }),
  ],
};

export default NextAuth(authOptions);
