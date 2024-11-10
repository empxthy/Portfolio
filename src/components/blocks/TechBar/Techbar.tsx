import styles from './Techbar.module.scss';
import {
    FaReact,
    FaNodeJs,
    FaPython,
    FaJava,
    FaGit,
    FaDocker,
    FaLinux
} from "react-icons/fa";

import {
    TbBrandCSharp,
    TbBrandTypescript,
    TbBrandNextjs
} from "react-icons/tb";

import {
    DiJavascript1,
    DiMongodb,
    DiNginx
} from "react-icons/di";

import {
    SiMysql,
    SiPostman,
    SiVercel,
} from "react-icons/si";

import {
    VscVscode
} from "react-icons/vsc";

interface TechBlockProps {
    name: string,
    icon: JSX.Element;
}

const techs: { name: string, icon: JSX.Element }[] = [
    { name: 'C#', icon: <TbBrandCSharp /> },
    { name: 'Java', icon: <FaJava /> },
    { name: 'Python', icon: <FaPython /> },
    { name: 'Node Js', icon: <FaNodeJs /> },
    { name: 'JavaScript', icon: <DiJavascript1 /> },
    { name: 'TypeScript', icon: <TbBrandTypescript /> },
    { name: 'React Js', icon: <FaReact /> },
    { name: 'Next Js', icon: <TbBrandNextjs /> },
    { name: 'Git', icon: <FaGit /> },
    { name: 'MySQL', icon: <SiMysql /> },
    { name: 'MongoDB', icon: <DiMongodb /> },
    { name: 'Docker', icon: <FaDocker /> },
];

const additionalTechs: { name: string, icon: JSX.Element }[] = [
    { name: 'Kali Linux', icon: <FaLinux /> },
    { name: 'VS Code', icon: <VscVscode /> },
    { name: 'Postman', icon: <SiPostman /> },
    { name: 'NGNIX', icon: <DiNginx /> },
    { name: 'Vercel', icon: <SiVercel /> }
];

const TechBlock = ({ name, icon }: TechBlockProps) => (
    <div className={styles.tech_block}>
        <div className={styles.tech_icon}>{icon}</div>
        <p>{name}</p>
    </div>
);

const TechBlocks = () => (
    <div className={styles.tech_blocks_container}>
        {techs.map((tech, index) => (
            <TechBlock key={index} name={tech.name} icon={tech.icon} />
        ))}
    </div>
);

const AdditionalTechBlocks = () => (
    <div className={styles.tech_blocks_container}>
        {additionalTechs.map((tech, index) => (
            <TechBlock key={index} name={tech.name} icon={tech.icon} />
        ))}
    </div>
);

const AllTechBlocks = () => (
    <>
        <TechBlocks />
        <h1 className='text-white text-3xl mt-8'><span style={{ color: 'rgb(102, 153, 153)' }}>Techologies</span> I use</h1>
        <AdditionalTechBlocks />
    </>
);

export default AllTechBlocks;
