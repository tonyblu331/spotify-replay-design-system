/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { SpacingLarge, SpacingSmall } from "./design-tokens/js/variables.js";
export namespace Components {
    interface SrButton {
        /**
          * Button size. TODOJCS add available variants as | expr
         */
        "size": string;
        /**
          * Type of button. TODOJCS add available variants as | expression
         */
        "variant": string;
    }
    interface SrCallout {
        /**
          * The title to display in the topmost part of the callout
         */
        "headerText": string;
        /**
          * Indicates the importance of the callout. The default is 'note', for the lowest level of importance.
         */
        "type": 'note' | 'warning' | 'critical';
    }
    interface SrCard {
        /**
          * TODOROSE Update type referring to design
         */
        "backgroundColor": 'primary' | 'secondary' | 'default' | 'dark';
        "hasBorder": boolean;
        /**
          * TODOROSE Update type referring to design
         */
        "margin": SpacingLarge | SpacingSmall;
        /**
          * TODOROSE Update type referring to design
         */
        "padding": SpacingLarge | SpacingSmall;
    }
    interface SrFlex {
        /**
          * The `direction` property allows users to indicate what direction of children components or slots is.
         */
        "direction": | 'horizontal'
    | 'vertical'
    | 'horizontal-reverse'
    | 'vertical-reverse';
        /**
          * Spacing between children components in side flex
         */
        "gap": number;
        /**
          * The `hAlignment` property allows user to align children or slots on the main axis
         */
        "hAlignment": 'left' | 'center' | 'right' | 'around' | 'between';
        /**
          * The `vAlignment` property allows user to align children or slots on the cross axis
         */
        "vAlignment": 'top' | 'center' | 'bottom' | 'stretch';
        /**
          * Allow children components wrap onto multiple lines
         */
        "wrap": boolean;
    }
    interface SrHeader {
        /**
          * The `level` property allows users to indicate what header hierarchy this element is. It must take a number from `1` to `2`.
         */
        "level": 1 | 2;
        /**
          * Provides support for implementing horizontal alignment to the text contained in the header.
         */
        "textAlign": 'left' | 'right' | 'center' | 'justify';
    }
    interface SrList {
        /**
          * Opt for an ordered list `<ol>` or `<ul>` if false. False by default
         */
        "ordered": boolean;
    }
    interface SrListItem {
    }
    interface SrParagraph {
    }
}
export interface SrButtonCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLSrButtonElement;
}
declare global {
    interface HTMLSrButtonElement extends Components.SrButton, HTMLStencilElement {
    }
    var HTMLSrButtonElement: {
        prototype: HTMLSrButtonElement;
        new (): HTMLSrButtonElement;
    };
    interface HTMLSrCalloutElement extends Components.SrCallout, HTMLStencilElement {
    }
    var HTMLSrCalloutElement: {
        prototype: HTMLSrCalloutElement;
        new (): HTMLSrCalloutElement;
    };
    interface HTMLSrCardElement extends Components.SrCard, HTMLStencilElement {
    }
    var HTMLSrCardElement: {
        prototype: HTMLSrCardElement;
        new (): HTMLSrCardElement;
    };
    interface HTMLSrFlexElement extends Components.SrFlex, HTMLStencilElement {
    }
    var HTMLSrFlexElement: {
        prototype: HTMLSrFlexElement;
        new (): HTMLSrFlexElement;
    };
    interface HTMLSrHeaderElement extends Components.SrHeader, HTMLStencilElement {
    }
    var HTMLSrHeaderElement: {
        prototype: HTMLSrHeaderElement;
        new (): HTMLSrHeaderElement;
    };
    interface HTMLSrListElement extends Components.SrList, HTMLStencilElement {
    }
    var HTMLSrListElement: {
        prototype: HTMLSrListElement;
        new (): HTMLSrListElement;
    };
    interface HTMLSrListItemElement extends Components.SrListItem, HTMLStencilElement {
    }
    var HTMLSrListItemElement: {
        prototype: HTMLSrListItemElement;
        new (): HTMLSrListItemElement;
    };
    interface HTMLSrParagraphElement extends Components.SrParagraph, HTMLStencilElement {
    }
    var HTMLSrParagraphElement: {
        prototype: HTMLSrParagraphElement;
        new (): HTMLSrParagraphElement;
    };
    interface HTMLElementTagNameMap {
        "sr-button": HTMLSrButtonElement;
        "sr-callout": HTMLSrCalloutElement;
        "sr-card": HTMLSrCardElement;
        "sr-flex": HTMLSrFlexElement;
        "sr-header": HTMLSrHeaderElement;
        "sr-list": HTMLSrListElement;
        "sr-list-item": HTMLSrListItemElement;
        "sr-paragraph": HTMLSrParagraphElement;
    }
}
declare namespace LocalJSX {
    interface SrButton {
        /**
          * Emitted when button is clicked
         */
        "onClicked"?: (event: SrButtonCustomEvent<any>) => void;
        /**
          * Button size. TODOJCS add available variants as | expr
         */
        "size"?: string;
        /**
          * Type of button. TODOJCS add available variants as | expression
         */
        "variant"?: string;
    }
    interface SrCallout {
        /**
          * The title to display in the topmost part of the callout
         */
        "headerText"?: string;
        /**
          * Indicates the importance of the callout. The default is 'note', for the lowest level of importance.
         */
        "type"?: 'note' | 'warning' | 'critical';
    }
    interface SrCard {
        /**
          * TODOROSE Update type referring to design
         */
        "backgroundColor"?: 'primary' | 'secondary' | 'default' | 'dark';
        "hasBorder"?: boolean;
        /**
          * TODOROSE Update type referring to design
         */
        "margin"?: SpacingLarge | SpacingSmall;
        /**
          * TODOROSE Update type referring to design
         */
        "padding"?: SpacingLarge | SpacingSmall;
    }
    interface SrFlex {
        /**
          * The `direction` property allows users to indicate what direction of children components or slots is.
         */
        "direction"?: | 'horizontal'
    | 'vertical'
    | 'horizontal-reverse'
    | 'vertical-reverse';
        /**
          * Spacing between children components in side flex
         */
        "gap"?: number;
        /**
          * The `hAlignment` property allows user to align children or slots on the main axis
         */
        "hAlignment"?: 'left' | 'center' | 'right' | 'around' | 'between';
        /**
          * The `vAlignment` property allows user to align children or slots on the cross axis
         */
        "vAlignment"?: 'top' | 'center' | 'bottom' | 'stretch';
        /**
          * Allow children components wrap onto multiple lines
         */
        "wrap"?: boolean;
    }
    interface SrHeader {
        /**
          * The `level` property allows users to indicate what header hierarchy this element is. It must take a number from `1` to `2`.
         */
        "level"?: 1 | 2;
        /**
          * Provides support for implementing horizontal alignment to the text contained in the header.
         */
        "textAlign"?: 'left' | 'right' | 'center' | 'justify';
    }
    interface SrList {
        /**
          * Opt for an ordered list `<ol>` or `<ul>` if false. False by default
         */
        "ordered"?: boolean;
    }
    interface SrListItem {
    }
    interface SrParagraph {
    }
    interface IntrinsicElements {
        "sr-button": SrButton;
        "sr-callout": SrCallout;
        "sr-card": SrCard;
        "sr-flex": SrFlex;
        "sr-header": SrHeader;
        "sr-list": SrList;
        "sr-list-item": SrListItem;
        "sr-paragraph": SrParagraph;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "sr-button": LocalJSX.SrButton & JSXBase.HTMLAttributes<HTMLSrButtonElement>;
            "sr-callout": LocalJSX.SrCallout & JSXBase.HTMLAttributes<HTMLSrCalloutElement>;
            "sr-card": LocalJSX.SrCard & JSXBase.HTMLAttributes<HTMLSrCardElement>;
            "sr-flex": LocalJSX.SrFlex & JSXBase.HTMLAttributes<HTMLSrFlexElement>;
            "sr-header": LocalJSX.SrHeader & JSXBase.HTMLAttributes<HTMLSrHeaderElement>;
            "sr-list": LocalJSX.SrList & JSXBase.HTMLAttributes<HTMLSrListElement>;
            "sr-list-item": LocalJSX.SrListItem & JSXBase.HTMLAttributes<HTMLSrListItemElement>;
            "sr-paragraph": LocalJSX.SrParagraph & JSXBase.HTMLAttributes<HTMLSrParagraphElement>;
        }
    }
}
