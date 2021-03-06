import { c as css } from '../external/lit-element.js';

const iuiButtonDefaultStyle = css`
    .iui-button {
        background: var(--button-background, #e5e5e5);
        border: var(--button-border, thin solid #cecece);
        border-color: var(--button-border-color, #cecece);
        border-radius: var(--button-border-radius, 3px);
        color: var(--button-color, black);
        cursor: var(--button-cursor, default);
        display: var(--button-display, inline-block);
        margin: var(--button-margin, 0);
        overflow: hidden;
        padding: var(--button-padding, 5px);
        position: relative;

        -webkit-user-select: none;
        -khtml-user-select: none;
        -moz-user-select: none;
        -o-user-select: none;
        -ms-user-select: none;
        user-select: none;
    }
    .iui-button-hovered {
        background: var(--button-hovered-background, #efefef);
        border: var(--button-hovered-border, thin solid #cecece);
        border-color: var(--button-hovered-border-color, #cecece);
        color: var(--button-hovered-color, black);
    }
    .iui-button-selected {
        background: var(--button-selected-background, #d5d5d5);
        border: var(--button-selected-border, thin solid #bebebe);
        border-color: var(--button-selected-border-color, #bebebe);
        color: var(--button-selected-color, black);
    }

    /* Disabled State */
    .iui-button-disabled {
        opacity: var(--button-disabled-opacity, 0.75);
        pointer-events: none;
    }
`;

export { iuiButtonDefaultStyle };
