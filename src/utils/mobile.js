export const getDimensions = () => ({
    width: window.innerWidth,
    height: window.innerHeight
})

const isMobile = () => getDimensions().width < 500;

export const setMobile = ()=>IS_MOBILE=isMobile();
// is mobile function
export let IS_MOBILE = typeof(window) !== 'undefined' ? isMobile() :  true;

typeof(window) !== 'undefined' && window.addEventListener("resize", setMobile);
