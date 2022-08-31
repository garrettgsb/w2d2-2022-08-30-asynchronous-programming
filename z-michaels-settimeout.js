const fn = () => {
  console.log('4311o');
};

const hello__timeoutObject = setTimeout(fn, 20000);

document.addEventListener('mousemove', () => clearTimeout(hello));

const hello__fn = () => setTimeout(fn, 20000);

hello__fn();
