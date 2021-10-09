import React, { Component } from "react";
import {Switch, Route, NavLink} from 'react-router-dom';

import InboxPage from './inbox';
import SentPage from './sent';
import DraftPage from './draft';
import TrashPage from './trash';

class MailPage extends Component{

  render(){
    return(
      <div>
        <div className="header"></div>
        <div className="body">
          <div className="sidebar">

            <div>
              <NavLink to="/mail/inbox" className="button" 
              activeClassName="active-btn">Go to Inbox Page</NavLink>
            </div>

            <div>
              <NavLink to="/mail/sent" className="button" 
              activeClassName="active-btn">Go to Sent Page</NavLink>
            </div>

            <div>
              <NavLink to="/mail/draft" className="button" 
              activeClassName="active-btn">Go to Draft Page</NavLink>
            </div>

            <div>
              <NavLink to="/mail/trash" className="button" 
              activeClassName="active-btn">Go to Trash Page</NavLink>
            </div>

          </div>
          <div className="content">

              <Switch>
                <Route path="/mail/inbox" component={InboxPage}></Route>
                <Route path="/mail/sent" component={SentPage}></Route>
                <Route path="/mail/draft" component={DraftPage}></Route>
                <Route path="/mail/trash" component={TrashPage}></Route>
              </Switch>

          </div>
        </div>
      </div>
    )
  }
}

export default MailPage;