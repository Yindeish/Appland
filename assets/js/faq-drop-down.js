let collapsed = [...document.querySelectorAll('.collapsed')];
let iconShowIconOnClick = [...document.querySelectorAll('.icon-show-on-click')];
let iconCloseIconOnClick = [...document.querySelectorAll('.icon-close-on-click')];
collapsed.forEach(collapsedElement => {
    collapsedElement.addEventListener('click', () => {
    iconShowIconOnClick.forEach(showIcon => {
        showIcon.classList.toggle('toggler-icon-show');
    });
    iconCloseIconOnClick.forEach(closeIcon => {
        closeIcon.classList.toggle('toggler-icon-close');
    });
    })
})
