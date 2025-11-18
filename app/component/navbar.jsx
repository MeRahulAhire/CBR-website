import "../../style/navbar.css";

export default function Navbar() {
  return (
    <div className="navbar-container">
      <div className="nav-box"><a href="/">Cloud Blender Render</a>
      <a
        href="http://coff.ee/rahulahire"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="support-logo">Support</div>
      </a>
      </div>
    </div>
  );
}
