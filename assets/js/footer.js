const footerContainer = document.createElement('footer');
footerContainer.classList.add('wrapper', 'style1', 'align-center');

footerContainer.innerHTML = `
    <div class="inner">
        <ul class="icons">
            ${generateSocialIcons([
                { href: "https://www.facebook.com/SketchMeFarial", iconClass: "brands style2 fa-facebook-f", label: "Facebook" },
                { href: "https://github.com/T-Farial", iconClass: "brands style2 fa-github", label: "Github" },
                { href: "https://www.linkedin.com/in/farialtasnim/", iconClass: "brands style2 fa-linkedin-in", label: "LinkedIn" },
                { href: "mailto:farial.tasnim.bme@gmail.com", iconClass: "style2 fa-envelope", label: "Email" },
                { href: "https://grabcad.com/farial.tasnim-2", iconClass: "solid style2 fa-cube", label: "GrabCAD" } 
            ])}
        </ul>
        <p>This is an Independent Work of Farial Tasnim.<br>All rights reserved.</p>
    </div>
`;

document.body.appendChild(footerContainer);

function generateSocialIcons(icons) {
    return icons
        .map(icon => `
            <li>
                <a href="${icon.href}" class="icon ${icon.iconClass}">
                    <span class="label">${icon.label}</span>
                </a>
            </li>
        `)
        .join('');
}


