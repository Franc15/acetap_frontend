import { useContext } from "react";
import { Navigate, Route } from "react-router-dom";
import { AuthContext } from "./Auth";

const PrivateRoute = ({ component: RouteComponent, ...rest }) => {
    const { currentUser } = useContext(AuthContext);
    return (
        <Route
        {...rest}
        render={(routeProps) =>
            !currentUser ? (
            <RouteComponent {...routeProps} />
            ) : (
            <Navigate to={"/login"} />
            )
        }
        />
    );
    };

export default PrivateRoute;
