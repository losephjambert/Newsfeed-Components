export default function createElement(type, classes = null, id = null) {
  const element = document.createElement(type);

  classes !== null && element.classList.add(...classes);
  id !== null && element.setAttribute('id', id);

  return element;
}
