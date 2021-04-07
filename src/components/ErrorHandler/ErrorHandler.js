import "./ErrorHandler.css";

function ErrorHandler(message) {
    return (
        <div className="error">
            <h3>{message}</h3>
        </div>
    )
}

export default ErrorHandler;