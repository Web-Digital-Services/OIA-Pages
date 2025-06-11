//This is the default file for any js

//May split if required

$(document).foundation();

//Homepage hero accordions

const accordionTitles = [{
        id: "brain-health",
        label: "brain health"
    },
    {
        id: "leading-research",
        label: "cancer research"
    },
    {
        id: "treat-diseases",
        label: "infectious disease treatment"
    },
    {
        id: "metabolic-health",
        label: "metabolic health"
    },
    {
        id: "title-here",
        label: "title lorem ipsum"
    },
]

document.addEventListener('click', heroAccordions);

function heroAccordions() {

    accordionTitles.forEach(item => {
        const element = document.getElementById(item.id);

        if (element) {

            const parentWithAria = element.closest('[aria-hidden="false"]');

            if (parentWithAria) {
                const heroText = document.querySelector('span.highlight');

                if (heroText) {
                    heroText.textContent = item.label;
                }
            }
        }
        return;

    });
}





function isDisplayed(element) {
    const style = window.getComputedStyle(element);
    return style.display !== 'none';
}