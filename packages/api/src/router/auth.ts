import { privateProcedure, publicProcedure, router } from '../trpc'

export const authRouter = router({
  getSession: publicProcedure.query(({ ctx }) => {
    // return ctx.user;
  }),
  getSecretMessage: privateProcedure.query(() => {
    return 'you can see this secret message!'
  }),
})
