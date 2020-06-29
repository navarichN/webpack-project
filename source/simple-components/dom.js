export default (text = 'Привет😄') => {
    const element = document.createElement('div');

    element.innerHTML = text;

    return element;
};