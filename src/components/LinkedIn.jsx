import { FaLinkedinIn} from "react-icons/fa";

import "../styles/components/socialnetworks.sass";

const socialNetworks = [
  { name: "linkedin", icon: <FaLinkedinIn /> },
];

function LinkedIn() {
  return <section id="social-networks">
    {socialNetworks.map((network) => (
        <a href="https://www.linkedin.com/in/enzo-luiz-bertoli-1557aa233/" className="social-btn" id={network.name} key={network.name}>
            {network.icon}
        </a> 
    ))}
  </section>;
}

export default LinkedIn;
