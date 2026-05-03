import React from "react";
import HeaderMenu from "./HeaderMenu";
import Logo from "./Logo";
import Container from "./Container";

const Header = () => {
  return (
    <header className="bg-linear-to-r from-indigo-600 from-10% via-sky-500 via-30% to-emerald-500 to-90% ... py-5">
      <div>
        {/*LeftBar*/}
        <Container className="flex items-center justify-between gap-7 text-light">
          <HeaderMenu />
          <Logo />
          <div>RightBar</div>
        </Container>
      </div>
    </header>
  );
};

export default Header;
