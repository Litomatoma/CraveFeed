import { createTRPCProxyClient, httpBatchLink } from '@trpc/client';
import type { AppRouter } from '../server';

const trpc = createTRPCProxyClient<AppRouter>({
  links: [
    httpBatchLink({
      url: 'http://localhost:3000',
      async headers()
      {
        return {
          Authorization: "1234435434" 
        }
      }
    }),
  ], 
});

async function context() {
  const response = await trpc.user.signUp.mutate({
    username : "Vibhor" ,
    email : "vibhorphalke100@gmail.com",
    password : "okok" ,
    bio : "goibibo"
  })
  console.log(response)
}

// main(); 
// signUp();  
context();