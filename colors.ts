/**
 * DDS Color Tokens
 * Daekyo Design System - Color definitions
 */

// =============================================================================
// Core Colors - 기본 색상 팔레트
// =============================================================================

export const coreColors = {
  neutral: {
    0: '#FFFFFF',
    5: '#F1F4F8',
    10: '#E3E8ED',
    20: '#D4DCE2',
    30: '#C6D0D7',
    40: '#ABB6BF',
    50: '#8C98A1',
    60: '#6A747C',
    70: '#545D64',
    80: '#394046',
    90: '#202427',
    100: '#0B0D11',
  },
  blue: {
    5: '#F3F6FF',
    10: '#DAE3FF',
    20: '#B7C8FF',
    30: '#8EABFF',
    40: '#628AFF',
    50: '#416DF0',
    60: '#2856E0',
    70: '#1942BC',
    80: '#0E2F91',
    90: '#082271',
  },
  lightblue: {
    5: '#EDF8FC',
    10: '#D2EFFA',
    20: '#B4E6FB',
    30: '#8DDAF9',
    40: '#57C7F3',
    50: '#15B2F1',
    60: '#049EDC',
    70: '#007DAF',
    80: '#045F84',
    90: '#06435B',
  },
  green: {
    5: '#ECF8F3',
    10: '#DAF1E5',
    20: '#B5E3CB',
    30: '#8FD5B0',
    40: '#6AC796',
    50: '#45B97C',
    60: '#269E5F',
    70: '#167D46',
    80: '#145E37',
    90: '#0A4325',
  },
  red: {
    5: '#FEF5F5',
    10: '#FCDEDF',
    20: '#F9B8BB',
    30: '#F68D91',
    40: '#F4686D',
    50: '#E14D52',
    60: '#CA383E',
    70: '#A32429',
    80: '#7E0A0E',
    90: '#570407',
  },
  yellow: {
    5: '#FFF8E7',
    10: '#FFF1D0',
    20: '#FEE3A1',
    30: '#FED571',
    40: '#FECA4A',
    50: '#FDB913',
    60: '#D89A00',
    70: '#A37402',
    80: '#6B4D03',
    90: '#503800',
  },
  orange: {
    5: '#FEF1E9',
    10: '#FDE3D3',
    20: '#FAC7A6',
    30: '#F8AB7A',
    40: '#F58F4D',
    50: '#F37321',
    60: '#DA6113',
    70: '#A54D16',
    80: '#6E330D',
    90: '#482815',
  },
  violet: {
    5: '#F6F2FC',
    10: '#EBE3FB',
    20: '#DED2F8',
    30: '#CEBBF8',
    40: '#B58DF9',
    50: '#9B6BF4',
    60: '#8154D4',
    70: '#6944AF',
    80: '#503585',
    90: '#392462',
  },
  pink: {
    5: '#FFF3FB',
    10: '#FFE2F5',
    20: '#FFC7EC',
    30: '#FFA6D8',
    40: '#FD80CB',
    50: '#FC60B4',
    60: '#DE4397',
    70: '#AC3A77',
    80: '#832759',
    90: '#5B143A',
  },
} as const;

// =============================================================================
// Alpha Colors - 투명도가 적용된 색상
// =============================================================================

export const alphaColors = {
  black: {
    8: 'rgba(11, 13, 17, 0.08)',
    12: 'rgba(11, 13, 17, 0.12)',
    24: 'rgba(11, 13, 17, 0.24)',
    32: 'rgba(11, 13, 17, 0.32)',
    48: 'rgba(11, 13, 17, 0.48)',
    60: 'rgba(11, 13, 17, 0.60)',
    80: 'rgba(11, 13, 17, 0.80)',
    96: 'rgba(11, 13, 17, 0.96)',
  },
  white: {
    8: 'rgba(255, 255, 255, 0.08)',
    12: 'rgba(255, 255, 255, 0.12)',
    24: 'rgba(255, 255, 255, 0.24)',
    32: 'rgba(255, 255, 255, 0.32)',
    48: 'rgba(255, 255, 255, 0.48)',
    60: 'rgba(255, 255, 255, 0.60)',
    80: 'rgba(255, 255, 255, 0.80)',
    96: 'rgba(255, 255, 255, 0.96)',
  },
  blue: {
    8: 'rgba(65, 109, 240, 0.08)',
    12: 'rgba(65, 109, 240, 0.12)',
    24: 'rgba(65, 109, 240, 0.24)',
    32: 'rgba(65, 109, 240, 0.32)',
    48: 'rgba(65, 109, 240, 0.48)',
    60: 'rgba(65, 109, 240, 0.60)',
    80: 'rgba(65, 109, 240, 0.80)',
    96: 'rgba(65, 109, 240, 0.96)',
  },
  gray: {
    8: 'rgba(140, 152, 161, 0.08)',
    12: 'rgba(140, 152, 161, 0.12)',
    24: 'rgba(140, 152, 161, 0.24)',
    32: 'rgba(140, 152, 161, 0.32)',
    48: 'rgba(140, 152, 161, 0.48)',
    60: 'rgba(140, 152, 161, 0.60)',
    80: 'rgba(140, 152, 161, 0.80)',
    96: 'rgba(140, 152, 161, 0.96)',
  },
} as const;

// =============================================================================
// Scale Colors - 채도/명도 조정된 색상
// =============================================================================

export const scaleColors = {
  neutral: {
    white: coreColors.neutral[0],
    lightest: coreColors.neutral[10],
    lighter: coreColors.neutral[20],
    light: coreColors.neutral[30],
    default: coreColors.neutral[50],
    dark: coreColors.neutral[60],
    darker: coreColors.neutral[80],
    darkest: coreColors.neutral[100],
  },
  accent: {
    lightest: coreColors.blue[10],
    lighter: coreColors.blue[20],
    light: coreColors.blue[30],
    default: coreColors.blue[50],
    dark: coreColors.blue[70],
    darker: coreColors.blue[80],
    darkest: coreColors.blue[90],
  },
  brand: {
    lightest: coreColors.lightblue[5],
    lighter: coreColors.lightblue[10],
    light: coreColors.lightblue[30],
    default: coreColors.lightblue[50],
    dark: coreColors.lightblue[70],
    darker: coreColors.lightblue[80],
    darkest: coreColors.lightblue[90],
  },
  positive: {
    lightest: coreColors.green[5],
    lighter: coreColors.green[10],
    light: coreColors.green[30],
    default: coreColors.green[50],
    dark: coreColors.green[60],
    darker: coreColors.green[70],
    darkest: coreColors.green[90],
  },
  negative: {
    lightest: coreColors.red[5],
    lighter: coreColors.red[10],
    light: coreColors.red[30],
    default: coreColors.red[50],
    dark: coreColors.red[70],
    darker: coreColors.red[80],
    darkest: coreColors.red[90],
  },
  caution: {
    lightest: coreColors.yellow[5],
    lighter: coreColors.yellow[20],
    light: coreColors.yellow[30],
    default: coreColors.yellow[50],
    dark: coreColors.yellow[60],
    darker: coreColors.yellow[70],
    darkest: coreColors.yellow[90],
  },
} as const;

// =============================================================================
// Semantic Colors - 용도별 색상
// =============================================================================

export const semanticColors = {
  background: {
    default: scaleColors.neutral.white,
    neutral: scaleColors.neutral.lightest,
    neutralDark: scaleColors.neutral.lighter,
    neutralDarker: scaleColors.neutral.default,
    invert: scaleColors.neutral.darkest,
    disabled: alphaColors.gray[24],
    skeleton: scaleColors.neutral.lighter,
    scrollbar: scaleColors.neutral.lighter,
    dim: alphaColors.black[60],
    overlay: alphaColors.white[80],
    toast: alphaColors.black[80],
    // Brand
    brandLight: scaleColors.brand.lightest,
    brand: scaleColors.brand.default,
    brandDark: scaleColors.brand.dark,
    // Accent
    accentLight: scaleColors.accent.lighter,
    accent: scaleColors.accent.default,
    accentDark: scaleColors.accent.darker,
    // Positive
    positiveLight: scaleColors.positive.lightest,
    positive: scaleColors.positive.default,
    positiveDark: scaleColors.positive.darker,
    // Negative
    negativeLight: scaleColors.negative.lightest,
    negative: scaleColors.negative.default,
    negativeDark: scaleColors.negative.dark,
    // Caution
    cautionLight: scaleColors.caution.lightest,
    caution: scaleColors.caution.default,
    cautionDark: scaleColors.caution.darker,
  },
  text: {
    primary: scaleColors.neutral.darkest,
    secondary: scaleColors.neutral.darker,
    tertiary: scaleColors.neutral.dark,
    lowest: scaleColors.neutral.default,
    disabled: alphaColors.black[24],
    invert: scaleColors.neutral.white,
    link: coreColors.violet[50],
    linkSub: scaleColors.neutral.default,
    // Brand
    brandLight: scaleColors.brand.light,
    brand: scaleColors.brand.default,
    brandDark: scaleColors.brand.darkest,
    // Accent
    accentLight: scaleColors.accent.lighter,
    accent: scaleColors.accent.default,
    accentDark: scaleColors.accent.darkest,
    // Positive
    positiveLight: scaleColors.positive.light,
    positive: scaleColors.positive.default,
    positiveDark: scaleColors.positive.darker,
    // Negative
    negativeLight: scaleColors.negative.light,
    negative: scaleColors.negative.default,
    negativeDark: scaleColors.negative.darker,
    // Caution
    cautionLight: scaleColors.caution.light,
    caution: scaleColors.caution.default,
    cautionDark: scaleColors.caution.darker,
  },
  border: {
    light: scaleColors.neutral.lighter,
    default: scaleColors.neutral.light,
    dark: scaleColors.neutral.default,
    darker: scaleColors.neutral.dark,
    black: scaleColors.neutral.darkest,
    invert: scaleColors.neutral.white,
    disabled: alphaColors.black[24],
    // Brand
    brandLight: scaleColors.brand.light,
    brand: scaleColors.brand.default,
    brandDark: scaleColors.brand.darker,
    // Accent
    accentLight: scaleColors.accent.light,
    accent: scaleColors.accent.default,
    accentDark: scaleColors.accent.darker,
    // Positive
    positiveLight: scaleColors.positive.light,
    positive: scaleColors.positive.default,
    positiveDark: scaleColors.positive.darker,
    // Negative
    negativeLight: scaleColors.negative.light,
    negative: scaleColors.negative.default,
    negativeDark: scaleColors.negative.darker,
    // Caution
    cautionLight: scaleColors.caution.lighter,
    caution: scaleColors.caution.default,
    cautionDark: scaleColors.caution.darker,
  },
  icon: {
    primary: scaleColors.neutral.darkest,
    secondary: scaleColors.neutral.darker,
    tertiary: scaleColors.neutral.dark,
    lowest: scaleColors.neutral.default,
    disabled: alphaColors.black[24],
    invert: scaleColors.neutral.white,
    link: coreColors.violet[50],
    linkSub: scaleColors.neutral.default,
    // Brand
    brandLight: scaleColors.brand.light,
    brand: scaleColors.brand.default,
    brandDark: scaleColors.brand.darkest,
    // Accent
    accentLight: scaleColors.accent.lighter,
    accent: scaleColors.accent.default,
    accentDark: scaleColors.accent.darkest,
    // Positive
    positiveLight: scaleColors.positive.light,
    positive: scaleColors.positive.default,
    positiveDark: scaleColors.positive.darker,
    // Negative
    negativeLight: scaleColors.negative.light,
    negative: scaleColors.negative.default,
    negativeDark: scaleColors.negative.darker,
    // Caution
    cautionLight: scaleColors.caution.light,
    caution: scaleColors.caution.default,
    cautionDark: scaleColors.caution.darker,
  },
} as const;

// =============================================================================
// Static Colors - 고정 색상
// =============================================================================

export const staticColors = {
  blue: coreColors.blue[50],
  lightblue: coreColors.lightblue[50],
  green: coreColors.green[50],
  red: coreColors.red[50],
  yellow: coreColors.yellow[50],
  orange: coreColors.orange[50],
  violet: coreColors.violet[50],
  pink: coreColors.pink[50],
  gray: coreColors.neutral[50],
} as const;

// =============================================================================
// Export all colors
// =============================================================================

export const colors = {
  core: coreColors,
  alpha: alphaColors,
  scale: scaleColors,
  semantic: semanticColors,
  static: staticColors,
} as const;

export type Colors = typeof colors;
