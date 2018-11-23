import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';
import {Link, NavLink as RouterNavLink} from 'react-router-dom';
class Example extends React.Component {
  constructor() {
    super();
    this.toggle = () => {
      this.setState({
        isOpen: !this.state.isOpen
      })
    }
    /*this.handleChangeTitle = (e) => {
      const title = e.target.value;
      this.props.changeTitle(title);
    }*/
    this.state = {
      isOpen: false
    };
  }
  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">MadKiki</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <RouterNavLink className="nav-link" to="/">Home</RouterNavLink>
              </NavItem>
              <NavItem>
                <Link className="nav-link" to="/posts">Posts</Link>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/kikiboonya">GitHub</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Options
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    Option 1
                  </DropdownItem>
                  <DropdownItem>
                    Option 2
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    Reset
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
export default Example;