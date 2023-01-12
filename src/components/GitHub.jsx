import { FaGithub } from "react-icons/fa";

import "../styles/components/socialnetworks.sass";

const socialNetworks = [
  { name: "github", icon: <FaGithub /> },
];

function GitHub() {
  return <section id="social-networks">
    {socialNetworks.map((network) => (
        <a href="https://github.com/Enzoluizb" className="social-btn" id={network.name} key={network.name}>
            {network.icon}
        </a> 
    ))}
  </section>;
}

export default GitHub;
