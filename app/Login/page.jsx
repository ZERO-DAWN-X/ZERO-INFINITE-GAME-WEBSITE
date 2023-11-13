import { link } from 'fs'
import React from 'react'
<link rel="stylesheet" href="Login.css" />

function page() {
  return (
    <div>
      
      <div class="navigation">
    <ul>
      <li>
        <a href="#">
          <span class="icon"><i class="fa-solid fa-house"></i></span>
          <span class="title">Home</span>
        </a>
      </li>
      <li>
                <a href="#">
                    <span class="icon"></span>
                    <span class="icon">Home</span>
                </a>
            </li>
      <li>
        <a href="#">
          <span class="icon"><i class="fa-solid fa-user"></i></span>
          <span class="title">Profile</span>
        </a>
      </li>
      <li>
        <a href="#">
          <span class="icon"><i class="fa-solid fa-message"></i></span>
          <span class="title">Messages</span>
        </a>
      </li>
      <li>
        <a href="#">
          <span class="icon"><i class="fa-solid fa-circle-info"></i></span>
          <span class="title">Help</span>
        </a>
      </li>
      <li>
        <a href="#">
          <span class="icon"><i class="fa-solid fa-gear"></i></span>
          <span class="title">Settings</span>
        </a>
      </li>
      <li>
        <a href="#">
          <span class="icon"><i class="fa-solid fa-lock"></i></span>
          <span class="title">Password</span>
        </a>
      </li>
      <li>
        <a href="#">
          <span class="icon"><i class="fa-solid fa-right-from-bracket"></i></span>
          <span class="title">SignOut</span>
        </a>
      </li>
    </ul>
  </div>
      
    </div>
  )
}

export default page