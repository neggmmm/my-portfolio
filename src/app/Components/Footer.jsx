import React from "react";

const Footer = () => {
  const aboutMe = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
  ];

  const socials = [
    { name: "GitHub", href: "github.com/neggmmm" },
    { name: "LinkedIn", href: "linkedin.com/in/neggmmm" },
    { name: "wha", href: "" },
  ];
  return (
    <div className="footer">
      <ul>
        {links.map((link) => (
          <li key={link.name}>
            <a href={link.href}>{link.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Footer;
