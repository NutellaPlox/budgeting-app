import { TRPCProvider as Provider } from 'app/trpc'

export function TRPCProvider({ children }: { children: React.ReactNode }) {
  return <Provider>{children}</Provider>
}
