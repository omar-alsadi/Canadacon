
export const toggleNav = () => ({
    type: 'TOGGLE_NAV'
})


export const toggleEn = () => ({
    type: 'TOGGLE_LANGUAGE'
})

export const signIn = user => ({
    type: 'SIGN_IN_SUCCESS',
    currentUser: user
})

export const isScrollingTop = () => ({
    type: "IS_SCROLLING_TOP"
})

export const isScrollingBack = () => ({
    type: "IS_SCROLLING_BACK"
})
