document.addEventListener('DOMContentLoaded', function() {
    // Set initial state
    const abstract = document.querySelector('.abstract');
    abstract.style.maxHeight = '0px';
    abstract.style.opacity = '0';
});

function toggleAbstract(element) {
    const abstract = element.parentElement.querySelector('.abstract');
    const blogHeadline = element.parentElement.querySelector('.blog-headline');
    if (abstract.style.maxHeight === '0px') {
        abstract.style.maxHeight = abstract.scrollHeight + 'px';
        abstract.style.opacity = '1';
        abstract.style.marginTop = '5px';
        abstract.style.marginBottom = '5px';
    } else {
        abstract.style.maxHeight = '0px';
        abstract.style.opacity = '0';
        abstract.style.marginTop = '0px';
        abstract.style.marginBottom = '0px';
    }
} 