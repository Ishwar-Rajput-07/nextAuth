import User from "@/lib/User";
import connectDB from "@/lib/db";
import nextAuth, { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google"

const authOption: NextAuthOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SCERET as string
        })
    ],
    callbacks: {
        async signIn(data) {
            console.log(data)
            //DB Opration
            // db connect
            await connectDB()
            // Create new user
            const isExist = await User.findOne({ email: data.user.email })
            if (!isExist) {
                //db mdhe entry
                await User.create({
                    name:data.user.name,
                    email:data.user.email,
                    image:data.user.image,
                })
            }
            return true
        }
    }
}
const handler = nextAuth(authOption)

export { handler as GET, handler as POST }