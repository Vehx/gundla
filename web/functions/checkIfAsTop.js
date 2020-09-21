export const checkAtTop = () => {
  if (process.browser) {
    let prevScrollpos = window.pageYOffset;
    window.onscroll = () => {
      const currentScrollPos = window.pageYOffset;
      let currentState = prevScrollpos >= 100 ? false : true;
      prevScrollpos = currentScrollPos;
      console.log(currentState);
      return currentState;
    };
  }
};
