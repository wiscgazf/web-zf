import React, { ReactNode } from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import routes, { RouteList } from '@/router/index';

function mapRoutes(routes: RouteList[]): ReactNode {
    return routes.map((item: RouteList, idx: number) => {
        return (
            <Route
                exact={item.exact || false}
                path={item.path}
                key={idx}
                render={(props: any) => {
                    const NewComp = item.component;
                    Object.assign(props, {
                        redirect: item.redirect || null
                    });
                    if (item.routes) {
                        return <NewComp {...props}>{mapRoutes(item.routes)}</NewComp>;
                    } else {
                        return <NewComp {...props} />;
                    }
                }}
            />
        );
    });
}

const Routes = () => {
    return (
        <Router>
            <Switch>
                {mapRoutes(routes)}
                <Route component={() => <div>404 Page not Found!</div>} />
            </Switch>
        </Router>
    );
};

export default Routes;
