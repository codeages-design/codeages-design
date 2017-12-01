export const getPosition = (el) => {
  const elRect = el.getBoundingClientRect();
  const isBody = el.tagName == 'BODY';
  const elOffset = isBody ? { top: 0, left: 0 } : $(el).offset();
  const scroll = { 
    scroll: isBody ? document.documentElement.scrollTop || document.body.scrollTop : $(el).scrollTop() 
  }
  const outerDims = isBody ? { width: $(window).width(), height: $(window).height() } : null;

  return $.extend({}, elRect, scroll, outerDims, elOffset);
}