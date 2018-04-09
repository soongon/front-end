const rootElement = document.getElementById('root');
    // const element = document.createElement('div');
    // element.textContent = 'Hello world';
    // element.className = 'container';
    // rootElement.appendChild(element);
    
    // const element = React.createElement(
    //     'div', 
    //     {
    //         className: 'container',
    //         children: [
    //             'Hello World!',
    //             '안녕히가세요..'
    //         ]
    //     }
    // );

    const content = 'Hello world';
    const myClassName = 'container';
    const props = {
        className: 'container',
        children: 'Hello World!!!'
    };
    const element = (
        // <div className={myClassName + '__hello'} >{content}</div>
        <div {...props} />
        // <div {...props} className='container'>안녕하세요..</div>
    );
    ReactDOM.render(element, rootElement);
