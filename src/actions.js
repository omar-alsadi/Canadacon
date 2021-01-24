
export const toggleNav = () => ({
    type: 'TOGGLE_NAV'
})

export const toggleEn = () => ({
    type: 'TOGGLE_LANGUAGE'
})

export const toggleUserMenu = () => ({
    type: 'TOGGLE_USER_MENU'
})

export const checkUserSession = () => ({
    type: 'CHECK_USER_SESSION'
})

export const signInSuccess = user => ({
    type: 'SIGN_IN_SUCCESS',
    payload: user,
})

export const signOutSuccess = () => ({
    type: 'SIGN_OUT_SUCCESS'
})

export const signFailure = error => ({
    type: 'SIGN_FAILURE',
    payload: error
})

export const signOutFailure = error => ({
    type: 'SIGN_FAILURE',
    payload: error
})

export const isScrollingTop = () => ({
    type: "IS_SCROLLING_TOP"
})

export const isScrollingBack = () => ({
    type: "IS_SCROLLING_BACK"
})
