/**
 * This file was generated from DynamicBottomsheet.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix Widgets Framework Team
 */
import { CSSProperties } from "react";

export interface DynamicBottomsheetProps<Style> {
    name: string;
    style: Style[];
    contentText: string;
    maxHeight: number;
    enableOverDrag: boolean;
    enablePanDownToClose: boolean;
    enableDynamicSizing: boolean;
    showsVerticalScrollIndicator: boolean;
}

export interface DynamicBottomsheetPreviewProps {
    /**
     * @deprecated Deprecated since version 9.18.0. Please use class property instead.
     */
    className: string;
    class: string;
    style: string;
    styleObject?: CSSProperties;
    readOnly: boolean;
    renderMode?: "design" | "xray" | "structure";
    contentText: string;
    maxHeight: number | null;
    enableOverDrag: boolean;
    enablePanDownToClose: boolean;
    enableDynamicSizing: boolean;
    showsVerticalScrollIndicator: boolean;
}
