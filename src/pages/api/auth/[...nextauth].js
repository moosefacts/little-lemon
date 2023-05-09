import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google";
import { FacebookAuthProvider } from 'firebase/auth';

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GoogleProvider ({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
      }),
    FacebookAuthProvider({
        clientId: process.env.FACEBOOK_ID,
        clientSecret: process.env.FACEBOOK_SECRET,
      }),
    // ...add more providers here
  ],
  session: {
    strategy: 'jwt',
   },
}

export default NextAuth(authOptions)