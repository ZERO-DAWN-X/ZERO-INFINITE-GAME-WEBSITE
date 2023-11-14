import React from 'react'
import { faCaretDown, faCartArrowDown, faCartFlatbed, faEnvelope, faEnvelopeOpen, faFile, faGamepad, faGear, faHome, faInfoCircle, faPuzzlePiece, faSave } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const sidebar = () => {
  return (
    <div>
        <div class="primary-nav">
        <div class="custom-logo"></div>
            
            <nav role="navigation" class="menu">

                <a href="#" class="logotype"><strong class="zero">ZERO</strong> Infinite</a>


                <div class="overflow-container">

                    <ul class="menu-dropdown">

                        <li class="sidebartext">MENU</li>

                        <li><a href="#">Home</a><span class="icon"><i><FontAwesomeIcon icon={faHome} /></i></span></li>
                        <li class="menu-hasdropdown">
                            <a href="#">Games</a><span class="icon"><i><FontAwesomeIcon icon={faGamepad} /></i></span>

                            <label title="toggle menu" for="settings">
                                <span class="downarrow"><i><FontAwesomeIcon icon={faCaretDown} />&nbsp;</i></span>
                            </label>

                            <input type="checkbox" class="sub-menu-checkbox" id="settings" />

                            <ul class="sub-menu-dropdown">
                                <div class="sub-class">
                                    <li><a href="" >Action</a></li>
                                    <li><a href="" >Adventures</a></li>
                                    <li><a href="" >Racing</a></li>
                                    <li><a href="" >Arcade</a></li>
                                    <li><a href="" >Mind</a></li>
                                    <li><a href="" >RPG</a></li>
                                    <li><a href="" >Simulator</a></li>
                                </div>
                            </ul>
                        </li>

                        <li><a href="#">Softwares</a><span class="icon"><i><FontAwesomeIcon icon={faPuzzlePiece} /></i></span></li>

                        <li><a href="#">DLL Files</a><span class="icon"><i><FontAwesomeIcon icon={faFile} /></i></span></li>
            
                        <li><a href="#">Save Game Files</a><span class="icon"><i><FontAwesomeIcon icon={faSave} /></i></span></li>
            
                        <li class="sidebartext2">BUY </li>
            
                        <li><a href="#">Cart</a><span class="icon"><i><FontAwesomeIcon icon={faCartArrowDown} /></i></span></li>

                        <li><a href="#">Cart</a><span class="icon"><i><FontAwesomeIcon icon={faCartFlatbed} /></i></span></li>

                        <li class="sidebartext3">SETTINGS</li>
            
                        <li><a href="#">Info</a><span class="icon"><i><FontAwesomeIcon icon={faInfoCircle} /></i></span></li>
            
                        <li><a href="#">Settings</a><span class="icon"><i><FontAwesomeIcon icon={faGear} /></i></span></li>

                    </ul>

                </div>

            </nav>

        </div>


    </div>
  )
}

export default sidebar