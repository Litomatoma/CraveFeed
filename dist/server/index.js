"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const standalone_1 = require("@trpc/server/adapters/standalone");
const user_1 = require("./routes/user");
const client_1 = require("@prisma/client");
const trpc_1 = require("./trpc");
const cors_1 = __importDefault(require("cors"));
const prismaDummy = new client_1.PrismaClient();
const appRouter = (0, trpc_1.router)({
    user: user_1.userRouter
});
const server = (0, standalone_1.createHTTPServer)({
    router: appRouter,
    middleware: (0, cors_1.default)(),
    createContext(opts) {
        // WE WILL HAVE TO USE THIS FOR JWT VERIFICATION
        // let authHeader = opts.req.headers["authorization"]
        // if(authHeader)
        // {
        //     let token = authHeader.split(" ")[1]
        //     console.log(token)
        //     return new Promise<{prisma: {User: typeof prismaDummy.user} ; username : string;}>((resolve) =>
        //     {
        //         jwt.verify(token , "SECRET" , (err , data) =>
        //         {
        //             if(data)
        //             {   
        //                 resolve({ username : data as string , prisma : {User : prismaDummy.user}})
        //             }
        //         })
        //     }) 
        // }
        // else
        // {
        //     return {
        //         prisma : {User: prismaDummy.user}
        //     }
        // }
        return {
            prisma: { User: prismaDummy.user }
        };
        // Delete this return once you un comment jwt.verify promisify function
    }
});
server.listen(3000);
