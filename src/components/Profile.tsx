export default function Profile() {
    return (
        <div className="shadow-lg rounded-lg bg-white/10">
            <div className="relative mb-16">
                <div className="w-full h-32 max-h-32 object-cover rounded-t-lg bg-gradient-to-tr from-indigo-800"/>
                <img className="h-24 w-24 rounded border-white border-4 absolute -bottom-12 left-5 " src="/img/portrait-placeholder.png" alt="Profile Picture" />
            </div>
            <div className="p-5 flex flex-col">
            <h1>Arvinder Singh</h1>
            <p>Machine Learning Engineer</p>
            <button className="bg-gradient-to-tr from-indigo-800 to-indigo-600 hover:from-indigo-600 hover:to-indigo-400 mt-5 p-2 text-white">Download CV</button>
            </div>

        </div>
    )
  }