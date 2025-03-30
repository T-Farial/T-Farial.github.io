const sectionContainer = document.querySelector('.projects-container'); 

const projects = [
    {
        projectImg: "images/grabcad/1.jpg",
        projectName: "Excavator - Volvo EC 360",
        projectDesc: "Crawler Excavators run on large two endless tracks and are often used in mining and heavy-duty construction jobs. These excavators use hydraulic power mechanisms to lift heavy debris and soil. Their chain wheel system allows them to slide down and scale hills with less risk, making them suitable for grading hilly areas and landscaping uneven terrain. While slower than other excavators, crawlers provide overall greater balance, flexibility, and stability.",
        downloads: "3370+",
        likes: "220+",
        projectLink: "https://grabcad.com/library/excavator-volvo-ec-360-1"
    },
    {
        projectImg: "images/grabcad/4.jpg",
        projectName: "Heavy Duty Diesel Forklift",
        projectDesc: "I have done the work in Solidworks2016 but it includes the Parasolid files too. A link to the tutorial I followed has been added in the section for the videos. I have changed bits of it but there is no major difference.",
        downloads: "3100+",
        likes: "200+",
        projectLink: "https://grabcad.com/library/a-heavy-duty-diesel-forklift-1"
    },
    {
        projectImg: "images/grabcad/9.png",
        projectName: "Total Hip Replacement (THR)",
        projectDesc: "Hip replacement is a surgical procedure in which the hip joint is replaced by a prosthetic implant. The surgery can be performed as a total or a hemi replacement. A total hip replacement consists of replacing both the acetabulum and the femoral head while hemiarthroplasty generally only replaces the femoral head.",
        downloads: "1395+",
        likes: "50+",
        projectLink: "https://grabcad.com/library/total-hip-replacement-thr-1"
    },
    {
        projectImg: "images/grabcad/5.jpg",
        projectName: "Robotic Arm T310 (6 DOF)",
        projectDesc: "A type of mechanical arm, programmable, with similar functions to a human arm; the arm may be the sum total of the mechanism or may be part of a more complex robot. The links of such a manipulator are connected by joints allowing rotational or translational displacement. The links of the manipulator can be considered to form a kinematic chain, the terminus of which is called the end effector; it is analogous to the human hand.",
        downloads: "3940+",
        likes: "285+",
        projectLink: "https://grabcad.com/library/robotic-arm-t310-6-dof-1"
    },
    {
        projectImg: "images/grabcad/6.png",
        projectName: "Robotic Gripper",
        projectDesc: "Here a Impactive gripper with 2 fingers, designed in Solidworks 2016. Furthermore, the two servo motors are also designed here in simplified format to help with later simulation. I have included all the parasolid files as well, (.x_t) so that users of other versions of Solidworks can access it.",
        downloads: "3070+",
        likes: "215+",
        projectLink: "https://grabcad.com/library/robotic-gripper-17"
    },
    {
        projectImg: "images/grabcad/7.png",
        projectName: "Servo Motor",
        projectDesc: "A servo motor is a rotary actuator or linear actuator that allows for precise control of angular or linear position, velocity, and acceleration. It consists of a suitable motor coupled to a sensor for position feedback. For this project, all the parts have been assembled and there is a folder with the figures from various views.",
        downloads: "2620+",
        likes: "250+",
        projectLink: "https://grabcad.com/library/servo-motor-65"
    },
    {
        projectImg: "images/grabcad/2.png",
        projectName: "Clamp Mini Bench Vice",
        projectDesc: "An engineer's vise, also known as a metalworking vise or machinist's vise, is used to clamp metal instead of wood. It is used to hold metal when filing or cutting. It is sometimes made of cast steel or malleable cast iron, but most are made of cast iron.",
        downloads: "1215+",
        likes: "115+",
        projectLink: "https://grabcad.com/library/clamp-mini-bench-vice-1"
    },
    {
        projectImg: "images/grabcad/3.png",
        projectName: "Ankle Foot Orthosis (AFO)",
        projectDesc: "An ankle-foot orthosis, or AFO, is a support intended to control the position and motion of the ankle, compensate for weakness, or correct deformities. AFOs can be used to support weak limbs, or to position a limb with contracted muscles into a more normal position. In addition, AFOs are used to control foot drop caused by a variety of neurologic and musculoskeletal disorders.",
        downloads: " 335+",
        likes: " 20+",
        projectLink: "https://grabcad.com/library/ankle-foot-orthosis-afo-1"
    },
    {
        projectImg: "images/grabcad/8.jpg",
        projectName: "Medical Syringe",
        projectDesc: "A medical syringe consists of a needle attached to a hollow cylinder that is fitted with rubber to a sliding plunger. The 4 components have been designed. The downward movement of the plunger injects fluid; upward movement withdraws fluid from the body.",
        downloads: "1065+",
        likes: " 60+",
        projectLink: "https://grabcad.com/library/medical-syringe-3"
    },
    {
        projectImg: "images/grabcad/10.png",
        projectName: "Medical Stent",
        projectDesc: "In brief, a stent is a tiny tube that your doctor can insert into a blocked passageway to keep it open. The stent restores the flow of blood or other fluids, depending on where it's placed. Stents are made of either metal or plastic. Stent grafts are larger stents used for larger arteries.This was done for one of my undergraduate assignments.",
        downloads: "1560+",
        likes: " 50+",
        projectLink: "https://grabcad.com/library/stent-27"
    },
    {
        projectImg: "images/grabcad/11.png",
        projectName: "Syringe pump",
        projectDesc: "In brief, a syringe driver or syringe pump is a small infusion pump, used to gradually administer small amounts of fluid to a patient or for use in chemical and biomedical research. This was an created as an assignment for one of my undergraduate courses.",
        downloads: "1085+",
        likes: " 45+",
        projectLink: "https://grabcad.com/library/syringe-pump-12"
    }
];

projects.forEach(item => {
    const card = document.createElement('div');
    card.classList.add('project-card');
    card.innerHTML = `
        <div class="project-image">
            <img src="../${item.projectImg}" alt="${item.projectName}" />
        </div>
        <div class="project-details">
            <h3>${item.projectName}</h3>
            <p>${item.projectDesc}</p>
            <div class="project-stats">
                <span class="downloads">
                    <i class="icon fa-download"></i> ${item.downloads} Downloads
                </span>
                <span class="likes">
                    <i class="icon fa-heart"></i> ${item.likes} Likes
                </span>
            </div>
            <a href="${item.projectLink}" class="button small">View Project</a>
        </div>
    `;

    sectionContainer.appendChild(card);
});
