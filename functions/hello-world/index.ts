import { serve } from "https://deno.land/std@0.131.0/http/server.ts"

interface reqPayload {
  name: string;
}

console.log('hello-world started');

serve(async (req: Request) => {
  return "HELLO WORLD"
}, { port: 9005 })
