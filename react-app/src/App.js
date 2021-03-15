import React, { useState } from 'react'

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

import { Checkout, CheckoutSuccess, CheckoutFail } from './Checkout'
import Payments from './Payments'
import Customers from './Customers'
import Subscriptions from './Subscriptions'
import { ReactComponent as OpenIcon } from './icons/open_pokeball.svg'
import { ReactComponent as MoneyIcon } from './icons/money_box.svg'
import { ReactComponent as VideoIcon } from './icons/video_playlist.svg'
import { CSSTransition } from 'react-transition-group'

function App() {
  return (
    <Router>
      <Navbar>
        <NavItem icon={<VideoIcon />}>
          <Link to='/'>Home</Link>
        </NavItem>
        <NavItem icon='💸' />
        <NavItem icon='💸' />

        <NavItem icon={<MoneyIcon />}>
          <DropdownMenu />
        </NavItem>
      </Navbar>
      <div>
        <main>
          <Switch>
            <Route path='/checkout'>
              <Checkout />
            </Route>
            <Route path='/payments'>
              <Payments />
            </Route>
            <Route path='/customers'>
              <Customers />
            </Route>
            <Route path='/subscriptions'>
              <Subscriptions />
            </Route>
            <Route path='/success'>
              <CheckoutSuccess />
            </Route>
            <Route path='/failed'>
              <CheckoutFail />
            </Route>
            <Route path='/'>
              <Home />
            </Route>
          </Switch>
        </main>
      </div>
    </Router>
  )
}

function Navbar(props) {
  return (
    <nav>
      <ul className='navbar-nav'>
        {props.children}
        {/* <li>
          <Link to='/'>Home</Link>
        </li> */}
        {/* <li>
          <Link to='/checkout'>
            <span aria-label='emoji' role='img'>
              🛒
            </span>{' '}
            Checkout
          </Link>
        </li> */}
        {/* <li>
          <Link to='/payments'>
            <span aria-label='emoji' role='img'>
              💸
            </span>{' '}
            Payments
          </Link>
        </li> */}
        {/* <li>
          <Link to='/customers'>
            <span aria-label='emoji' role='img'>
              🧑🏿‍🤝‍🧑🏻
            </span>{' '}
            Customers
          </Link>
        </li> */}
        {/* <li>
          <Link to='/subscriptions'>
            <span aria-label='emoji' role='img'>
              🔄
            </span>{' '}
            Subscriptions
          </Link>
        </li> */}
      </ul>
    </nav>
  )
}

function DropdownMenu() {
  const [activeMenu, setActiveMenu] = useState('main')
  const [menuHeight, setMenuHeight] = useState(null)

  function calcHeight(el) {
    const height = el.offsetHeight
    setMenuHeight(height)
  }
  function DropdownItem(props) {
    return (
      <a
        href='#'
        className='menu-item'
        onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}
      >
        <span className='icon-button'>{props.leftIcon}</span>
        {props.children}
        <span className='icon-right'>{props.rightIcon}</span>
      </a>
    )
  }
  return (
    <div className='dropdown' style={{ height: menuHeight }}>
      <CSSTransition
        in={activeMenu === 'main'}
        unmountOnExit
        timeout={500}
        classNames='menu-primary'
        onEnter={calcHeight}
      >
        <div className='menu'>
          <DropdownItem>My Profile</DropdownItem>
          <DropdownItem
            leftIcon={<OpenIcon />}
            rightIcon={<OpenIcon />}
            goToMenu='settings'
          >
            Settings
          </DropdownItem>
        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === 'settings'}
        unmountOnExit
        timeout={500}
        classNames='menu-secondary'
      >
        <div className='menu'>
          <DropdownItem leftIcon={<OpenIcon />} goToMenu='main' />
          <DropdownItem>
            <Link to='/checkout'>Check out🛒</Link>
          </DropdownItem>
          <DropdownItem>
            <Link to='/subscriptions'>Subscriptions</Link>
          </DropdownItem>
          <DropdownItem>
            <Link to='/payments'>Payments</Link>
          </DropdownItem>
          <DropdownItem>
            <Link to='/customers'>Customers</Link>
          </DropdownItem>
        </div>
      </CSSTransition>
    </div>
  )
}

function NavItem(props) {
  const [open, setOpen] = useState(false)

  return (
    <li className='nav-item'>
      <a href='#' className='icon-button' onClick={() => setOpen(!open)}>
        {props.icon}
      </a>
      {open && props.children}
    </li>
  )
}

function Home() {
  return (
    <>
      <div className='well'>
        <h2>Stripe React + Node.js Live Demo</h2>
      </div>

      <div className='embed-responsive embed-responsive-16by9 vid'>
        <iframe
          src='https://player.vimeo.com/video/416381401'
          // width="640"
          // height="360"
          frameBorder='0'
          allow='autoplay; fullscreen'
          allowFullScreen
        ></iframe>
      </div>

      <div className='well'>
        <h2>Running in Test Mode</h2>
        <p>
          This demo is running in Stripe test mode, so feel free to submit
          payments with testing cards.
        </p>
        <a
          className='btn btn-outline-success'
          href='https://fireship.io/courses/stripe-js'
        >
          Full Stripe JS Course
        </a>
        <a
          className='btn btn-secondary'
          href='https://github.com/fireship-io/stripe-payments-js-course'
        >
          source code
        </a>
      </div>
    </>
  )
}

export default App
