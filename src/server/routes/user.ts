import { publicProcedure , router} from "../trpc";
import { z } from "zod"
import jwt, { VerifyErrors, JwtPayload } from 'jsonwebtoken';

export const userRouter = router({
    signUp: publicProcedure
        .input(z.object({
            username : z.string() ,
            email: z.string() ,
            password : z.string()
        }))
        .mutation(async (opts) =>
        {
            let username = opts.input.username;
            let password = opts.input.password;
            let email = opts.input.email;

            const newUser = await opts.ctx.prisma.User.create({
                data : {
                    email ,
                    username ,
                    password ,
                }
            })
            return { id: newUser.id };
        }) ,
    signedUp: publicProcedure
        .input(z.object({
            id : z.number() ,
            bio : z.string() ,
            profilepicture : z.string()
        }))
        .mutation(async (opts) =>
        {
            let id = opts.input.id;
            let bio = opts.input.bio;
            let profilepicture = opts.input.profilepicture;

            await opts.ctx.prisma.User.update({
                where: {
                    id: id,
                },
                data: {
                    bio: bio,
                    profilepicture: profilepicture
                },
            })
        }) ,
    follow: publicProcedure
        .input(z.object({
            followerId: z.number(),
            followingId: z.number(),
        }))
        .mutation(async (opts) => {
            const { followerId, followingId } = opts.input;

            // Check if the users exist
            const [follower, following] = await Promise.all([
                opts.ctx.prisma.User.findUnique({ where: { id: followerId } }),
                opts.ctx.prisma.User.findUnique({ where: { id: followingId } }),
            ]);

            if (!follower || !following) {
                throw new Error('Invalid user IDs.');
            }

            // Check if the relationship already exists
            const existingRelation = await opts.ctx.prisma.Follower.findFirst({
                where: {
                    followerId,
                    followingId,
                },
            });

            if (existingRelation) {
                throw new Error('Already following this user.');
            }
            await opts.ctx.prisma.Follower.create({
                data: {
                    followerId,
                    followingId,
                },
            });

            return { success: true }; // To test the code remove later
        }),

    unfollow: publicProcedure
        .input(z.object({
            followerId: z.number(),
            followingId: z.number(),
        }))
        .mutation(async (opts) => {
            const { followerId, followingId } = opts.input;

            const [follower, following] = await Promise.all([
                opts.ctx.prisma.User.findUnique({ where: { id: followerId } }),
                opts.ctx.prisma.User.findUnique({ where: { id: followingId } }),
            ]);

            if (!follower || !following) {
                throw new Error('Invalid user IDs.');
            }
            const existingRelation = await opts.ctx.prisma.Follower.findFirst({
                where: {
                    followerId,
                    followingId,
                },
            });

            if (!existingRelation) {
                throw new Error('Not following this user.');
            }
            await opts.ctx.prisma.Follower.delete({
                where: {
                    id: existingRelation.id,
                },
            });
            return { success: true }; // To test the code remove later
        }),
})