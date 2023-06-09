import './globals.css'
import Link from 'next/link'


export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      
      
      <body>
      <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1"
          crossOrigin="anonymous"
        />
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
          <a class="navbar-brand nav-txt" href="#">Zenith</a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item active">
                <Link class="nav-link nav-txt" href='/'>Home</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link nav-txt" href='/create-nft'>Sell Digital Assets</Link>
              </li>
              
              <li class="nav-item">
                <Link class="nav-link nav-txt" href='/my-asset'>My Digital Assets</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link nav-txt" href='/dashboard'>Dashboard</Link>
              </li>
            </ul>
            <form class="form-inline my-2 my-lg-0">

              <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Connect Wallet</button>
            </form>
          </div>
        </nav>
        <main>
        {children}
        </main>
        <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW"
        crossOrigin="anonymous"
      />
      
      </body>
    </html>
  )
}

