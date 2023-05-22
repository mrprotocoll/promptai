import { Nav, Provider } from '@components/Nav'
import '@styles/globals.css'

export const metadata = {
    title: "Promptai",
    description: "Discover and share AI prompts"
}

const RootLayout = ({children}) => {
    return (
        <html lang='en'>
            <body>
                <Provider>
                    <div className="main">
                        <div className="gradient"></div>
                    </div>
                    
                    <main className="app">
                        <Nav />
                        {children}
                    </main>
                </Provider>
            </body>
        </html>
    )
}

export default RootLayout
