import { fetchRequestHandler } from "@trpc/server/adapters/fetch";
import { appRouter } from "@/server";
import { PrismaClient } from "@prisma/client";

let prisma = new PrismaClient

const createContext = () => ({
    prisma: {
        Follower : prisma.follower,
        User: prisma.user,
        Post: prisma.post,
        Like: prisma.like,
        Comment: prisma.comment,
    }
  });


const handler = (req: Request) =>
    fetchRequestHandler({
        endpoint: "api/trpc",
        req,
        router: appRouter,
        createContext,
    })

export { handler as GET , handler as POST}