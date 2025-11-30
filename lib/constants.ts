// lib/constants.ts
// Application-wide constants for maintainability

export const ANIMATION = {
    // Scroll animation duration
    SCROLL_DURATION_SECONDS: 60,

    // Transition durations (in milliseconds)
    TRANSITION_FAST: 200,
    TRANSITION_NORMAL: 300,
    TRANSITION_SLOW: 500,
    TRANSITION_VERY_SLOW: 700,

    // Hover and scale transitions
    HOVER_SCALE_DURATION: 700,
} as const;

export const LAYOUT = {
    // Navigation scroll threshold (when nav becomes sticky)
    NAV_SCROLL_THRESHOLD: 50,

    // Max widths
    MAX_WIDTH_CONTAINER: '7xl',
    MAX_WIDTH_CONTENT: '3xl',
    MAX_WIDTH_NARROW: '2xl',

    // Spacing
    SECTION_PADDING_Y: 'py-20',
    PAGE_PADDING_TOP: 'pt-24',
} as const;

export const FORM = {
    // Validation
    MIN_MESSAGE_LENGTH: 10,
    EMAIL_REGEX: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,

    // Timing
    SUCCESS_MESSAGE_DURATION: 3000, // milliseconds
    SUBMIT_DELAY: 1500, // simulated API delay
} as const;

export const COLORS = {
    ACCENT: 'orange-600',
    ACCENT_HOVER: 'orange-700',
    ACCENT_LIGHT: 'orange-50',
} as const;

export const BREAKPOINTS = {
    SM: 640,
    MD: 768,
    LG: 1024,
    XL: 1280,
    '2XL': 1536,
} as const;
