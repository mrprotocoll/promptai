import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import { connectToDB } from "@helpers/database"
import User from "@models/user";

const handler = NextAuth({
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
    // ...add more providers here
  ],

  async session ({ session }) {

  },

  async signIn ({ profile }) {
    try {
      await connectToDB();
      // check if the user already exist
      const userExists = await User.findOne({
        email: profile.email
      })
      // create user if user doesnot already exist
      if(!userExists) {
        await User.create({
          email: profile.email,
          username: profile.name.replace(" ","").toLowerCase()
        })
      }
    } catch (error) {
      
    }
  }
})

export { handler as GET, handler as POST }