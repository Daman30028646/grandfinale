import React, { Component } from "react";

class Header extends Component
{
    render()
    {
        return(
   <div>
          <div class="container">

          <header class="d-flex flex-wrap justify-content-center py-4 px-1 mb-2 bord">
            <p href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
             <img src="images/logo.png" class="bi me-2" width="80" height="auto"></img>
              <h2 style={{fontSize:"35px"}}><strong>SCP Foundation</strong></h2>
            </p>
        
            
              <p class="nav-item mt-3 px-3"><div class="bg-dark text-light rounded px-4 py-2">Home</div></p>
              <p class="nav-item mt-4 px-3">SCP Series</p>
              <p class="nav-item mt-4 px-3">Library</p>
              <p class="nav-item mt-4 px-3">Background</p>
              <p class="nav-item mt-4 px-3">About</p>
            
          </header>
        </div>

</div>

        );
    }
}

export default Header;