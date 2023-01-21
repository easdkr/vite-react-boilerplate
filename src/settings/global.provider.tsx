import { PropsWithChildren } from 'react'
import { QueryClientProvider } from 'react-query'
import { unstable_HistoryRouter as HistoryRouter } from 'react-router-dom'
import { history } from 'src/settings/history'
import { queryClient } from 'src/settings/query-client'

export default function GlobalProvider({ children }: PropsWithChildren) {
  return (
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    <HistoryRouter history={history}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </HistoryRouter>
  )
}
