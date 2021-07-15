import React, {useState} from "react"
//import {Link} from "react-router-dom"
import "./navbar.scss"
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';


const Navbar = () => {

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen(prevState => !prevState);

  return (
  <>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <button  className="btn btn-modal" data-toggle="modal" data-target="#exampleModal"  href="img-cilia">
          <span className="navbar-toggler-icon"></span>
        </button>
        <a className="navbar-brand" href="cilia">
          <img src="./logo-cilia.svg" alt="cilia"></img>
        </a>
        <button  className="btn btn-modal" data-toggle="modal" data-target="#exampleModal"  href="img-cilia"></button>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse nav-right" id="navbarNavAltMarkup">
          <div className="navbar-nav">
                
                <a className="nav-link active" aria-current="page" href="#">
                  <span className="material-icons md-dark">help</span>
                  <span>Ajuda |</span>
                </a> 
                
                <a className="nav-link active" href="#">
                  <span className="material-icons md-dark">list</span>
                  <span>Suporte via Chat |</span>
                </a>
              
                <Dropdown isOpen={dropdownOpen} toggle={toggle}>
                  <DropdownToggle tag="a" className="nav-link" caret>
                    <span>
                      <h6>Diego ● Auto/RE - TESTE</h6>
                      <span>Administrador</span>
                    </span>
                  </DropdownToggle>
                  <DropdownMenu color="white">
                    <DropdownItem>Meu Perfil</DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>Configurações</DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem style={{color: `red`}}><span style={{color: `red`}}>Sair</span></DropdownItem>
                  </DropdownMenu>
                </Dropdown>
             
          </div>
        </div>
      </div>
    </nav>
  
    <div className="container"></div>
    <div>  
      <div className="container demo">
    
        <div className="modal left fade" id="exampleModal" tabIndex="" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog" role="document">        
            <div className="modal-content">
              <div className="modal-body">
                <div className="nav flex-sm-column flex-row">
                  <a href="Dashboard-modal" className="nav-item nav-link">Dashboard</a>
                  <div className="modal-footer"></div>
                  <a href="#" className="nav-item nav-link">Atendimentos</a>
                  <div className="modal-footer"></div>
                  <a href="#" className="nav-item nav-link">Reparos</a>
                  <div className="modal-footer"></div>
                  <a href="#" className="nav-item nav-link">Carros Reserva</a>
                  <div className="modal-footer"></div>
                  <a href="#" className="nav-item nav-link">Usuários</a>
                  <div className="modal-footer"></div>
                  <a href="#" className="nav-item nav-link">Grupos</a>
                  <div className="modal-footer"></div>
                  <a href="#" className="nav-item nav-link">Permissões</a>
                  <div className="modal-footer"></div>
                  <a href="#" className="nav-item nav-link">Configurações</a>
                </div>
              </div>
              <div className="modal-footer">
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  </>
  )
}

export default Navbar;

