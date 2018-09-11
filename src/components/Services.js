import React, { Component } from 'react'
import './Services.css'

class Services extends Component {
  render() {
    return (
      <div className="services">
        <h3>Services</h3>
        <h2>What We Offer</h2>
        <div className="row">
          <div>
            <span>
              <i className="fas fa-mobile-alt"/>
            </span>
            <h4>Responsive</h4>
            <p>Looks great on any screen size!</p>
          </div>

          <div>
            <span>
              <i class="fas fa-pen"></i>
            </span>
            <h4>Redesigned</h4>
            <p>Freshly redesigned for Bootstrap 4.</p>
          </div>

          <div>
            <span>
              <i className="far fa-thumbs-up" />
            </span>
            <h4>Favorited</h4>
            <p>Millions of users love Start Bootstrap!</p>
          </div>

          <div>
            <span>
            <i className="fas fa-question" />
            </span>
            <h4>Question</h4>
            <p>Got any questions?</p>
          </div>
        </div>
      </div>
    )
  }
}

export default Services;