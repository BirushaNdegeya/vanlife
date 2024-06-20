export default function Footer(): JSX.Element {
   const date = new Date();
   const year: number = date.getFullYear();
   return (
      <footer className="bg-blue-500 text-center">
         <p>&copy; {year} - #VANLIFE</p>
      </footer>
   );
}