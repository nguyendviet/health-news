import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './NavBar.css';

class NavBar extends Component {

    constructor(props) {
        super(props);

        this.toggleIcon = this.toggleIcon.bind(this);
        this.state = {
            iconCollapsed: true,
            menuCollapsed: true
        };
    }

    toggleIcon() {
        this.setState({
            iconCollapsed: !this.state.iconCollapsed
        });
    }

    render() {
        return (
            <nav className="navbar fixed-top navbar-expand-lg">
                <a className="navbar-brand" href="/"><img alt="logo"/></a>

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#nav-content" aria-controls="nav-content" aria-expanded="false" aria-label="Toggle navigation">
                    <div className={this.state.iconCollapsed ? 'nav-icon' : 'nav-icon open'} onClick={this.toggleIcon}>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </button>

                <div className="collapse navbar-collapse" id="nav-content">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link to="/saved" className="nav-link">Saved Articles</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default NavBar;
