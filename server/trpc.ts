import { initTRPC } from '@trpc/server';
import { PrismaClient } from '@prisma/client'; 

const prisma = new PrismaClient()
/**
 * Initialization of tRPC backend
 * Should be done only once per backend!
 */
const t = initTRPC.create();
 
/**
 * Export reusable router and procedure helpers
 * that can be used throughout the router
 */
export const router = t.router;
export const publicProcedure = t.procedure;
export const middlewares = t.middleware;