const rootElement = document.getElementById('root');

const Message = (props) => <div>{props.children}</div>
const element = (
    <div className='container'>
        <Message>Hello World</Message>
        <Message>Goodbye World</Message>
    </div>
);
ReactDOM.render(element, rootElement);
