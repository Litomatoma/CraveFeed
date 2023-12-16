import { publicProcedure , router} from "../trpc";
import { z } from "zod"
import jwt, { VerifyErrors, JwtPayload } from 'jsonwebtoken';

export const userRouter = router({
    signUp: publicProcedure
        .input(z.object({
            username : z.string() ,
            password : z.string() ,
            bio : z.string() ,
            email: z.string()
        }))
        .mutation(async (opts) =>
        {
            let username = opts.input.username;
            let password = opts.input.password;
            let bio = opts.input.bio;
            let email = opts.input.email

            await opts.ctx.prisma.User.create({
                data : {
                    email ,
                    username ,
                    password ,
                    bio
                }
            })
        })

})