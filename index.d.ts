declare module 'weile-collapse' {
    import { ComponentType } from 'react';

    interface DataItem {
        title: string;
        content: string;
    }

    export interface CollapseProps {
        data: DataItem[];
        bgColor?: string;
        titleColor?: string;
        contentColor?: string;
        img?: string;
        speed?: number;
        checked?: number | null;
        titleFontSize?: number;
        contentFontSize?: number;
        onChange?: (index: number) => void;
    }

    const Collapse: ComponentType<CollapseProps>;

    export default Collapse;
}