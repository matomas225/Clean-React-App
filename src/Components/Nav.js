import "./Nav.css";

function Nav(param) {
  return (
    <nav {...param}>
      <ul>
        <li>
          <a href="#about">About Us</a>
        </li>
        <li>
          <a href="#case">Case Studies</a>
        </li>
        <li>
          <a href="#footer">Contact Us</a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
