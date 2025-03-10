import React from "react"
import { createRoot } from 'react-dom/client';
import Collapse from '../../src/index';

const App = () => {
    const data = [
        {
            title: "title1",
            content: "content1"
        },
        {
            title: "title2",
            content: "content2"
        },
        {
            title: "title2",
            content: "content2"
        },
        {
            title: "title2",
            content: "content2"
        }
    ]
    return (
        <div style={{width:"90%",margin:"0 auto"}}>
            <Collapse 
                img="./react.svg" 
                onChange={(checkIndex) => {console.log(checkIndex)}} 
                data={data} 
                bgColor="" 
                titleColor="#000" 
                contentColor="#404040" 
                speed={0.4} 
                checked={0} 
                titleFontSize={30} 
                contentFontSize={20} 
            />
        </div>
    );
}
const container = document.getElementById('root');
if (container) {
    const root = createRoot(container);
    root.render(<App />);
}