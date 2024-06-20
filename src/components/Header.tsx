import { Link, NavLink } from 'react-router-dom';


export default function Header(): JSX.Element {
   return (
      <header className='bg-blue-500 text-white flex items-center justify-between px-32 py-4'>
         <Link
            className='text-3xl font-bold'
            to={'/'}
         >
            #VANLIFE
         </Link>
         <nav>
            <NavLink
               to={'/about'}
               className={({isActive}) => isActive ? 'underline font-bold' : '' }
            >
               About
            </NavLink>
         </nav>
      </header>
   );
}