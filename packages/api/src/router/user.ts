import { router, publicProcedure, privateProcedure } from '../trpc'
import { z } from 'zod'

export const userRouter = router({
  test: publicProcedure.query(() => {
    return { message: 'hello world' }
  }),
})
