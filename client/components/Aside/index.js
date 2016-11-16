import React from 'react';

export default (props) => (
  <aside id="nav" className="lter hidden-print hidden-xs">
    <section className="vbox">
      <section className="w-f nav-xs">
        <div data-height="auto" data-disable-fade-out="true" data-distance="0" data-size="10px" data-railopacity="0.2">
          <div className="clearfix wrapper dk logo-wrapper">
            <a className="logo text-center" href="/">
              <svg className="svg-icon icon-logo">
                <use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#icon-logo"></use>
              </svg>
            </a>
          </div>
          <nav className="nav-primary">
            <ul className="nav">
              <li>
                <a href="#">
                  <svg className="svg-icon icon-main">
                    <use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#icon-main"></use>
                  </svg>
                  <span>Главная</span></a>
              </li>
              <li>
                <a href="#">
                  <svg className="svg-icon icon-courses">
                    <use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#icon-courses"></use>
                  </svg>
                  <span>Курсы</span></a>
              </li>
              <li>
                <a href="#">
                  <svg className="svg-icon icon-webinar">
                    <use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#icon-webinar"></use>
                  </svg>
                  <span>Вебинары</span></a>
              </li>
              <li>
                <a href="#">
                  <svg className="svg-icon icon-forum">
                    <use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#icon-forum"></use>
                  </svg>
                  <span>Форум</span></a>
              </li>
              <li>
                <a href="#">
                  <svg className="svg-icon icon-blog">
                    <use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#icon-blog"></use>
                  </svg>
                  <span>Блог</span></a>
              </li>
              <li>
                <a href="#">
                  <svg className="svg-icon icon-studying">
                    <use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#icon-studying"></use>
                  </svg>
                  <span>Обучение</span></a>
              </li>
              <li>
                <a className="current" href="#">
                  <svg className="svg-icon icon-tests">
                    <use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#icon-tests"></use>
                  </svg>
                  <span>Тесты</span></a>
              </li>
              <li>
                <a href="#">
                  <svg className="svg-icon icon-career">
                    <use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#icon-career"></use>
                  </svg>
                  <span>Карьера</span></a>
              </li>
            </ul>
          </nav>
        </div>
      </section>
    </section>
  </aside>
);
