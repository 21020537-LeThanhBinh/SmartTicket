import { Providers } from '@/lib/providers'
import { Nav } from './components/Nav/Nav'
import './styles/globals.css'

export default function RootLayout(props: React.PropsWithChildren) {
  return (
    <Providers>
      <html lang="en">
        <body>
          <section className='h-full'>
            <Nav />

            {props.children}
          </section>
        </body>
      </html>
    </Providers>
  )
}
