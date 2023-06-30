import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
    logo: <span>OneToGo Docs</span>,
    project: {
        link: "https://github.com/katistix/onetogo",
    },
    footer: {
        text: "Paul Tal @katistix 2023",
    },
    useNextSeoProps() {
        return {
            titleTemplate: "%s - OneToGo Docs",
        };
    },
};

export default config;
