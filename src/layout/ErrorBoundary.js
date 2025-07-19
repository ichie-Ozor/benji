// import React, { Component } from 'react';

// class ErrorBoundary extends Component {
//     state = { hasError: false };

//     static getDerivedStateFromError() {
//         return { hasError: true };
//     }

//     componentDidCatch(error, info) {
//         console.error("Error caught in boundary: ", error, info);
//     }

//     render() {
//         if (this.state.hasError) {
//             return <div>Something went wrong. Please try again later.</div>;
//         }
//         return this.props.children;
//     }
// }

// export default ErrorBoundary;

//////////////////////////////////////////////////////////
import React, { Component } from 'react';
import { useRouteError, useNavigate } from 'react-router-dom';

// Wrapper component to use hooks in class component
function withRouter(Component) {
    return function WrappedComponent(props) {
        const error = useRouteError();
        const navigate = useNavigate();
        return <Component {...props} error={error} navigate={navigate} />;
    };
}

class ErrorBoundary extends Component {
    state = { hasError: false };

    static getDerivedStateFromError() {
        return { hasError: true };
    }

    componentDidCatch(error, info) {
        console.error("Error caught in boundary: ", error, info);
    }

    render() {
        // Handle React Router errors
        if (this.props.error) {
            console.error('Router error:', this.props.error);

            if (this.props.error.status === 401) {
                // Redirect to login for unauthorized access
                this.props.navigate('/', { replace: true });
                return null;
            }

            return (
                <div className="error-page">
                    <h1>Oops!</h1>
                    <p>Sorry, an unexpected error has occurred.</p>
                    <p>
                        <i>{this.props.error.statusText || this.props.error.message}</i>
                    </p>
                </div>
            );
        }

        // Handle component errors
        if (this.state.hasError) {
            return (
                <div className="error-fallback">
                    <h2>Something went wrong</h2>
                    <button onClick={() => window.location.reload()}>Refresh Page</button>
                </div>
            );
        }

        return this.props.children;
    }
}

export default withRouter(ErrorBoundary);