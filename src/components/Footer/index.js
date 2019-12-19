import React from 'react';
import './style.css';

export default function Footer() {
	return (
		// <div className="footer">
		// 	<div className="footer-name">Yas</div>
		// 	<div className="footer-links">Face</div>
		// 	<div className="footer-info">Gema</div>
        // </div>
  <footer class="footer">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-md-4">
          <span class="copyright">Made with  by Yasmin Araujo 2019</span>
        </div>
        <div class="col-md-4">
          <ul class="list-inline social-buttons">
            <li class="list-inline-item">
              <a href="#">
                <i class="fab fa-twitter"></i>
              </a>
            </li>
            <li class="list-inline-item">
              <a href="#">
                <i class="fab fa-facebook-f"></i>
              </a>
            </li>
            <li class="list-inline-item">
              <a href="#">
                <i class="fab fa-linkedin-in"></i>
              </a>
            </li>
          </ul>
        </div>
        <div class="col-md-4">
          <ul class="list-inline quicklinks">
            <li class="list-inline-item">
              <a href="#">Gema/USP</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
	);
}
