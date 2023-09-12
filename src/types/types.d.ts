export interface ChartData {
    id: string;
    value_area: number;
    value_bar: number;
}

export type ChartDataResponse = Record<string, ChartData>;

export interface ArrChartData {
    time: string;
    id: string;
    value_area: number;
    value_bar: number;
}

export type Category = '전체' | 'area' | 'bar';
