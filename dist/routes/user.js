"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRouter = void 0;
const trpc_1 = require("../trpc");
const zod_1 = require("zod");
exports.userRouter = (0, trpc_1.router)({
    signUp: trpc_1.publicProcedure
        .input(zod_1.z.object({
        username: zod_1.z.string(),
        password: zod_1.z.string(),
        bio: zod_1.z.string(),
        email: zod_1.z.string()
    }))
        .mutation((opts) => __awaiter(void 0, void 0, void 0, function* () {
        let username = opts.input.username;
        let password = opts.input.password;
        let bio = opts.input.bio;
        let email = opts.input.email;
        yield opts.ctx.prisma.User.create({
            data: {
                email,
                username,
                password,
                bio
            }
        });
    }))
});
