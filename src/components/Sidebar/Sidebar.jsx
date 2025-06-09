import { useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logo from '../../assets/logo.png';
import PropTypes from 'prop-types';
import './Sidebar.scss';

const SidebarContainer = styled.div``;
const LogoSection = styled.div``;
const NavItem = styled.div``;

const Sidebar = ({ color }) => {
  const [isOpened, setIsOpened] = useState(true);
  const [activeRoute, setActiveRoute] = useState('/');

  const goToRoute = (path) => {
    console.log(`going to "${path}"`);
    setActiveRoute(path);
  };

  const toggleSidebar = () => {
    setIsOpened((v) => !v);
  };

  const routes = [
    { title: 'Dashboard', icon: 'house', path: '/' },
    { title: 'Sales', icon: 'chart-line', path: '/sales' },
    { title: 'Costs', icon: 'chart-column', path: '/costs' },
    { title: 'Payments', icon: 'wallet', path: '/payments' },
    { title: 'Finances', icon: 'chart-pie', path: '/finances' },
    { title: 'Messages', icon: 'envelope', path: '/messages' },
  ];

  const bottomRoutes = [
    { title: 'Settings', icon: 'sliders', path: '/settings' },
    { title: 'Support', icon: 'phone-volume', path: '/support' },
  ];

  return (
    <SidebarContainer
      className={`SidebarContainer ${color === 'dark' ? 'dark' : ''} ${
        isOpened ? 'opened' : 'closed'
      }`}
    >
      <LogoSection className="LogoSection">
        <img src={logo} alt="Technify logo" />
        <span>Technify</span>
      </LogoSection>
      <div className="ToggleButton" onClick={toggleSidebar}>
        <FontAwesomeIcon icon={'angle-left'} />
      </div>
      <div style={{ flex: 1, overflow: 'hidden' }}>
        {routes.map((route) => (
          <NavItem
            key={route.title}
            className={`NavItem ${activeRoute === route.path ? 'active' : ''}`}
            onClick={() => goToRoute(route.path)}
          >
            <FontAwesomeIcon icon={`fas fa-${route.icon}`} />
            <span>{route.title}</span>
          </NavItem>
        ))}
      </div>
      <div>
        {bottomRoutes.map((route) => (
          <NavItem
            key={route.title}
            className={`NavItem ${activeRoute === route.path ? 'active' : ''}`}
            onClick={() => goToRoute(route.path)}
          >
            <FontAwesomeIcon icon={`fas fa-${route.icon}`} />
            <span>{route.title}</span>
          </NavItem>
        ))}
      </div>
    </SidebarContainer>
  );
};

Sidebar.propTypes = {
  color: PropTypes.string,
};

export default Sidebar;