export default function Footer() {

   const footerButtons = [
      { title: 'Inicio', function: '', },
      { title: 'Tienda', function: '', },
      { title: 'Envío', function: '', },
      { title: 'Contacto', function: '', }
   ]
   return (
      <footer className="h-96 w-full bg-gradient-to-b from-yellow1 to-[#987135]">
         <div>
            {footerButtons.map((button) => (
               <p>{button.title}</p>
            )
            )}
         </div>
      </footer>
   )
}