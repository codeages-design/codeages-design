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

export const getMousePos = (event) => {
  const e = event || window.event;
  const scrollX = document.documentElement.scrollLeft || document.body.scrollLeft;
  const scrollY = document.documentElement.scrollTop || document.body.scrollTop;
  const x = e.pageX || e.clientX + scrollX;
  const y = e.pageY || e.clientY + scrollY;

  return { x, y };
}

export const getUUID = (prefix) => {
  do prefix += ~~(Math.random() * 1000000)
  while (document.getElementById(prefix));
  return prefix;
}