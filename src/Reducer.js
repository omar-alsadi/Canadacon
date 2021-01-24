// To get items from the page

const getUserStorage = localStorage.getItem("currentUser")
    ? JSON.parse(localStorage.getItem("currentUser"))
    : null;

const getLanStorage = localStorage.getItem("isEnglish")
    ? JSON.parse(localStorage.getItem("isEnglish"))
    : true;

const getNavStorage = localStorage.getItem("navScrolled")
    ? JSON.parse(localStorage.getItem("navScrolled"))
    : false;

// To save items even refreshing the page

export const setStorage = (currentUser, isEnglish, navScrolled) => {
    localStorage.setItem(
        "currentUser",
        currentUser ? currentUser : ''
    );
    localStorage.setItem(
        "isEnglish",
        JSON.stringify(isEnglish ? true : false)
    );
    localStorage.setItem(
        "navScrolled",
        JSON.stringify(navScrolled ? true : false)
    );
};


export const INITIAL_STATE = {
    currentUser: getUserStorage,
    isEnglish: getLanStorage,
    navScrolled: getNavStorage,
    isOpen: false,
    userMenu: false,
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
                error: ''
            }
        case 'SIGN_OUT_SUCCESS':
            return {
                ...state,
                currentUser: null,
                error: ''
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