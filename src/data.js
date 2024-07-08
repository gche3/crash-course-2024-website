// Skills icons - https://icon-sets.iconify.design/
import { Icon } from "@iconify/react";

// Navbar Logo image (uncomment below and import your image)
// import newLogo from "./images/yourFileName"

// Projects Images (add your images to the images directory and import below)
import Logo from "./images/logo.svg";

// Hero Images (add your images to the /images directory with the same names)
import HeroLight from "./images/hero-light.jpg";
import HeroDark from "./images/hero-dark.jpg";
// If you change the import names above then you need to change the export names below
export { HeroLight as Light };
export { HeroDark as Dark };

/* START HERE
 **************************************************************
  Add your GitHub username (string - "YourUsername") below.
*/
export const githubUsername = "gche3";

// Navbar Logo image
export const navLogo = undefined;

// Blog link icon - https://icon-sets.iconify.design/
export const Blog = <Icon icon="ph:link-bold" />;

// Linkedin URL --- TODO: Add your Linkedin URL HERE
export const linkedinURL = "https://www.linkedin.com/in/grace-he-9232521a2/";

/* About Me
 **************************************************************
  Add a second paragraph for the about me section.
*/
export const moreInfo =
  "I'm a third-year CS + Advertising student at UIUC! I'm interested in human-computer interaction, robotics, and artificial intelligence, and enjoy doing design work. I have worked on a variety of robotics, web development, and mobile projects in the past, and am currently working in Parasol Labs.";

/* Skills
 ************************************************************** 
  Add or remove skills in the SAME format below, choose icons here - https://icon-sets.iconify.design/
*/
export const skillData = [
  {
    id: 1,
    skill: <Icon icon="simple-icons:python" className="display-4" />,
    name: "Python",
  },
  {
    id: 2,
    skill: <Icon icon="simple-icons:cplusplus" className="display-4" />,
    name: "C++",
  },
  {
    id: 3, 
    skill: <Icon icon="simple-icons:kotlin" className="display-4" />,
    name: "Kotlin",
  },
  {
    id: 4, 
    skill: <Icon icon="simple-icons:javascript" className="display-4" />,
    name: "Javascript",
  },
  {
    id: 5, 
    skill: <Icon icon="simple-icons:androidstudio" className="display-4" />,
    name: "Android Studio",
  },
  {
    id: 6, 
    skill: <Icon icon="simple-icons:adobephotoshop" className="display-4" />,
    name: "Photoshop",
  },
];

// Resume link (string - "https://YourResumeUrl") - I am using CloudFront to share my resume (https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Introduction.html)
export const resume = "https://drive.google.com/file/d/1bbiuikZTS4oKYMpIEPmRK32VTGyfbEfF/view?usp=sharing";

/* Projects
 ************************************************************** 
  List the repo names (string - "your-repo-name") you want to include (they will be sorted alphabetically). If empty, only the first 3 will be included.
*/
export const filteredProjects = ["example-1", "example-2", "example-3"];


// Replace the defualt GitHub image for matching repos below (images imported above - lines 7-8)
export const projectCardImages = [
  {
    name: "example-1",
    image: Logo,
  },
];

/* Contact Info
 ************************************************************** 
  Add your formspree endpoint below.
  https://formspree.io/
*/
export const formspreeUrl = "https://formspree.io/f/YourEndpoint";


/* Summer 2024 Log Entries */
export const summer2024 = [
  {
    title: "Week 1 - Getting familiarized, ROS tutorials, and website creation",
    description: "Much of this week was spent on getting situated into Parasol Lab. I set up my docker environment, created this website, added myself onto the Parasol website, and met lots of new people. Most of my time in lab was spent on the ROS tutorials. I worked with the TurtleBot through ROS, as well as with SLAM, but was unable to run the physical robot due to other experiments currently occupying the lab computer.",
  },
  {
    title: "Week 2 - Unity tutorials, augmented reality, and research project",
    description: "I completed the Roll-a-ball tutorial in Unity. I thought that was really fun! Along with the base features of the game, I also implemented background music and a restart button. Afterwards, I continued onto the assigned augmented reality YouTube videos/tutorials. I got stuck after the second video, however, and asked Courtney about it. She told me I did not need to complete any beyond that point, and gave me my first research-related assignment. Apparently, this summer, I will be working on a  project that meshes together virtual reality, robotics, and user interaction as a sort of data-gathering tool. A virtual environment with a virtual robot will be created in Unity. A user will be able to manipulate the position of various joints of the robot, and this data will be collected and sent to ROS. I will be attempting to figure out how to do inverse kinematics on the UR5e. Despite initial import errors from the URDF importer, I have successfully imported the UR5e robot with all of its textures into Unity and will soon be testing (destroying) it.",
  },
  {
    title: "Week 3 - AI algorithms, inverse kinematics struggles, and forward kinematics",
    description: "This week, I spent a fair amount of time on Amnom's AI crash course. To be honest, I'm not sure I entirely get it, but it is cool. Most of my time, however, was spent trying to figure out inverse kinematics. Initially, I thought that I might be able to find something built-in in Unity. As it turns out, Unity does have built-in inverse kinematics functionalities, but it lacks the constraints needed to make a robot arm move as intended. I then continued to try and find solutions that might work, and after many, many iterations and failed attempts, I think I have found/created something that might work. I say might, because currently, the robot arm is glitching rapidly between two points. Isaac says this might be because the arm is finding multiple solutions to the inverse kinematics problem, but looking at the code, I am not sure as to where this might be occurring. This will need further investigation. On the bright side, forward kinematics seems to work, and I did not have to do that much to make it so! Forward kinematics is simply built-in when imported through the URDF importer, which comes with its own Controller script. I believe it makes use of the articulation bodies that automatically populate the joints post-import. You use the left-right arrows to select joints, and up-down arrows to rotate joints. I also started building out the VR environment!"
  },
  {
    title: "Week 4 - VR environment, more kinematics struggles, and broken VR build",
    description: "I continued to build out the VR environment. While doing so, I thought I might as well start implementing forward kinematics in VR, since surely, that would be easy. Surely, since forward kinematics was being controlled so well just using the computer, it would be a piece of cake to add on VR functionality! Boy, was I wrong. I started with just attempting to add forward kinematics to the shoulder joint. My thought process is this: If I am able to maniputlate the shoulder joint successfully by itself, the rest of the joints should be easier to implement. However, once I finally managed to get the shoulder joint moving, the arm would oscillate rapidly between two different positions, in two opposing directions. It would also snap back to its original position after you released it. Very strange. Isaac also found an inverse kinematics package that looked promising. I spent a fair amount of time trying to modify it to suit our needs, but we eventually discovered it was inherently incompatible with the UR5e due to its skeletal structure. Not only that, but my VR build broke after I managed (after too much struggling) to upload the project onto Github! Now, whenever I try to load a new version of the project onto the headset, it shows an infinite loop of the three loading dots. This week has been quite unfortunate. On the upside though, I did finally get to run the physical robot that I didn't get to on Week 1."
  },
  {
    title: "Week 5 - Articulation bodies, breakthroughs, and VR fixed",
    description: "My VR build is working again! I don't really know why it stopped working, but I cloned a new copy of the project from Github and reloaded everything. After that, it all worked like a charm. Wish I'd tried that before now though. A lot of progress has been made this week! For one, I figured that the rapid glitching in forward kinematics was caused by the parent-child relationships of the XR Knob component and the actual joint. However, the arm would still snap back into place after being released, and I had no idea why. Andre, who was also testing forward kinematics, figured it out. He proposed that this might be caused by conflicts in position/rotation between the XR Knob and the articulation bodies. After this, I tried to make the articulation bodies and XR Knobs communicate with each other, but this did not work. After some discussion with Isaac, we decided to try and remove the articulation bodies. The joint no longer snapped back to its original position! I then decided to test how a lack of articulation bodies would affect that most promising inverse kinematics script. To my utter astonishment, the inverse kinematics now had no issues! It was buttery smooth now, and it looked so, so cool. I then proceeded to make the inverse kinematics controllable in VR. You can now drag around a nice little widget in VR, and the robot arm will follow!"
  },
  {
    title: "Week 6 - Broken joints, debugging, and website updates",
    description: "This week was mostly spent attempting to fully put together forward and inverse kinematics on the VR robot. There was initially some comflict between the inverse kinematics widget and the rotation of the shoulder joint through forward kinematics, since the inverse kinematics widget would not move along with the forward kinematics movements. This was solved by changing the parent-child relationships and modifying the script so that inverse kinematics is only active when the widget is actively being selected. The real issue, however, arose when I tried to apply the XR Knob onto other joints that weren't just the shoulder joint. For any joint that is not the shoulder joint, after an intial rotation, if you try and rotate the joint again, it snaps into a certain position and can no longer be rotated. I am happy to report that this issue is still prevalent even without inverse kinematics, so this is purely a forward kinematics issue. I spent much of this week trying to debug this issue, however, nothing I tried worked. The XR Knob script was modified, with Andre adding additional axes of rotation, and me adding a rotational offset so that the joints would be aligned with their original rotation. I also tried modifying the XR Knob script in other ways, but nothing seemed to work. I'm honestly a little bit stuck. As a break (kind of) (I saw a message on Slack), I decided to update this website. I created the 'Summer 2024 Log' page, added navigation so that it could be accessed, and wrote all of the entries on it up until now!"
  }
];
