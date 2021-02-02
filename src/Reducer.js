// To get items from the page

const getLanStorage = typeof window !== 'undefined' && window.localStorage.getItem("isEnglish")
    ? JSON.parse(localStorage.getItem("isEnglish"))
    : true;

const getNavStorage = typeof window !== 'undefined' && window.localStorage.getItem("navScrolled")
    ? JSON.parse(localStorage.getItem("navScrolled"))
    : false;

const getUserStorage = typeof window !== 'undefined' && window.localStorage.getItem("isUserSigned")
    ? JSON.parse(localStorage.getItem("isUserSigned"))
    : false;

// To save items even refreshing the page

export const setStorage = (isEnglish, navScrolled, currentUser) => {
    typeof window !== 'undefined' && window.localStorage.setItem(
        "isEnglish",
        JSON.stringify(isEnglish ? true : false)
    );
    typeof window !== 'undefined' && window.localStorage.setItem(
        "navScrolled",
        JSON.stringify(navScrolled ? true : false)
    );
    typeof window !== 'undefined' && window.localStorage.setItem(
        "isUserSigned",
        JSON.stringify(currentUser ? true : false)
    );
};


export const INITIAL_STATE = {
    currentUser: null,
    isEnglish: getLanStorage,
    navScrolled: getNavStorage,
    isOpen: false,
    userMenu: false,
    isVisible: false,
    isUserSigned: getUserStorage,
    error: ''
}


const Reducer = (state = INITIAL_STATE, action) => {

    switch (action.type) {
        case 'TOGGLE_NAV':
            return {
                ...state,
                isOpen: !state.isOpen
            };
        case 'TOGGLE_LANGUAGE':
            return {
                ...state,
                isEnglish: !state.isEnglish
            };
        case 'TOGGLE_USER_MENU':
            return {
                ...state,
                userMenu: !state.userMenu
            };
        case 'SIGN_IN_SUCCESS':
            return {
                ...state,
                currentUser: action.payload,
                error: '',
                isUserSigned: true
            }
        case 'SIGN_OUT_SUCCESS':
            return {
                ...state,
                currentUser: null,
                error: '',
                isUserSigned: false
            }
        case 'SIGN_FAILURE':
            return {
                ...state,
                error: action.payload
            }
        case "IS_SCROLLING_TOP":
            return {
                ...state,
                navScrolled: false
            }
        case "IS_SCROLLING_BACK":
            return {
                ...state,
                navScrolled: true
            }
        default:
            return state;
    }

}

export default Reducer