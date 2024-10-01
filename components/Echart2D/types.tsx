export interface BackendGrandson {
    id: string;
    name: string;
    value: string; 
}

export interface BackendSon {
    id: string;
    name: string;
    children: BackendGrandson[];
    value: string; 
}

export interface BackendNode {
    id: string;
    name: string;
    children: BackendSon[];
    value: string; 
}

export interface Echart2DProps {
    nodes: BackendNode;
    handleMenuItemClick: (id: string) => Promise<void>; 
    handleRestoreClick: () => Promise<void>; 
}


export interface EchartData {
    name: string;
    children: EchartData[];
    value: string; 
}

