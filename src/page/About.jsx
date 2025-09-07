import React from 'react'

export const About = () => {
  return (
    <div className="md:ml-64 flex-1">
      <section id="about" className="min-h-screen px-6 py-12 bg-white text-gray-800">
         <div className="flex items-center space-x-4 mb-10">
          <div
            className="text-white font-bold text-2xl px-6 py-6 inline-block"
            style={{
              clipPath: 'polygon(0 0, 44% 0, 100% 0, 100% 80%, 10% 80%, 10% 100%, 0 80%)',
              backgroundColor: '#facc15',
            }}
          >
            <p className="-mt-3">About Me</p>
          </div>
          <p className="text-gray-500">Hard working, Confident</p>
        </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mx-8">
        <div>
          <h2 className="text-xl font-bold mb-4 text-yellow-500">Backend Skills & Deliverables</h2>
          <div className="list-disc list-inside text-gray-700 space-y-4 ">
            <p className="">
              <span className="bg-gray-200 h-10 ml-1 p-2 hover:bg-amber-400 cursor-no-drop">Node.js</span> 
              <span className="bg-gray-200 h-10 ml-1 p-2 hover:bg-amber-400 cursor-no-drop">Express.js</span>
              <span className="bg-gray-200 h-10 ml-1 p-2 hover:bg-amber-400 cursor-no-drop">MongoDB</span>
              <span className="bg-gray-200 h-10 ml-1 p-2 hover:bg-amber-400 cursor-no-drop">Firebase</span>
            </p>
            <p className="">
              <span className="bg-gray-200 h-10 ml-1 p-2 hover:bg-amber-400 cursor-no-drop">RESTful API development</span>
              <span className="bg-gray-200 h-10 ml-1 p-2 hover:bg-amber-400 cursor-no-drop">API design</span>
             
            </p>
            <p className=""> <span className="bg-gray-200 h-10 ml-1 p-2 hover:bg-amber-400 cursor-no-drop">database management</span>
              <span className="bg-gray-200 h-10 ml-1 p-2 hover:bg-amber-400 cursor-no-drop">version control</span></p>
            <p className="">
              <span className="bg-gray-200 h-10 ml-1 p-2 hover:bg-amber-400 cursor-no-drop">Authentication</span>
              <span className="bg-gray-200 h-10 ml-1 p-2 hover:bg-amber-400 cursor-no-drop">JWT</span>
              <span className="bg-gray-200 h-10 ml-1 p-2 hover:bg-amber-400 cursor-no-drop">OAuth</span>
              <span className="bg-gray-200 h-10 ml-1 p-2 hover:bg-amber-400 cursor-no-drop">Firebase Auth</span>
            </p>
            <p className=""> 
              <span className="bg-gray-200 h-10 ml-1 p-2 hover:bg-amber-400 cursor-no-drop">Server deployment</span>
              <span className="bg-gray-200 h-10 ml-1 p-2 hover:bg-amber-400 cursor-no-drop">Vercel</span>
              <span className="bg-gray-200 h-10 ml-1 p-2 hover:bg-amber-400 cursor-no-drop">Render</span>
              <span className="bg-gray-200 h-10 ml-1 p-2 hover:bg-amber-400 cursor-no-drop">Railway</span>
            </p>
            <p className="">
              <span className="bg-gray-200 h-10 ml-1 p-2 hover:bg-amber-400 cursor-no-drop">Database design</span>
              <span className="bg-gray-200 h-10 ml-1 p-2 hover:bg-amber-400 cursor-no-drop">&</span>
              <span className="bg-gray-200 h-10 ml-1 p-2 hover:bg-amber-400 cursor-no-drop">optimization</span>
            </p>
            <p className=""> 
              <span className="bg-gray-200 h-10 ml-1 p-2 hover:bg-amber-400 cursor-no-drop">Admin panel</span>
              <span className="bg-gray-200 h-10 ml-1 p-2 hover:bg-amber-400 cursor-no-drop">&</span>
              <span className="bg-gray-200 h-10 ml-1 p-2 hover:bg-amber-400 cursor-no-drop">CRUD functionality</span>
            </p>
          </div>
        </div>

        <div>
          <h2 className="text-xl font-bold mb-4 text-yellow-500">Frontend Skills & Deliverables</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-4">
            <p>
              <span className="bg-gray-200 h-10 ml-1 p-2 hover:bg-amber-400 cursor-no-drop">React.js</span>
              <span className="bg-gray-200 h-10 ml-1 p-2 hover:bg-amber-400 cursor-no-drop">HTML</span>
              <span className="bg-gray-200 h-10 ml-1 p-2 hover:bg-amber-400 cursor-no-drop">CSS</span>
              <span className="bg-gray-200 h-10 ml-1 p-2 hover:bg-amber-400 cursor-no-drop">Tailwind CSS</span>
             
             
            </p>
            <p>  
              <span className="bg-gray-200 h-10 ml-1 p-2 hover:bg-amber-400 cursor-no-drop">Responsive</span>
              <span className="bg-gray-200 h-10 ml-1 p-2 hover:bg-amber-400 cursor-no-drop">Design</span>
              <span className="bg-gray-200 h-10 ml-1 p-2 hover:bg-amber-400 cursor-no-drop">DaisyUI</span>
              <span className="bg-gray-200 h-10 ml-1 p-2 hover:bg-amber-400 cursor-no-drop">HeroUI</span>
            </p>
            <p>
              <span className="bg-gray-200 h-10 ml-1 p-2 hover:bg-amber-400 cursor-no-drop">UI/UX</span>
              <span className="bg-gray-200 h-10 ml-1 p-2 hover:bg-amber-400 cursor-no-drop">Theme toggle</span>
              <span className="bg-gray-200 h-10 ml-1 p-2 hover:bg-amber-400 cursor-no-drop">Dark</span>
              <span className="bg-gray-200 h-10 ml-1 p-2 hover:bg-amber-400 cursor-no-drop">Light mode</span>
             
 
            </p>
            <p>
              <span className="bg-gray-200 h-10 ml-1 p-2 hover:bg-amber-400 cursor-no-drop">React Awesome Reveal</span>
              <span className="bg-gray-200 h-10 ml-1 p-2 hover:bg-amber-400 cursor-no-drop">Animation</span>
              <span className="bg-gray-200 h-10 ml-1 p-2 hover:bg-amber-400 cursor-no-drop">Motion</span>
            </p>
            <p>
              <span className="bg-gray-200 h-10 ml-1 p-2 hover:bg-amber-400 cursor-no-drop">Aos</span>

              <span className="bg-gray-200 h-10 ml-1 p-2 hover:bg-amber-400 cursor-no-drop">SPA - Single Page Application</span>
              <span className="bg-gray-200 h-10 ml-1 p-2 hover:bg-amber-400 cursor-no-drop">React Router</span>
            </p>
            <p>
              <span className="bg-gray-200 h-10 ml-1 p-2 hover:bg-amber-400 cursor-no-drop">Dom</span>
              <span className="bg-gray-200 h-10 ml-1 p-2 hover:bg-amber-400 cursor-no-drop">Form validation</span>
              <span className="bg-gray-200 h-10 ml-1 p-2 hover:bg-amber-400 cursor-no-drop">&</span>
              <span className="bg-gray-200 h-10 ml-1 p-2 hover:bg-amber-400 cursor-no-drop">integration</span>

            </p>
          </ul>
        </div>
      </div>

      <div className="mt-16 mx-6">
        <h2 className="text-xl font-bold mb-4 text-yellow-500">Clients</h2>
        <p className="text-gray-600 mb-4">Worked with 20+ international clients including startups, entrepreneurs, and agencies delivering tailored full-stack web solutions.</p>
        <ul className="flex flex-wrap gap-4 text-gray-600">
          <li>USA 🇺🇸</li>
          <li>Canada 🇨🇦</li>
          <li>Germany 🇩🇪</li>
          <li>India 🇮🇳</li>
          <li>Bangladesh 🇧🇩</li>
        </ul>
      </div>

      <div className="mt-16 mx-6">
        <h2 className="text-xl font-bold mb-4 text-yellow-500">Services</h2>
        <div className="grid md:grid-cols-3 gap-6 text-gray-700">
          <div className="p-4 border rounded-lg shadow-sm">
            <h3 className="font-semibold mb-2">Full-Stack Web Development</h3>
            <p>End-to-end development using MERN stack with optimized performance.</p>
          </div>
          <div className="p-4 border rounded-lg shadow-sm">
            <h3 className="font-semibold mb-2">Custom Admin Dashboard</h3>
            <p>Fully functional dashboards with user, product & order management.</p>
          </div>
          <div className="p-4 border rounded-lg shadow-sm">
            <h3 className="font-semibold mb-2">Portfolio / Landing Pages</h3>
            <p>Responsive & animated personal/brand sites tailored for modern needs.</p>
          </div>
        </div>
      </div>
    </section>

  </div>
  )
}


