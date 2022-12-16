import {
  ColorFoundationBlueBlue300,
  ColorFoundationUiGreenUiGreen,
  ColorFoundationNeutralGray300,
} from '../../../design-tokens/js/variables.js';

export const Avatar = {
  small: {
    size: 28,
    sizeStatus: 7,
    labeled: {
      color: ColorFoundationBlueBlue300,
    },
    offline: {
      color: ColorFoundationNeutralGray300,
    },
    online: {
      color: ColorFoundationBlueBlue300,
    },
    listening: {
      color: ColorFoundationUiGreenUiGreen,
    },
    template: {
      color: ColorFoundationBlueBlue300,
    },
  },
  medium: {
    size: 56,
    sizeStatus: 14,
    offline: {
      color: ColorFoundationNeutralGray300,
    },
    online: {
      color: ColorFoundationBlueBlue300,
    },
    listening: {
      color: ColorFoundationUiGreenUiGreen,
    },
    template: {
      color: ColorFoundationBlueBlue300,
    },
  },
  large: {
    size: 112,
    sizeStatus: null,
    verified: {
      color: ColorFoundationBlueBlue300,
    },
    default: {
      color: null,
    },
  },
};
