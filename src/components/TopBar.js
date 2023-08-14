import React from 'react'

const TopBar = () => {
  return (
    <div>
       <header id="header" class="header d-flex align-items-center">
        <div class="container-fluid container-xl d-flex align-items-center justify-content-between">
          <a href="/mainview" class="logo d-flex align-items-center">
            {/* <img src="assets/img/logo.png" alt=""/> */}
            <h1>
              Maskaf Construction<span>.</span>
            </h1>
          </a>

          <i class="mobile-nav-toggle mobile-nav-show bi bi-list" id="navbar"></i>
          <i class="mobile-nav-toggle mobile-nav-hide d-none bi bi-x"></i>
          <nav id="navbar" class="navbar">
            <ul>
              <li><a href="/mainview" class="active">Home</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/service">Services</a></li>
              <li><a href="/projects">Projects</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>
    </div>
  )
}

export default TopBar;
