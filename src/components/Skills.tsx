import React from 'react'

const Skills = () => {
  return (
    <div id="skills" className="container pt-32">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 items-center">
        <div data-aos="fade-up">
          <h2 className="text-4xl sm:text-5xl font-semibold">Technologies I Work With</h2>
          <p className="text-gray-500 pt-4">
            I have a solid foundation in Web Development, specializing in HTML, CSS, and JavaScript. My experience extends to using frameworks like React and Next.js to create dynamic and user-friendly applications. I'm also proficient in Tailwind CSS for efficient styling and design. With a passion for learning, I stay updated on the latest technologies to enhance my skill set and contribute effectively to projects.
          </p>
        </div>

        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 text-yellow-500 text-3xl sm:text-4xl">
            <div className="space-y-4">
              <h1 className="text-white text-3xl sm:text-4xl font-semibold">LANGUAGES</h1>
              <h4 data-aos="fade-left">JavaScript</h4>
              <h4 data-aos="fade-left">PHP</h4>
              <h4 data-aos="fade-left">TypeScript</h4>
              <h4 data-aos="fade-left">CSS</h4>
              <h4 data-aos="fade-left">HTML</h4>
            </div>

            <div className="space-y-4">
              <h1 className="text-white text-3xl sm:text-4xl font-semibold">FRAMEWORKS</h1>
              <h4 data-aos="fade-left">React</h4>
              <h4 data-aos="fade-left">Angular</h4>
              <h4 data-aos="fade-left">Next.js</h4>
              <h4 data-aos="fade-left">Bootstrap</h4>
              <h4 data-aos="fade-left">Tailwind CSS</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills
