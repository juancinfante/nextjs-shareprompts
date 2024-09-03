import '@styles/globals.css'

import Nav from '@components/Nav'
import Provider from '@components/Provider'



export const metadata = {
    title: "Promptopia title",
    openGraph: {
      title: 'Title OG',
      description: 'Description OG',
      images: [
        {
          url: 'https://1.bp.blogspot.com/-AGV0I68gN6A/Wc9tkwMDBrI/AAAAAAAADgQ/UdFKfZ4b8U0flPcIcTThLD1WmsJwO0X2ACLcBGAs/s1600/hombre3.jpg', // Ruta a la imagen
          width: 800, // Ancho de la imagen
          height: 600, // Alto de la imagen
          alt: 'Descripción de la imagen OG', // Descripción alternativa
        },
      ],
    },
  }
const RootLayout = ({ children }) => {
    return (
        <html lang="en">
            <body>
                <Provider>
                    <div className='main'>
                        <div className='gradient' />
                    </div>
                    <main className='app'>
                        <Nav />
                        {children}
                    </main>
                </Provider>
            </body>
        </html>
    )
}

export default RootLayout
