import React from 'react';

export default () => (
  <header id="top-menu" className="header bg-white js-main-top-menu">
    <div className="header-content application">
      <h2 className="headertitle"><a className="m-r-sm" href="/tests/">
        <svg className="svg-icon icon-goback">
          <use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#icon-goback"></use>
        </svg>
      </a><a href="/tests">Тесты</a></h2>
      <ul className="nav navbar-nav navbar-right m-n hidden-xs nav-user notifications">
        <li>
          <a className="bacics-discount-banner-wrapper"
             href="/welcome_discount?utm_medium=internal&amp;utm_term=id1&amp;utm_source=welcome_discount&amp;utm_campaign=welcome_discount_16.11.2016">
            <div className="bacics-discount-banner">
              <div className="text">Скидка 20% на любую профессию до 16 ноября
              </div>
              <img className="banner"
                   src="https://d3cq7d0htfl6gn.cloudfront.net/assets/static/after_basics_banner-956410a1642430cb2997aa62b1af6a7fe7845c310a08aeca18b9bbb7f750f706.png"
                   alt="After basics banner"/></div>
          </a>
        </li>
        <li><a href="/cart" style={{padding: '27px 10px'}} ng-show="topMenuCartButtonCtrl.itemsCount > 0"
               className="ng-hide"><span className="badge bg-danger">0</span>
          <svg className="svg-icon icon-cart">
            <use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#icon-cart"></use>
          </svg>
        </a></li>
        <li className="text-center notice-list-wrapper" accepted="false">
          <a className="js-notices-link" data-target="#" data-toggle="dropdown" href="/notices">

            <svg className="svg-icon icon-notice">
              <use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#icon-notice"></use>
            </svg>
          </a>
        </li>
        <li><a href="/thanks"><span className="badge bg-success js-likes-badge">0</span>
          <svg className="svg-icon icon-like">
            <use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#icon-like"></use>
          </svg>
        </a></li>
        <li id="menu-messages"><a className="chat-button" href=""><span className="badge bg-danger hidden">0</span>
          <svg className="svg-icon icon-messages">
            <use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#icon-messages"></use>
          </svg>
        </a></li>
        <li className="dropdown">
          <a data-target="#" href="https://geekbrains.ru/users/1297909" data-toggle="dropdown" role="button"
             aria-haspopup="true" aria-expanded="false"><img className="img-circle" id="user-avatar-image"
                                                             alt="Андрей Алексеев"
                                                             src="https://geekbrains-uploads.s3.amazonaws.com/users/photo/001/297/909/thumb/1297909.jpg?1478686593"/>
            <svg className="svg-icon icon-more-icon">
              <use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#icon-more-icon"></use>
            </svg>
          </a>
          <ul className="dropdown-menu animated fadeInDown">
            <li><span className="arrow top"></span><a href="https://geekbrains.ru/users/1297909"><span
              className="pull-left">Профиль</span>
              <div className="pull-right"
                   onclick="document.location.href = 'https://geekbrains.ru/profile'; return false">
                <svg className="icon-cog-small">
                  <use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#icon-cog-small"></use>
                </svg>
              </div>
              <div className="clearfix"></div>
            </a></li>
            <li><a href="https://geekbrains.ru/orders">Заказы</a></li>
            <li><a href="https://geekbrains.ru/referrals">Реферальная программа</a></li>
            <li><a href="/help">Помощь</a></li>
            <li className="divider"></li>
            <li><a href="/logout">Выход</a></li>
          </ul>
        </li>
      </ul>
      <a className="top-menu-mobile-toggle pull-right visible-xs top-menu-mobile-toggle" href="">
        <div className="nav-icon"><span></span><span></span><span></span></div>
      </a>
    </div>
  </header>
);
