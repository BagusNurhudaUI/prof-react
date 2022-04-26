import React from "react";
import logoFooter from '../image/logo-footer.jpg'
import '../styles/Footer.css'
export default function Footer(){
    return (
        <footer className="footer">
        <div className="container-footer">
            <img src={logoFooter} alt="logo-footer" height="50" />
        </div>
        <div>
          <p className="copyright">©2022 Bagus Nurhuda All rights reserved</p>
        </div>
          
        
        
    </footer>
    );
}