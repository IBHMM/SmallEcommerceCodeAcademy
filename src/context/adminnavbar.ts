import { createContext } from 'react';

interface NavbarContextProps {
  activeDirectory: string;
  setActiveDirectory: (value: string) => void;
}

const AdminNavbarContext = createContext<NavbarContextProps>({
  activeDirectory: 'home',
  setActiveDirectory: () => {},
});

export { AdminNavbarContext };
