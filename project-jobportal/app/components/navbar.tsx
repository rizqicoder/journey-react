import { NavLink } from 'react-router';
export default function Navbar() {

  return <>
    <nav className='w-full max-w-4xl bg-white rounded-2xl shadow-lg px-6 py-4 flex flex-wrap items-center justify-between border border-slate-200/80 transition-all'>
      <ul className='w-full flex items-center justify-between gap-1 sm:gap-2 mt-2 sm:mt-0 flex-wrap'>
        <div>
          <li>
            <NavLink to={'/'} className='navlink-ops'>
              <span>Home</span>
            </NavLink>
          </li>
        </div>
        <div className='flex items-center gap-1 sm:gap-2 mt-2 sm:mt-0 flex-wrap'>
          <li>
            <NavLink to={'list-job'} className='navlink-ops'>
              <span>list-job</span>
            </NavLink>
          </li>
          <li>
            <NavLink to={'create-job'} className='navlink-ops'>
              <span>create-job</span>
            </NavLink>
          </li>
        </div>
      </ul>
    </nav>
  </>
}