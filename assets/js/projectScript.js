const sectionContainer = document.querySelector('.projects-container'); 

const projects = [
    {
        projectName: "Design and Development of Low-Cost Transfemoral Prosthesis",
        duration: "February 2020 – March 2021",
        projectDesc: [
            "Conducted an exhaustive literature review to design a prosthetic limb using SOLIDWORKS.",
            "Developed a fully functional mechanical prototype by 3D printing, ensuring fabrication that seamlessly integrates both functional and aesthetic considerations.",
            "Prioritized user comfort and discretion, ensuring easy use and psychological aspects of amputees.",
            "Published a peer-reviewed conference paper titled 'Design and Development of Low-Cost Transfemoral Prosthesis' at ICSTB-2021-BCSIR, highlighting contributions to the field of prosthetics and rehabilitation."
        ]
    },
    {
        projectName: "Designing Flow-Diverter Stent for the Treatment of Cerebral Aneurysm",
        duration: "July 2020 – November 2020",
        projectDesc: [
            "Designed an idealized geometry using SOLIDWORKS focused on creating a precise and optimized model to serve as the foundation.",
            "Employed CFD using ANSYS to conduct detailed analyses comparing the fluid dynamics with and without a stent, which helped examine the impact of the stent on fluid flow dynamics."
        ]
    },
    {
        projectName: "Bluetooth Controlled Car (RC)",
        duration: "December 2019 - December 2019",
        projectDesc: [
            "Used Arduino Uno as the processor.", 
            "There were L293D dual motor drivers.",
            "It had a BlueTooth module and definitely gear motors.",
            "It could be controlled by an app in the smartphone to move as desired and it had LED front and back lights."
        ]
    },
    {
        projectName: "Wheelchair with Digital Logic Gates",
        duration: "January 2019 – May 2019",
        projectDesc: [
            "Developed a wheelchair prototype utilizing a button-controlled arm-mounted controller to allow directional control.",
            "Integrated a monitoring system that triggered an alarm when the battery level dropped below 25%, ensuring continuous operation without unexpected interruptions.",
            "Equipped with a rear-mounted proximity detector where the detection range could be adjusted using a variable resistance, enhancing flexibility in different environments."
        ]
    },
    {
        projectName: "Presentation on Existing Models and Feasible Design for the Total Artificial Human Heart",
        duration: "August 2016 – November 2018",
        projectDesc: [
            "Researched historical and contemporary total artificial hearts, optimizing valve dynamics for functionality.",
            "Developed an innovative 3D-printed prototype to advance artificial heart technology.",
            "Presented findings at a national conference in a poster session titled 'The Total Artificial Heart (TAH)'."
        ]
    },
    {
        projectName: "Smart Stick for Blind People with Built-in Alarm System",
        duration: "January 2018 – May 2018",
        projectDesc: [
            "Developed a safety-enhancing device for visually impaired individuals using Arduino Uno microcontroller technology.",
            "Integrated buzzer alarms to provide auditory alerts for obstacles like holes and cracks, improving navigation beyond traditional canes."
        ]
    },
    {
        projectName: "Smart Belt for Visual and Auditory Impaired",
        duration: "January 2018",
        projectDesc: [
            "Designed a wearable safety belt using Arduino Uno with front and back proximity sensors to detect obstacles at an arm's distance.",
            "Integrated an alarm to alert passersby and vibrations to warn visually and auditorily impaired users of potential risks while commuting."
        ]
    },
    {
        projectName: "Quadcopter Drone",
        duration: "January 2017",
        projectDesc: [
            "Designed a quadcopter with a lightweight frame, employing brushless motors and an ESC system for stable flight control.",
            "Utilized an Arduino-based flight controller integrated with an IMU sensor to enhance stability and maneuverability."
        ]
    },
    {
        projectName: "Line Follower Robot",
        duration: "September 2016",
        projectDesc: [
            "Developed an autonomous robot with a rectangular chassis capable of following straight lines using Arduino Uno as the primary controller.",
            "Integrated IR sensors for line detection and L298N motor driver to regulate motor speed and direction, ensuring precise movement."
        ]
    }
];



projects.forEach(item => {
    const card = document.createElement('div');
    card.classList.add('project-card');
    const projectDescHTML = `<ul>${item.projectDesc.map(point => `<li>${point}</li>`).join('')}</ul>`;
    card.innerHTML = `
        <div class="project-details">
            <h3>${item.projectName}</h3>
            <h4>${item.duration}</h4>
            <p>${projectDescHTML}</p>
        </div>
    `;

    sectionContainer.appendChild(card);
});
