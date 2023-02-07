import Lists from "@/components/home/lists";
import Information from "@/components/home/bio";
import NavBar from "../components/home/nav_bar";


export default function Home() {
  return (
    <div className="h-screen bg-[#EDEDE9]">
      <NavBar />
      <Information text={"Hi, I am a career changer looking to transition into the tech sector. I currently work in the hospitality industry, but I have a passion for technology and coding. I have experience in React, Javascript, HTML, CSS, Tailwind CSS, Python, Photoshop, and GitHub. I am eager to learn more and apply my skills to the tech industry. I am a hardworking individual who is always striving to improve myself and my skill set. I am very enthusiastic about what the future will bring."} />
      <Lists title={"Here is a list of my current coding skills"} arr={["HTML 5", "CSS", "Javascript", "React", "Python", "Tailwind CSS", "GitHub", "Photoshop"]}/>    
    </div>
  );
}
