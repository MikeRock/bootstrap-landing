import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './style.global.scss'; 
import fakeData from './data.json'
class App extends Component {
  constructor(...args) {
    super(...args);
    this.state = {menu: false}
  }
  render() {
    return (
      <div className="main">
        <nav className="navbar navbar-expand-lg navbar-dark sticky-top main-nav" id="mainNav">
          <div className="container">
            <a className="navbar-brand" href="#page-top">
              Awesome Site
            </a>
            <button
              className="navbar-toggler navbar-toggler-right"
              type="button"
              onClick ={_ => this.setState(prev => ({menu: !prev.menu}))}
              data-toggle="collapse"
              data-target="#navbarResponsive"
              aria-controls="navbarResponsive"
              aria-expanded="false"
              aria-label="Toggle navigation">
              <span className="navbar-toggler-icon" />
            </button>
            <div className={`collapse navbar-collapse ${ this.state.menu ? "show" : ""}`} id="navbarResponsive">
              <ul className="navbar-nav ml-auto">
               {fakeData.menu.map(item => (
                <li className="nav-item">
                  <a className="nav-link" href={`#${item.name.toLowerCase()}`}>
                   {item.name}
                  </a>
                </li>
               ))}
              </ul>
            </div>
          </div>
        </nav>

        <header className="hero-image text-center text-white d-flex">
          <div className="container my-auto">
            <div className="row">
              <div className="col-lg-10 mx-auto">
                <h1 className="hero-image__heading text-uppercase">
                  <strong>MY AWSOME HERO TITLE</strong>
                </h1>
                <hr className="hero-image__break"/>
              </div>
              <div className="col-lg-8 mx-auto">
                <p className="hero-image__paragraph text-faded mb-5">
                Lorem ipsum dolor amet master cleanse VHS umami, bicycle rights pour-over 
                fingerstache helvetica mlkshk. Yuccie plaid tbh, brunch sriracha prism chartreuse 
                heirloom drinking vinegar. Jianbing try-hard YOLO cronut humblebrag tousled. 
                Tattooed blue bottle pabst lyft vexillologist, wolf truffaut cardigan tofu 
                butcher occupy church-key tilde la croix. Messenger bag pug 8-bit, copper mug 90's 
                </p>
                <a className="btn btn-primary btn-xl btn-hero" href="#about">
                  Find Out More
                </a>
              </div>
            </div>
          </div>
        </header>

        <section className="bg-primary py-5" id="about">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 mx-auto text-center">
                <h2 className="section-heading text-white">{`Whatever you need we§ve got it!`}</h2>
                <hr className="bg-light mx-auto my-4" />
                <p className="text-faded mb-5">
                Lorem ipsum dolor amet master cleanse VHS umami, bicycle rights pour-over 
                fingerstache helvetica mlkshk. Yuccie plaid tbh, brunch sriracha prism chartreuse 
                heirloom drinking vinegar. 
                </p>
                <a className="btn btn-light btn-xl mb-5" href="#services">
                  Get Started!
                </a>
              </div>
            </div>
          </div>
        </section>
        <section id="services" className="position-relative mb-0">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 text-center">
                <h2 className="section-heading mt-5">At Your Service</h2>
                <hr className="mt-4" />
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row pb-4">
              {fakeData.cards.map(item => (
                <div className="col-lg-3 col-md-6 text-center">
                <div className="skill-box mt-5 mx-auto">
                  <i className={`fab fa-6x ${item.icon} text-primary mb-3 sr-icons skill-icon`} />
                  <h3 className="mb-3">{item.heading}</h3>
                  <p className="text-muted mb-0">{item.content}</p>
                </div>
              </div>
              ))}
            </div>
          </div>
          <div className="line" />
        </section>
        <section className="pb-3 bg-secondary position-relative" id="portfolio">
          <div className="container-fluid p-0">
            <div className="row no-gutters popup-gallery">
             {
              Array.from({length:6})
             .map((_,idx) => idx+1)
             .map(num => (
              <div className="col-lg-4 col-sm-6">
                <a className="portfolio-box" href={`img/portfolio/fullsize/${num}.jpg`}>
                  <img className="img-fluid" src={`img/portfolio/thumbnails/${num}.jpg`} alt="" />
                  <div className="portfolio-box__caption">
                    <div className="portfolio-box__caption-content">
                      <div className="portfolio-box__project-category text-faded">Category</div>
                      <div className="portfolio-box__project-name">Project Name</div>
                    </div>
                  </div>
                </a>
              </div>
             ))
             }
            </div>
          </div>
        </section>

        <section className="bg-dark text-white py-5 position-relative">
          <div className="container text-center">
            <h2 className="mb-4">Click the link to see more</h2>
            <a className="btn btn-light btn-xl sr-button mt-4" href="#">
              SEE MORE
            </a>
          </div>
        <div className="line"/>  
        </section>

        <section id="contact">
          <div className="container my-5">
            <div className="row">
              <div className="col-lg-8 mx-auto text-center">
                <h2 className="section-heading">{`Let's Get In Touch!`}</h2>
                <hr className="my-4" />
                <p className="mb-5">
                  Want to ask me a question. No problem. You can contact me by using the following.
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4 ml-auto text-center">
                <i className="fas fa-4x fa-mobile-alt mb-3 sr-contact" />
                <p>xxx-xxx-xxx</p>
              </div>
              <div className="col-lg-4 mr-auto text-center">
                <i className="far fa-4x fa-envelope mb-3 sr-contact" />
                <p>
                  <a href="mailto:#">mj.kaminski@wp.pl</a>
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementsByClassName('app')[0]);
