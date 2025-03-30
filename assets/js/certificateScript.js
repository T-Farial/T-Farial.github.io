const sectionContainerOuter = document.querySelector('.wrapper.style1.align-center');
const upperDiv = document.createElement('div');
upperDiv.classList.add('inner');
upperDiv.innerHTML = `
    <h2>Certifications</h2>
    <p>Here’s what I’ve explored beyond the classroom—certifications, research, and hands-on experience. A mix of learning, applying, and pushing boundaries. These mostly include, but are not limited to, online courses completed on platforms such as Coursera and Udemy.</p>
`;

const med = 3;
const eng = 16;

const certificateList = [
    // Medical
    {
        class: "icon solid style2 major fa-bone",
        title: "Anatomy",
        desc: "University of Michigan<br><h6>Issued March 2025</h6>"
    },
    {
        class: "icon solid style2 major fa-brain",
        title: "Medical Neuroscience",
        desc: "Duke University"
    },

    // Engineering
    {
        class: "icon solid style2 major fa-code",
        title: "Programming for Everybody (Python)",
        desc: "University of Michigan<br><h6>Issued December 2024</h6>"
    },
    {
        class: "icon solid style2 major fa-dna",
        title: "Big Data, Genes and Medicine",
        desc: "State University of New York<br><h6>Issued February 2022</h6>"
    },
    {
        class: "icon solid style2 major fa-laptop",
        title: "Build Your Portfolio Website with HTML/CSS",
        desc: "Coursera Project Network<br><h6>Issued July 2020</h6>"
    },
    {
        class: "icon solid style2 major fa-lightbulb",
        title: "Introduction to Product Management",
        desc: "Coursera Project Network<br><h6>Issued July 2020</h6>"
    },
    {
        class: "icon solid style2 major fa-phone",
        title: "Android App Development (Java)",
        desc: "Deprecated Guided Projects<br><h6>Issued June 2020</h6>"
    },
    {
        class: "icon solid style2 major fa-tools",
        title: "Fundamental Skills in Engineering Design",
        desc: "University of Leeds"
    },
    {
        class: "icon solid style2 major fa-cogs",
        title: "Applications in Engineering Mechanics",
        desc: "Georgia Institute of Technology"
    },
    {
        class: "icon solid style2 major fa-drafting-compass",
        title: "Introduction to CAD, CAM, and Practical CNC Machining",
        desc: "Autodesk"
    },
    {
        class: "icon solid style2 major fa-microchip",
        title: "Nanotechnology and Nanosensors 1",
        desc: "Israel Institute of Technology"
    },
    {
        class: "icon solid style2 major fa-microchip",
        title: "Nanotechnology and Nanosensors 2",
        desc: "Israel Institute of Technology"
    },
    {
        class: "icon solid style2 major fa-code",
        title: "Introduction to Programming with MATLAB",
        desc: "MATLAB Programming for Engineers and Scientists"
    },
    {
        class: "icon solid style2 major fa-magnet",
        title: "MRI Fundamentals",
        desc: "Korea Advanced Institute of Science and Technology"
    },
    {
        class: "icon solid style2 major fa-image",
        title: "Medical Image Processing",
        desc: "MathWorks"
    },
    

    // Others
    {
        class: "icon solid style2 major fa-balance-scale",
        title: "Criminal Justice",
        desc: "Piet Gotlieb, BSc, Henk Gotlieb<br><h6>Issued August 2021</h6>"
    },
    {
        class: "icon solid style2 major fa-brain",
        title: "Brain and Behavioral Science Fundamentals",
        desc: "Susan Weinschenk, Ph.D<br><h6>Issued August 2021</h6>"
    },
    {
        class: "icon solid style2 major fa-users",
        title: "Learn Social Psychology Fundamentals",
        desc: "Andrew Luttrell, Ph.D<br><h6>Issued August 2021</h6>"
    },
    {
        class: "icon solid style2 major fa-brain",
        title: "Introduction to Psychology",
        desc: "Yale University<br><h6>Issued June 2020</h6>"
    },
    {
        class: "icon solid style2 major fa-user-md",
        title: "Psychological First Aid",
        desc: "Johns Hopkins University<br><h6>Issued May 2020</h6>"
    },
    {
        class: "icon solid style2 major fa-user",
        title: "Humanistic Psychology and Existential Psychotherapy",
        desc: "Glory Boyadzhieva"
    },
    {
        class: "icon solid style2 major fa-hospital",
        title: "Advanced Clinical Experience and Evidence-Based Practice in Behavioral Health",
        desc: "Lacie Sleezer"
    }
];

let cnt = 1;

const divContainer_1 = document.createElement('div');
divContainer_1.classList.add('items', 'style1', 'medium', 'onscroll-fade-in');
const divContainer_2 = document.createElement('div');
divContainer_2.classList.add('items', 'style1', 'medium', 'onscroll-fade-in');
const divContainer_3 = document.createElement('div');
divContainer_3.classList.add('items', 'style1', 'medium', 'onscroll-fade-in');

certificateList.forEach(item => {
    const cardSection = document.createElement('section');
    cardSection.innerHTML = `
        <span class="${item.class}"></span>
        <h3>${item.title}</h3>
        <p>${item.desc}</p>
    `;
    if(cnt < med){
        divContainer_1.append(cardSection);
    }
    else if(cnt >= med && cnt < eng){
        divContainer_2.append(cardSection);
    }
    else {
        divContainer_3.append(cardSection);
    }
    cnt += 1;
});

const medHeading = [];
medHeading[0] = document.createElement('p');
medHeading[1] = document.createElement('p');
medHeading[2] = document.createElement('p');
medHeading[0].innerHTML = "<h3 style='font-weight:bold; border-bottom: 3px solid #333; padding-bottom: 5px;'>Medical</h3>";
medHeading[1].innerHTML = "<h3 style='font-weight:bold; border-bottom: 3px solid #333; padding-bottom: 5px;'>Engineering</h3>";
medHeading[2].innerHTML = "<h3 style='font-weight:bold; border-bottom: 3px solid #333; padding-bottom: 5px;'>Miscellaneous</h3>";


upperDiv.append(medHeading[0]);
upperDiv.append(divContainer_1);
upperDiv.append(medHeading[1]);
upperDiv.append(divContainer_2);
upperDiv.append(medHeading[2]);
upperDiv.append(divContainer_3);
sectionContainerOuter.append(upperDiv);
