import React from 'react';

export default () => (
  <header id="top-menu" className="header bg-white js-main-top-menu">
    <div className="header-content application">
      <h2 className="headertitle"><a className="m-r-sm" href="/tests/">
        <svg className="svg-icon icon-goback">
          <use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#icon-goback"></use>
        </svg>
      </a><a href="#">Тесты</a></h2>
      <ul className="nav navbar-nav navbar-right m-n hidden-xs nav-user notifications">
        <li><a href="#" style={{padding: '27px 10px'}}
               className="ng-hide"><span className="badge bg-danger">0</span>
          <svg className="svg-icon icon-cart">
            <use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#icon-cart"></use>
          </svg>
        </a></li>
        <li className="text-center notice-list-wrapper">
          <a className="js-notices-link" data-target="#" data-toggle="dropdown" href="#">

            <svg className="svg-icon icon-notice">
              <use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#icon-notice"></use>
            </svg>
          </a>
        </li>
        <li><a href="#"><span className="badge bg-success js-likes-badge">0</span>
          <svg className="svg-icon icon-like">
            <use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#icon-like"></use>
          </svg>
        </a></li>
        <li id="menu-messages"><a className="chat-button" href="#"><span className="badge bg-danger hidden">0</span>
          <svg className="svg-icon icon-messages">
            <use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#icon-messages"></use>
          </svg>
        </a></li>
        <li className="dropdown">
          <a data-target="#" href="#" data-toggle="dropdown" role="button"
             aria-haspopup="true" aria-expanded="false"><img className="img-circle" id="user-avatar-image"
                                                             alt="Андрей Алексеев"
                                                             src="https://geekbrains-uploads.s3.amazonaws.com/users/photo/001/297/909/thumb/1297909.jpg?1478686593"/>
            <svg className="svg-icon icon-more-icon">
              <use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#icon-more-icon"></use>
            </svg>
          </a>
          <ul className="dropdown-menu animated fadeInDown">
            <li><span className="arrow top"></span><a href="#"><span
              className="pull-left">Профиль</span>
              <div className="pull-right">
                <svg className="icon-cog-small">
                  <use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#icon-cog-small"></use>
                </svg>
              </div>
              <div className="clearfix"></div>
            </a></li>
            <li><a href="#">Заказы</a></li>
            <li><a href="#">Реферальная программа</a></li>
            <li><a href="#">Помощь</a></li>
            <li className="divider"></li>
            <li><a href="#">Выход</a></li>
          </ul>
        </li>
      </ul>
      <a className="top-menu-mobile-toggle pull-right visible-xs top-menu-mobile-toggle" href="">
        <div className="nav-icon"><span></span><span></span><span></span></div>
      </a>
    </div>
  </header>
);
