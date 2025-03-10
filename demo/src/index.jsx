import React from "react"
import { createRoot } from 'react-dom/client';
import Collapse from 'weile-collapse'; // 引入组件
import './index.scss';


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
        <div className="container" style={{width:"90%",margin:"0 auto"}}>
            <Collapse onChange={(checkIndex) => {console.log(checkIndex)}} data={data} bgColor="#101010" contentColor="#e0e0e0" titleColor="#fff" speed={0.4} checked={0} titleFontSize={30} />
        </div>
    );
}
const container = document.getElementById('root');
if (container) {
    const root = createRoot(container);
    root.render(<App />);
}