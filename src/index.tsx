import React, { useEffect, useState } from 'react';
import './index.scss'

interface DataItem {
    title: string;
    content: string;
};

interface CollapseProps {
    data: DataItem[],
    bgColor?: string,
    titleColor?: string,
    contentColor?: string,
    img?: string,
    speed?: number,
    checked?: number | null,
    titleFontSize?: number,
    contentFontSize?: number,
    onChange: (index: number) => void
}

const Collapse = ({
    data,
    bgColor,
    titleColor,
    contentColor,
    img,
    speed,
    checked,
    titleFontSize,
    contentFontSize,
    onChange
}: CollapseProps) => {
    const [openIndex, setOpenIndex] = useState<number | null>(checked ?? null);
    const change = (index) => {
        setOpenIndex(openIndex === index ? null : index);
        onChange(index)
    }
    return (
        <>
            {data &&
                <div className="">
                    {data.map((item, index) => (
                        <div
                            key={index}
                            onClick={() => { change(index) }}
                            className='collapse'
                            style={{
                                backgroundColor: bgColor,
                            }}
                        >
                            <div
                                className="collapse_title"
                                style={{
                                    color: titleColor,
                                    fontSize: `${titleFontSize}px`
                                }}
                            >
                                {item.title}
                                {img &&
                                    <img
                                        className="collapse_arrow_icon"
                                        src={img}
                                        alt=""
                                        style={{
                                            transform: openIndex === index ? 'translateY(-50%) rotate(180deg)' : 'translateY(-50%) rotate(0deg)',
                                            transition: `transform ${speed || 0.4}s`
                                        }}
                                    />
                                }
                            </div>
                            <div className="collapse_content"
                                style={{
                                    color: contentColor,
                                    fontSize: `${contentFontSize}px`,
                                    gridTemplateRows: openIndex === index ? "1fr" : "0fr",
                                    opacity: openIndex === index ? '1' : '0',
                                    transition: `grid-template-rows ${speed || 0.4}s, opacity ${speed || 0.4}s`,
                                    pointerEvents: openIndex === index ? 'auto' : 'none'
                                }}>
                                <div className="collapse_content_overflow">
                                    {item.content.trim()}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            }
        </>
    )
}
export default Collapse;