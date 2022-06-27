import { useState } from "react";
import { Logo } from "./Logo";
import { ToggleListIcon } from "./ToggleListIcon";

interface ToggleMenuProps {
  toggleMenuParent: Function;
  isListIcon: boolean;
}

export function Header({ toggleMenuParent, isListIcon }: ToggleMenuProps) {
  const windowDimensions = window.innerWidth > 640 ? 'large' : 'small';

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function toggleMenu() {
    toggleMenuParent({
      isMenuOpen: !isMenuOpen,
    });

    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <header className="w-full py-5 px-6 flex items-center justify-between sm:justify-center bg-gray-700 border-b border-gray-600">
      <Logo size={windowDimensions} />

      { windowDimensions === 'small' ? (
        <div className="flex items-center justify-between w-24" onClick={toggleMenu}>
          <span className="text-base text-gray-100">Aulas</span>
          <ToggleListIcon toggleMenuIcon={isMenuOpen} />
        </div>
      ) : (
        null
      )}
    </header>
  );
}
