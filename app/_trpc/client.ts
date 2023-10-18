import { createTRPCReact } from "@trpc/react-query"
import {  appRouter } from "@trcp"

export const trpc = createTRPCReact<AppRouter>({})