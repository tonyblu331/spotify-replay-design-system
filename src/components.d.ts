/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { SPACE_TEXT, SPACER } from "~/type.js";
export namespace Components {
    interface SrAnchor {
        /**
          * Indicates whether the component points to an external URL. You define external, and it will be styled differently. Defaults to false.
         */
        "external": boolean;
        /**
          * The URL to redirect to.
         */
        "href": string;
        /**
          * Whether or not to open the URL in a new tab. Defaults to false.
         */
        "openInNewTab": boolean;
    }
    interface SrBox {
        /**
          * Control active background color
         */
        "_activeBackground"?: any;
        /**
          * Control active border width
         */
        "_activeBorderWidth"?: 'thin' | 'medium' | 'thick';
        /**
          * Control focus background color
         */
        "_focusBackgroundColor": any;
        /**
          * Control focus border color
         */
        "_focusBorderColor"?: any;
        /**
          * Control focus border width
         */
        "_focusBorderWidth"?: 'thin' | 'medium' | 'thick';
        /**
          * Control hover color
         */
        "_hoverBackground"?: any;
        /**
          * Control hover border color width
         */
        "_hoverBorderColor"?: any;
        /**
          * Control hover border width
         */
        "_hoverBorderWidth"?: 'thin' | 'medium' | 'thick';
        /**
          * Specify wrapper HTML element
         */
        "as": 'div' | 'section' | 'article' | 'span';
        /**
          * Specify background fill inside box component
         */
        "backgroundColor": any;
        /**
          * Specify border color
         */
        "borderColor": any;
        /**
          * Specify border radius
         */
        "borderRadius": 'full' | 'small' | 'medium';
        /**
          * Specify border width
         */
        "borderWidth": 'thin' | 'medium' | 'thick';
        /**
          * Control shadow effects around box component
         */
        "boxShadow": 'level0' | 'level1' | 'level2' | 'level3' | 'level4';
        /**
          * Specify text color inside box component
         */
        "color"?: any;
        /**
          * Specify height of box component
         */
        "height": 'small' | 'medium' | 'large';
        /**
          * Enable or disable border around box component
         */
        "isBorder": boolean;
        /**
          * Control clickable state
         */
        "isClickable": boolean;
        /**
          * Control disable state
         */
        "isDisabled": boolean;
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
          * Specify max height of box component
         */
        "maxHeight"?: number;
        /**
          * Specify max width of box component
         */
        "maxWidth"?: number;
        /**
          * Specify min height of box component
         */
        "minHeight": number;
        /**
          * Specify min width of box component
         */
        "minWidth": number;
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
        "width": 'small' | 'medium' | 'large' | 'fit-content';
    }
    interface SrBreadcrumb {
    }
    interface SrBreadcrumbItem {
        "href"?: string;
        "isLastItem": boolean;
        "name": string;
    }
    interface SrButton {
        "isDisabled": boolean;
        "text": string;
        /**
          * Type of button.
         */
        "variant": | 'roundedBtn'
    | 'squaredBtn'
    | 'outlinedRoundBtn'
    | 'outlinedSquaredBtn'
    | 'blackRoundButton'
    | 'blackSquaredBtn'
    | 'blackOutlinedRoundBtn'
    | 'blackOutlinedSquaredBtn'
    | 'roundedBtnWithWhiteText'
    | 'squaredBtnWithWhiteText'
    | 'whiteRoundedBtn'
    | 'whiteSquaredBtn'
    | 'whiteOutlineRoundedBtn'
    | 'whiteOutlineSquaredBtn';
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
    interface SrCard {
        "hideBorder": boolean;
        "title": string;
    }
    interface SrCombobox {
        /**
          * Text string to add to a label to describe the combobox
         */
        "label"?: string;
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
          * Specify text color
         */
        "color"?: any;
        /**
          * The `level` property allows users to indicate what header hierarchy this element is.
         */
        "level": 1 | 2 | 3 | 4 | 5 | 6 | '1' | '2' | '3' | '4' | '5' | '6';
        /**
          * Provides support for implementing horizontal alignment to the text contained in the header.
         */
        "textAlign": 'left' | 'right' | 'center' | 'justify';
    }
    interface SrHelpText {
        /**
          * Helper Text State
         */
        "variant": 'default' | 'error' | 'success';
    }
    interface SrLabel {
        /**
          * Label variant state
         */
        "variant": 'default' | 'error' | 'success';
    }
    interface SrList {
        /**
          * Opt for an ordered list `<ol>` or `<ul>` if false. False by default
         */
        "ordered": boolean;
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
    interface SrText {
        "_hoverColor"?: any;
        /**
          * Specify wrapper HTML element
         */
        "as": | 'div'
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'p'
    | 'blockquote'
    | 'caption'
    | 'endnote'
    | 'span';
        /**
          * Specify font color
         */
        "color"?: any;
        /**
          * Specify font size
         */
        "fontSize": number;
        /**
          * Control font weight
         */
        "fontWeight": 'regular' | 'bold' | 'extraBold';
        "isClickable": boolean;
        /**
          * Define the space between characters in a text
         */
        "letterSpacing"?: number;
        /**
          * Define the height of a line
         */
        "lineHeight"?: number;
        /**
          * Control amount of white space around the box component itself.
         */
        "margin"?: SPACE_TEXT;
        /**
          * Define amount of space at bottom side only.
         */
        "marginBottom"?: SPACE_TEXT;
        /**
          * Define amount of space at left side only.
         */
        "marginLeft"?: SPACE_TEXT;
        /**
          * Define amount of space at right side only.
         */
        "marginRight"?: SPACE_TEXT;
        /**
          * Define amount of space at top side only.
         */
        "marginTop"?: SPACE_TEXT;
        /**
          * Control amount of white space around child components inside of a box
         */
        "padding": SPACE_TEXT;
        /**
          * Define amount of white space at bottom side only
         */
        "paddingBottom"?: SPACE_TEXT;
        /**
          * Define amount of white space at left side only
         */
        "paddingLeft"?: SPACE_TEXT;
        /**
          * Define amount of white space at right side only
         */
        "paddingRight"?: SPACE_TEXT;
        /**
          * Define amount of white space at top side only
         */
        "paddingTop"?: SPACE_TEXT;
    }
    interface SrTextArea {
        /**
          * Indicate the purpose of the text field
         */
        "helperText"?: string;
        /**
          * Error State
         */
        "isError": boolean;
        /**
          * Text label to place alongside the input
         */
        "label"?: string;
        /**
          * The text to display when the input is empty
         */
        "placeholder": string;
    }
    interface SrTextInput {
        /**
          * Indicate the purpose of the text field
         */
        "helperText"?: string;
        /**
          * Indicate whether this text field is disabled or not
         */
        "isDisabled": boolean;
        /**
          * Indicate Error state
         */
        "isError": boolean;
        /**
          * Indicate whether this text field is readonly or not
         */
        "isReadOnly": boolean;
        /**
          * Indicate whether this text field is required or not
         */
        "isRequired": boolean;
        /**
          * Indicate Success state
         */
        "isSuccess": boolean;
        /**
          * Text label to place alongside the input
         */
        "label"?: string;
        /**
          * The text to display when the input is empty
         */
        "placeholder": string;
        /**
          * Specify type of text field
         */
        "type": 'number' | 'text' | 'email';
        /**
          * Specify current value in text field
         */
        "value"?: any;
        /**
          * Specify Button variant
         */
        "variant": 'rounded' | 'squared';
    }
}
export interface SrButtonCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLSrButtonElement;
}
export interface SrComboboxCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLSrComboboxElement;
}
export interface SrTextAreaCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLSrTextAreaElement;
}
export interface SrTextInputCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLSrTextInputElement;
}
declare global {
    interface HTMLSrAnchorElement extends Components.SrAnchor, HTMLStencilElement {
    }
    var HTMLSrAnchorElement: {
        prototype: HTMLSrAnchorElement;
        new (): HTMLSrAnchorElement;
    };
    interface HTMLSrBoxElement extends Components.SrBox, HTMLStencilElement {
    }
    var HTMLSrBoxElement: {
        prototype: HTMLSrBoxElement;
        new (): HTMLSrBoxElement;
    };
    interface HTMLSrBreadcrumbElement extends Components.SrBreadcrumb, HTMLStencilElement {
    }
    var HTMLSrBreadcrumbElement: {
        prototype: HTMLSrBreadcrumbElement;
        new (): HTMLSrBreadcrumbElement;
    };
    interface HTMLSrBreadcrumbItemElement extends Components.SrBreadcrumbItem, HTMLStencilElement {
    }
    var HTMLSrBreadcrumbItemElement: {
        prototype: HTMLSrBreadcrumbItemElement;
        new (): HTMLSrBreadcrumbItemElement;
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
    interface HTMLSrCardElement extends Components.SrCard, HTMLStencilElement {
    }
    var HTMLSrCardElement: {
        prototype: HTMLSrCardElement;
        new (): HTMLSrCardElement;
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
    interface HTMLSrHelpTextElement extends Components.SrHelpText, HTMLStencilElement {
    }
    var HTMLSrHelpTextElement: {
        prototype: HTMLSrHelpTextElement;
        new (): HTMLSrHelpTextElement;
    };
    interface HTMLSrLabelElement extends Components.SrLabel, HTMLStencilElement {
    }
    var HTMLSrLabelElement: {
        prototype: HTMLSrLabelElement;
        new (): HTMLSrLabelElement;
    };
    interface HTMLSrListElement extends Components.SrList, HTMLStencilElement {
    }
    var HTMLSrListElement: {
        prototype: HTMLSrListElement;
        new (): HTMLSrListElement;
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
    interface HTMLSrTextElement extends Components.SrText, HTMLStencilElement {
    }
    var HTMLSrTextElement: {
        prototype: HTMLSrTextElement;
        new (): HTMLSrTextElement;
    };
    interface HTMLSrTextAreaElement extends Components.SrTextArea, HTMLStencilElement {
    }
    var HTMLSrTextAreaElement: {
        prototype: HTMLSrTextAreaElement;
        new (): HTMLSrTextAreaElement;
    };
    interface HTMLSrTextInputElement extends Components.SrTextInput, HTMLStencilElement {
    }
    var HTMLSrTextInputElement: {
        prototype: HTMLSrTextInputElement;
        new (): HTMLSrTextInputElement;
    };
    interface HTMLElementTagNameMap {
        "sr-anchor": HTMLSrAnchorElement;
        "sr-box": HTMLSrBoxElement;
        "sr-breadcrumb": HTMLSrBreadcrumbElement;
        "sr-breadcrumb-item": HTMLSrBreadcrumbItemElement;
        "sr-button": HTMLSrButtonElement;
        "sr-callout": HTMLSrCalloutElement;
        "sr-card": HTMLSrCardElement;
        "sr-combobox": HTMLSrComboboxElement;
        "sr-flex": HTMLSrFlexElement;
        "sr-heading": HTMLSrHeadingElement;
        "sr-help-text": HTMLSrHelpTextElement;
        "sr-label": HTMLSrLabelElement;
        "sr-list": HTMLSrListElement;
        "sr-paragraph": HTMLSrParagraphElement;
        "sr-stack": HTMLSrStackElement;
        "sr-text": HTMLSrTextElement;
        "sr-text-area": HTMLSrTextAreaElement;
        "sr-text-input": HTMLSrTextInputElement;
    }
}
declare namespace LocalJSX {
    interface SrAnchor {
        /**
          * Indicates whether the component points to an external URL. You define external, and it will be styled differently. Defaults to false.
         */
        "external"?: boolean;
        /**
          * The URL to redirect to.
         */
        "href"?: string;
        /**
          * Whether or not to open the URL in a new tab. Defaults to false.
         */
        "openInNewTab"?: boolean;
    }
    interface SrBox {
        /**
          * Control active background color
         */
        "_activeBackground"?: any;
        /**
          * Control active border width
         */
        "_activeBorderWidth"?: 'thin' | 'medium' | 'thick';
        /**
          * Control focus background color
         */
        "_focusBackgroundColor"?: any;
        /**
          * Control focus border color
         */
        "_focusBorderColor"?: any;
        /**
          * Control focus border width
         */
        "_focusBorderWidth"?: 'thin' | 'medium' | 'thick';
        /**
          * Control hover color
         */
        "_hoverBackground"?: any;
        /**
          * Control hover border color width
         */
        "_hoverBorderColor"?: any;
        /**
          * Control hover border width
         */
        "_hoverBorderWidth"?: 'thin' | 'medium' | 'thick';
        /**
          * Specify wrapper HTML element
         */
        "as"?: 'div' | 'section' | 'article' | 'span';
        /**
          * Specify background fill inside box component
         */
        "backgroundColor"?: any;
        /**
          * Specify border color
         */
        "borderColor"?: any;
        /**
          * Specify border radius
         */
        "borderRadius"?: 'full' | 'small' | 'medium';
        /**
          * Specify border width
         */
        "borderWidth"?: 'thin' | 'medium' | 'thick';
        /**
          * Control shadow effects around box component
         */
        "boxShadow"?: 'level0' | 'level1' | 'level2' | 'level3' | 'level4';
        /**
          * Specify text color inside box component
         */
        "color"?: any;
        /**
          * Specify height of box component
         */
        "height"?: 'small' | 'medium' | 'large';
        /**
          * Enable or disable border around box component
         */
        "isBorder"?: boolean;
        /**
          * Control clickable state
         */
        "isClickable"?: boolean;
        /**
          * Control disable state
         */
        "isDisabled"?: boolean;
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
          * Specify max height of box component
         */
        "maxHeight"?: number;
        /**
          * Specify max width of box component
         */
        "maxWidth"?: number;
        /**
          * Specify min height of box component
         */
        "minHeight"?: number;
        /**
          * Specify min width of box component
         */
        "minWidth"?: number;
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
        "width"?: 'small' | 'medium' | 'large' | 'fit-content';
    }
    interface SrBreadcrumb {
    }
    interface SrBreadcrumbItem {
        "href"?: string;
        "isLastItem"?: boolean;
        "name"?: string;
    }
    interface SrButton {
        "isDisabled"?: boolean;
        /**
          * Emitted when button is clicked
         */
        "onClicked"?: (event: SrButtonCustomEvent<any>) => void;
        "text"?: string;
        /**
          * Type of button.
         */
        "variant"?: | 'roundedBtn'
    | 'squaredBtn'
    | 'outlinedRoundBtn'
    | 'outlinedSquaredBtn'
    | 'blackRoundButton'
    | 'blackSquaredBtn'
    | 'blackOutlinedRoundBtn'
    | 'blackOutlinedSquaredBtn'
    | 'roundedBtnWithWhiteText'
    | 'squaredBtnWithWhiteText'
    | 'whiteRoundedBtn'
    | 'whiteSquaredBtn'
    | 'whiteOutlineRoundedBtn'
    | 'whiteOutlineSquaredBtn';
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
        "hideBorder"?: boolean;
        "title"?: string;
    }
    interface SrCombobox {
        /**
          * Text string to add to a label to describe the combobox
         */
        "label"?: string;
        /**
          * Emitted when the one of the options in the combobox is selected
         */
        "onSelected"?: (event: SrComboboxCustomEvent<any>) => void;
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
          * Specify text color
         */
        "color"?: any;
        /**
          * The `level` property allows users to indicate what header hierarchy this element is.
         */
        "level"?: 1 | 2 | 3 | 4 | 5 | 6 | '1' | '2' | '3' | '4' | '5' | '6';
        /**
          * Provides support for implementing horizontal alignment to the text contained in the header.
         */
        "textAlign"?: 'left' | 'right' | 'center' | 'justify';
    }
    interface SrHelpText {
        /**
          * Helper Text State
         */
        "variant"?: 'default' | 'error' | 'success';
    }
    interface SrLabel {
        /**
          * Label variant state
         */
        "variant"?: 'default' | 'error' | 'success';
    }
    interface SrList {
        /**
          * Opt for an ordered list `<ol>` or `<ul>` if false. False by default
         */
        "ordered"?: boolean;
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
    interface SrText {
        "_hoverColor"?: any;
        /**
          * Specify wrapper HTML element
         */
        "as"?: | 'div'
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'p'
    | 'blockquote'
    | 'caption'
    | 'endnote'
    | 'span';
        /**
          * Specify font color
         */
        "color"?: any;
        /**
          * Specify font size
         */
        "fontSize"?: number;
        /**
          * Control font weight
         */
        "fontWeight"?: 'regular' | 'bold' | 'extraBold';
        "isClickable"?: boolean;
        /**
          * Define the space between characters in a text
         */
        "letterSpacing"?: number;
        /**
          * Define the height of a line
         */
        "lineHeight"?: number;
        /**
          * Control amount of white space around the box component itself.
         */
        "margin"?: SPACE_TEXT;
        /**
          * Define amount of space at bottom side only.
         */
        "marginBottom"?: SPACE_TEXT;
        /**
          * Define amount of space at left side only.
         */
        "marginLeft"?: SPACE_TEXT;
        /**
          * Define amount of space at right side only.
         */
        "marginRight"?: SPACE_TEXT;
        /**
          * Define amount of space at top side only.
         */
        "marginTop"?: SPACE_TEXT;
        /**
          * Control amount of white space around child components inside of a box
         */
        "padding"?: SPACE_TEXT;
        /**
          * Define amount of white space at bottom side only
         */
        "paddingBottom"?: SPACE_TEXT;
        /**
          * Define amount of white space at left side only
         */
        "paddingLeft"?: SPACE_TEXT;
        /**
          * Define amount of white space at right side only
         */
        "paddingRight"?: SPACE_TEXT;
        /**
          * Define amount of white space at top side only
         */
        "paddingTop"?: SPACE_TEXT;
    }
    interface SrTextArea {
        /**
          * Indicate the purpose of the text field
         */
        "helperText"?: string;
        /**
          * Error State
         */
        "isError"?: boolean;
        /**
          * Text label to place alongside the input
         */
        "label"?: string;
        /**
          * Emitted when the input's value changes
         */
        "on_change"?: (event: SrTextAreaCustomEvent<any>) => void;
        /**
          * The text to display when the input is empty
         */
        "placeholder"?: string;
    }
    interface SrTextInput {
        /**
          * Indicate the purpose of the text field
         */
        "helperText"?: string;
        /**
          * Indicate whether this text field is disabled or not
         */
        "isDisabled"?: boolean;
        /**
          * Indicate Error state
         */
        "isError"?: boolean;
        /**
          * Indicate whether this text field is readonly or not
         */
        "isReadOnly"?: boolean;
        /**
          * Indicate whether this text field is required or not
         */
        "isRequired"?: boolean;
        /**
          * Indicate Success state
         */
        "isSuccess"?: boolean;
        /**
          * Text label to place alongside the input
         */
        "label"?: string;
        /**
          * Emitted when the input's value changes
         */
        "on_change"?: (event: SrTextInputCustomEvent<any>) => void;
        /**
          * The text to display when the input is empty
         */
        "placeholder"?: string;
        /**
          * Specify type of text field
         */
        "type"?: 'number' | 'text' | 'email';
        /**
          * Specify current value in text field
         */
        "value"?: any;
        /**
          * Specify Button variant
         */
        "variant"?: 'rounded' | 'squared';
    }
    interface IntrinsicElements {
        "sr-anchor": SrAnchor;
        "sr-box": SrBox;
        "sr-breadcrumb": SrBreadcrumb;
        "sr-breadcrumb-item": SrBreadcrumbItem;
        "sr-button": SrButton;
        "sr-callout": SrCallout;
        "sr-card": SrCard;
        "sr-combobox": SrCombobox;
        "sr-flex": SrFlex;
        "sr-heading": SrHeading;
        "sr-help-text": SrHelpText;
        "sr-label": SrLabel;
        "sr-list": SrList;
        "sr-paragraph": SrParagraph;
        "sr-stack": SrStack;
        "sr-text": SrText;
        "sr-text-area": SrTextArea;
        "sr-text-input": SrTextInput;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "sr-anchor": LocalJSX.SrAnchor & JSXBase.HTMLAttributes<HTMLSrAnchorElement>;
            "sr-box": LocalJSX.SrBox & JSXBase.HTMLAttributes<HTMLSrBoxElement>;
            "sr-breadcrumb": LocalJSX.SrBreadcrumb & JSXBase.HTMLAttributes<HTMLSrBreadcrumbElement>;
            "sr-breadcrumb-item": LocalJSX.SrBreadcrumbItem & JSXBase.HTMLAttributes<HTMLSrBreadcrumbItemElement>;
            "sr-button": LocalJSX.SrButton & JSXBase.HTMLAttributes<HTMLSrButtonElement>;
            "sr-callout": LocalJSX.SrCallout & JSXBase.HTMLAttributes<HTMLSrCalloutElement>;
            "sr-card": LocalJSX.SrCard & JSXBase.HTMLAttributes<HTMLSrCardElement>;
            "sr-combobox": LocalJSX.SrCombobox & JSXBase.HTMLAttributes<HTMLSrComboboxElement>;
            "sr-flex": LocalJSX.SrFlex & JSXBase.HTMLAttributes<HTMLSrFlexElement>;
            "sr-heading": LocalJSX.SrHeading & JSXBase.HTMLAttributes<HTMLSrHeadingElement>;
            "sr-help-text": LocalJSX.SrHelpText & JSXBase.HTMLAttributes<HTMLSrHelpTextElement>;
            "sr-label": LocalJSX.SrLabel & JSXBase.HTMLAttributes<HTMLSrLabelElement>;
            "sr-list": LocalJSX.SrList & JSXBase.HTMLAttributes<HTMLSrListElement>;
            "sr-paragraph": LocalJSX.SrParagraph & JSXBase.HTMLAttributes<HTMLSrParagraphElement>;
            "sr-stack": LocalJSX.SrStack & JSXBase.HTMLAttributes<HTMLSrStackElement>;
            "sr-text": LocalJSX.SrText & JSXBase.HTMLAttributes<HTMLSrTextElement>;
            "sr-text-area": LocalJSX.SrTextArea & JSXBase.HTMLAttributes<HTMLSrTextAreaElement>;
            "sr-text-input": LocalJSX.SrTextInput & JSXBase.HTMLAttributes<HTMLSrTextInputElement>;
        }
    }
}
