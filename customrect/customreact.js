function CustomRender(element, container) {

    // const domelement = document.createElement(element.type);

    // domelement.innerHTML = element.children;

    // domelement.setAttribute("href", element.props.href)
    // domelement.setAttribute("target", element.props.target)

    // container.appendChild(domelement)

    const domElement = document.createElement(element.type);
    
    domElement.innerHTML = element.children;

    for (const prop in element.props) {

        if(prop=='children') continue;

        domElement.setAttribute(prop,element.props[prop]); 
    }

    container.appendChild(domElement)
}

const reactElement = {
    type: "a",

    props: {
        href: "https://google.com",
        target: "_blank",
    },

    children: "tap me to select"
}

const container = document.getElementById('root');

CustomRender(reactElement, container);