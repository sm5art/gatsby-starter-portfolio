export const getDimensions = () => ({
    width: window.innerWidth,
    height: window.innerHeight
})

const isMobile = () => getDimensions().width < 500;

// is mobile function
export let IS_MOBILE = typeof(window) !== 'undefined' ? isMobile() :  false;

typeof(window) !== 'undefined' && window.addEventListener("resize", ()=>IS_MOBILE=isMobile());
