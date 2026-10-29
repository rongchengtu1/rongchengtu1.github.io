document.addEventListener('DOMContentLoaded', function () {
    const toggles = [
        ['.menus_icon', '.header_wrap', 'menus-open'],
        ['.m-social-links', '.author-links', 'is-open'],
        ['.site-nav', '.nav', 'nav-open']
    ];
    const close = function (button, container, openClass) {
        container.classList.remove(openClass);
        button.setAttribute('aria-expanded', 'false');
    };
    toggles.forEach(function ([buttonSelector, containerSelector, openClass]) {
        const button = document.querySelector(buttonSelector);
        const container = document.querySelector(containerSelector);
        button.addEventListener('click', function () {
            const open = container.classList.toggle(openClass);
            button.setAttribute('aria-expanded', String(open));
        });
        document.addEventListener('click', function (event) {
            if (!container.contains(event.target) || event.target.closest('a')) close(button, container, openClass);
        });
        document.addEventListener('keydown', function (event) {
            if (event.key === 'Escape') close(button, container, openClass);
        });
    });
    const nav = document.querySelector('.nav-wrap');
    const updateNav = function () { nav.classList.toggle('is-visible', window.scrollY > 100); };
    window.addEventListener('scroll', updateNav, {passive: true});
    updateNav();
});
