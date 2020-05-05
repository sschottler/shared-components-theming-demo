/// <reference types="react" />
export declare enum ThemeOptions {
    Default = 0,
    Alternate = 1
}
export interface Theme {
    name: ThemeOptions;
    primaryColor?: string;
    foregroundColor?: string;
}
export declare const defaultTheme: Theme;
export declare const alternateTheme: Theme;
export declare const SharedComponentsThemeProvider: (props: any) => JSX.Element;
export declare const Button: import("styled-components").StyledComponent<"button", any, {}, never>;
