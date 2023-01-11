import SocialNetworks from './SocialNetworksContainer';
import Avatar from '../img/eu.jpg';
import '../styles/components/sidebar.sass';
import InformationContainer from './InformationContainer';


const Sidebar = () => {
  return <aside id="sidebar">
      <img src={Avatar} alt="Enzo Luiz Bertoli" />
      <p className="title">Desenvolvedor</p>
      <SocialNetworks/>
      <InformationContainer/>
      <a href="https://drive.google.com/file/d/1r3QbueVKEfTo1vVHXNIX0MQej7AStl5e/view" className="btn">Download currículo</a>
  </aside>
}

export default Sidebar