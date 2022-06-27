import classNames from "classnames";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import { Video } from "../components/Video";

interface OpenSidebarProps {
  isMenuOpen: boolean;
}

export function Event() {
  const { slug } = useParams<{ slug:string }>();
  const [openSidebar, setOpenSidebar] = useState(false);

  const windowDimensions = window.innerWidth > 640 ? 'large' : 'small';

  function toggleMenu(openMenu: OpenSidebarProps) {
    setOpenSidebar(openMenu.isMenuOpen);
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header toggleMenuParent={toggleMenu} />
      <main className="flex flex-1">
        <div className={classNames('flex flex-col flex-1', {
          'hidden': openSidebar,
        })}>
          { slug ? <Video lessonSlug={slug} /> : <div className="flex-1" /> }
          <Footer />
        </div>
        {windowDimensions === 'large' ? <Sidebar /> : (openSidebar ? (<div className="absolute"><Sidebar /></div>) : null)}
      </main>
    </div>
  );
}
