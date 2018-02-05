const rootElement = document.getElementById('root');
// console.log(rootElement);
// const element = document.createElement('div');
// element.textContent = 'Hello world';
// element.className = 'container';
// rootElement.appendChild(element);

const element = React.createElement('div', null, 'Hello world...');

ReactDOM.render(element, rootElement);
