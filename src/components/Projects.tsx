import React from 'react'
import Heading from './Heading';
import Card from './Card';


const data = [
    {
        id: 0,
        title : "Project-1",
        desc: "Static Interactive Resume",
        img: "/proj-1.PNG",
        tags:["React", "Node", "CSS", "HTML"],
    },
    {
        id: 1,
        title : "Project-2",
        desc: "Dynamic Resume Builder",
        img: "/proj-2.PNG",
        tags:["React", "Node", "CSS", "HTML"],
    },
    {
        id: 2,
        title : "Project-3",
        desc: "Editable Resume Builder",
        img: "/proj-3.PNG",
        tags:["React", "Node", "CSS", "HTML"],
    },
    {
        id: 3,
        title : "Project-4",
        desc: "Shareable Resume Builder",
        img: "/proj-4.PNG",
        tags:["React", "Node", "CSS", "HTML"],
    },
]

const Projects = () => {
  return (
    <div id='projects' className='container pt-32'>
        <Heading title='My Projects' />
        <div className='grid gap-10 xl:gap-0 xl:gap-y-10 md:grid-cols-2 lg:grid-cols-3 place-items-center'>
            {data.map((el) => (<Card 
            key={el.id}
            title={el.title}
            desc={el.desc}
            img={el.img}
            tags={el.tags}
            />))}
        </div>
    </div>
  )
}

export default Projects
