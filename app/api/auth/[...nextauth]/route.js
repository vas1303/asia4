import { PrismaClient } from "@prisma/client";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { compare } from "bcrypt";

const handler = NextAuth({
    pages: {
        signIn: '/Login'
    },
    session: {
        strategy: 'jwt'
    },
    providers: [CredentialsProvider({
        credentials: {
            email: {},
            password: {}
        },
        async authorize(credentials) {
            const prisma = new PrismaClient()
            const user = await prisma.users.findFirst({
                where: {
                    email: credentials.email
                }
            })
            const correctPassword = await compare(credentials.password, user.password)


            if (correctPassword) {
                return {
                    id: user.id,
                    email: user.email,
                    role: user.role
                }
            }
            return null
        }
    })],
    callbacks: {
        async jwt({ token, user }) {
            token.role = user.role
            token.id = user.id

            return token
        }
    }
})

export { handler as GET, handler as POST }