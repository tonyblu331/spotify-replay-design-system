/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { SPACER } from "~/enum.js";
export namespace Components {
    interface SrBox {
        /**
          * Specify wrapper HTML element
         */
        "as": 'div' | 'section' | 'article' | 'span';
        /**
          * Specify background fill inside box component
         */
        "backgroundColor": 'primary' | 'secondary' | 'default' | 'dark';
        /**
          * Specify border color
         */
        "borderColor": 'default' | 'primary';
        /**
          * Specify border radius
         */
        "borderRadius": 'default' | 'none';
        /**
          * Specify border width
         */
        "borderWidth": 'thin' | 'thick';
        /**
          * Control shadow effects around box component
         */
        "boxShadow": 'level0' | 'level1' | 'level2' | 'level3' | 'level4';
        /**
          * Specify text color inside box component
         */
        "color": 'dark' | 'bright';
        /**
          * Specify height of box component
         */
        "height": 'small' | 'medium' | 'large';
        /**
          * Enable or disable border around box component
         */
        "isBorder": boolean;
        /**
          * Control amount of white space around the box component itself.
         */
        "margin"?: SPACER;
        /**
          * Define amount of space at bottom side only.
         */
        "marginBottom"?: SPACER;
        /**
          * Define amount of space at left side only.
         */
        "marginLeft"?: SPACER;
        /**
          * Define amount of space at right side only.
         */
        "marginRight"?: SPACER;
        /**
          * Define amount of space at top side only.
         */
        "marginTop"?: SPACER;
        /**
          * Control amount of white space around child components inside of a box
         */
        "padding": SPACER;
        /**
          * Define amount of white space at bottom side only
         */
        "paddingBottom"?: SPACER;
        /**
          * Define amount of white space at left side only
         */
        "paddingLeft"?: SPACER;
        /**
          * Define amount of white space at right side only
         */
        "paddingRight"?: SPACER;
        /**
          * Define amount of white space at top side only
         */
        "paddingTop"?: SPACER;
        /**
          * Specify width of box component
         */
        "width": 'small' | 'medium' | 'large';
    }
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
        "headerText"?: string;
        /**
          * Indicates the importance of the callout. The default is 'note', for the lowest level of importance.
         */
        "type": 'note' | 'warning' | 'critical';
    }
    interface SrCombobox {
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
          * The `gap` property adjusts spacing between children components inside flex
         */
        "gap"?: SPACER;
        /**
          * The `hAlignment` property allows user to align children or slots on the main axis
         */
        "hAlignment": 'left' | 'center' | 'right' | 'around' | 'between';
        /**
          * The `vAlignment` property allows user to align children or slots on the cross axis
         */
        "vAlignment": 'top' | 'center' | 'bottom' | 'stretch';
        /**
          * The `wrap` property allows children components wrap onto multiple lines
         */
        "wrap": boolean;
    }
    interface SrHeading {
        /**
          * The `level` property allows users to indicate what header hierarchy this element is. It must take a number from `1` to `6`.
         */
        "level": 1 | 2 | 3 | 4 | 5 | 6;
        /**
          * Provides support for implementing horizontal alignment to the text contained in the header.
         */
        "textAlign": 'left' | 'right' | 'center' | 'justify';
    }
    interface SrHelptext {
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
    interface SrStack {
        /**
          * The `gap` property sets the spacing in between elements, and has no effect in the leading or trailing element.
         */
        "gap"?: SPACER;
        /**
          * The `orientation` property sets the direction for the flow, either vertical or horizontal.
         */
        "orientation": 'vertical' | 'horizontal';
    }
    interface SrTextinput {
    }
}
export interface SrButtonCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLSrButtonElement;
}
declare global {
    interface HTMLSrBoxElement extends Components.SrBox, HTMLStencilElement {
    }
    var HTMLSrBoxElement: {
        prototype: HTMLSrBoxElement;
        new (): HTMLSrBoxElement;
    };
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
    interface HTMLSrComboboxElement extends Components.SrCombobox, HTMLStencilElement {
    }
    var HTMLSrComboboxElement: {
        prototype: HTMLSrComboboxElement;
        new (): HTMLSrComboboxElement;
    };
    interface HTMLSrFlexElement extends Components.SrFlex, HTMLStencilElement {
    }
    var HTMLSrFlexElement: {
        prototype: HTMLSrFlexElement;
        new (): HTMLSrFlexElement;
    };
    interface HTMLSrHeadingElement extends Components.SrHeading, HTMLStencilElement {
    }
    var HTMLSrHeadingElement: {
        prototype: HTMLSrHeadingElement;
        new (): HTMLSrHeadingElement;
    };
    interface HTMLSrHelptextElement extends Components.SrHelptext, HTMLStencilElement {
    }
    var HTMLSrHelptextElement: {
        prototype: HTMLSrHelptextElement;
        new (): HTMLSrHelptextElement;
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
    interface HTMLSrStackElement extends Components.SrStack, HTMLStencilElement {
    }
    var HTMLSrStackElement: {
        prototype: HTMLSrStackElement;
        new (): HTMLSrStackElement;
    };
    interface HTMLSrTextinputElement extends Components.SrTextinput, HTMLStencilElement {
    }
    var HTMLSrTextinputElement: {
        prototype: HTMLSrTextinputElement;
        new (): HTMLSrTextinputElement;
    };
    interface HTMLElementTagNameMap {
        "sr-box": HTMLSrBoxElement;
        "sr-button": HTMLSrButtonElement;
        "sr-callout": HTMLSrCalloutElement;
        "sr-combobox": HTMLSrComboboxElement;
        "sr-flex": HTMLSrFlexElement;
        "sr-heading": HTMLSrHeadingElement;
        "sr-helptext": HTMLSrHelptextElement;
        "sr-list": HTMLSrListElement;
        "sr-list-item": HTMLSrListItemElement;
        "sr-paragraph": HTMLSrParagraphElement;
        "sr-stack": HTMLSrStackElement;
        "sr-textinput": HTMLSrTextinputElement;
    }
}
declare namespace LocalJSX {
    interface SrBox {
        /**
          * Specify wrapper HTML element
         */
        "as"?: 'div' | 'section' | 'article' | 'span';
        /**
          * Specify background fill inside box component
         */
        "backgroundColor"?: 'primary' | 'secondary' | 'default' | 'dark';
        /**
          * Specify border color
         */
        "borderColor"?: 'default' | 'primary';
        /**
          * Specify border radius
         */
        "borderRadius"?: 'default' | 'none';
        /**
          * Specify border width
         */
        "borderWidth"?: 'thin' | 'thick';
        /**
          * Control shadow effects around box component
         */
        "boxShadow"?: 'level0' | 'level1' | 'level2' | 'level3' | 'level4';
        /**
          * Specify text color inside box component
         */
        "color"?: 'dark' | 'bright';
        /**
          * Specify height of box component
         */
        "height"?: 'small' | 'medium' | 'large';
        /**
          * Enable or disable border around box component
         */
        "isBorder"?: boolean;
        /**
          * Control amount of white space around the box component itself.
         */
        "margin"?: SPACER;
        /**
          * Define amount of space at bottom side only.
         */
        "marginBottom"?: SPACER;
        /**
          * Define amount of space at left side only.
         */
        "marginLeft"?: SPACER;
        /**
          * Define amount of space at right side only.
         */
        "marginRight"?: SPACER;
        /**
          * Define amount of space at top side only.
         */
        "marginTop"?: SPACER;
        /**
          * Control amount of white space around child components inside of a box
         */
        "padding"?: SPACER;
        /**
          * Define amount of white space at bottom side only
         */
        "paddingBottom"?: SPACER;
        /**
          * Define amount of white space at left side only
         */
        "paddingLeft"?: SPACER;
        /**
          * Define amount of white space at right side only
         */
        "paddingRight"?: SPACER;
        /**
          * Define amount of white space at top side only
         */
        "paddingTop"?: SPACER;
        /**
          * Specify width of box component
         */
        "width"?: 'small' | 'medium' | 'large';
    }
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
    interface SrCombobox {
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
          * The `gap` property adjusts spacing between children components inside flex
         */
        "gap"?: SPACER;
        /**
          * The `hAlignment` property allows user to align children or slots on the main axis
         */
        "hAlignment"?: 'left' | 'center' | 'right' | 'around' | 'between';
        /**
          * The `vAlignment` property allows user to align children or slots on the cross axis
         */
        "vAlignment"?: 'top' | 'center' | 'bottom' | 'stretch';
        /**
          * The `wrap` property allows children components wrap onto multiple lines
         */
        "wrap"?: boolean;
    }
    interface SrHeading {
        /**
          * The `level` property allows users to indicate what header hierarchy this element is. It must take a number from `1` to `6`.
         */
        "level"?: 1 | 2 | 3 | 4 | 5 | 6;
        /**
          * Provides support for implementing horizontal alignment to the text contained in the header.
         */
        "textAlign"?: 'left' | 'right' | 'center' | 'justify';
    }
    interface SrHelptext {
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
    interface SrStack {
        /**
          * The `gap` property sets the spacing in between elements, and has no effect in the leading or trailing element.
         */
        "gap"?: SPACER;
        /**
          * The `orientation` property sets the direction for the flow, either vertical or horizontal.
         */
        "orientation"?: 'vertical' | 'horizontal';
    }
    interface SrTextinput {
    }
    interface IntrinsicElements {
        "sr-box": SrBox;
        "sr-button": SrButton;
        "sr-callout": SrCallout;
        "sr-combobox": SrCombobox;
        "sr-flex": SrFlex;
        "sr-heading": SrHeading;
        "sr-helptext": SrHelptext;
        "sr-list": SrList;
        "sr-list-item": SrListItem;
        "sr-paragraph": SrParagraph;
        "sr-stack": SrStack;
        "sr-textinput": SrTextinput;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "sr-box": LocalJSX.SrBox & JSXBase.HTMLAttributes<HTMLSrBoxElement>;
            "sr-button": LocalJSX.SrButton & JSXBase.HTMLAttributes<HTMLSrButtonElement>;
            "sr-callout": LocalJSX.SrCallout & JSXBase.HTMLAttributes<HTMLSrCalloutElement>;
            "sr-combobox": LocalJSX.SrCombobox & JSXBase.HTMLAttributes<HTMLSrComboboxElement>;
            "sr-flex": LocalJSX.SrFlex & JSXBase.HTMLAttributes<HTMLSrFlexElement>;
            "sr-heading": LocalJSX.SrHeading & JSXBase.HTMLAttributes<HTMLSrHeadingElement>;
            "sr-helptext": LocalJSX.SrHelptext & JSXBase.HTMLAttributes<HTMLSrHelptextElement>;
            "sr-list": LocalJSX.SrList & JSXBase.HTMLAttributes<HTMLSrListElement>;
            "sr-list-item": LocalJSX.SrListItem & JSXBase.HTMLAttributes<HTMLSrListItemElement>;
            "sr-paragraph": LocalJSX.SrParagraph & JSXBase.HTMLAttributes<HTMLSrParagraphElement>;
            "sr-stack": LocalJSX.SrStack & JSXBase.HTMLAttributes<HTMLSrStackElement>;
            "sr-textinput": LocalJSX.SrTextinput & JSXBase.HTMLAttributes<HTMLSrTextinputElement>;
        }
    }
}
