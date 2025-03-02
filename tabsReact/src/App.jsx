import { useState } from 'react'

function App() {
  const [page, setPage] = useState("home");

  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6'>
      <h1 className='text-3xl font-bold mb-6'>React Page Slides</h1>

      <div className='flex space-x-4 mb-6'> 
        <button
          onClick={() => setPage("home")}
          className={`px-4 py-2 rounded-lg transition ${page === "home" ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-800"}`}>
          Home Page
        </button>

        <button
          onClick={() => setPage("about")}
          className={`px-4 py-2 rounded-lg transition ${page === "about" ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-800"}`}>
          About Page
        </button>
        
        <button
          onClick={() => setPage("contact")}
          className={`px-4 py-2 rounded-lg transition ${page === "contact" ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-800"}`}>
          Contact Page
        </button>
      </div>

      <div>
        {page === "home" && (
          <div>
            <h1>Home Page</h1>
            <p>This is the Home Page, Welcome!</p>
          </div>
        )}
        {page === "about" && (
          <div>
            <h1>About</h1>
            <p>This is the About Page! Here you can find some information about me!</p>
          </div>
        )}
        {page === "contact" && (
          <div>
            <h1>Contact</h1>
            <p>This is the Contact Page! You can find Contact Information here. Don't forget to send me an email!</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;


