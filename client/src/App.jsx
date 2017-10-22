import React from 'react';
import { BrowserRouter, Link, Route, Switch, Redirect } from 'react-router-dom';

import IndexHeader from './IndexHeader.jsx';
import IndexHomePage from './IndexHomePage.jsx';

// sub layouts
import UserSubLayout from './UserSubLayout.jsx';
import ProductSubLayout from './ProductSubLayout.jsx';

 // <Switch>用于监听空路由
class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <IndexHeader />
                    <main>
                        <Switch>  
                            <Route exact path = '/' component={IndexHomePage} />
                            <Route path = '/users' component={UserSubLayout} />
                            <Route path = '/products' component={ProductSubLayout} />
                            <Redirect to='/' />
                        </Switch>
                    </main>
                </div>
            </BrowserRouter>
        )
    }
}

export default App;