export default function Profile() {
    return (
        <div className="shadow-lg rounded-lg bg-tab_1/25">
            <div className="relative mb-16">
                <div className="w-full h-32 max-h-32 object-cover rounded-t-lg bg-gradient-to-tr from-accent_1" />
                <img className="h-24 w-24 rounded border-primary_h1 border-4 absolute -bottom-12 left-5 " src="/img/portrait-placeholder.png" alt="Profile Picture" />
            </div>
            <div className="p-5 flex flex-col">
                <h1>Arvinder Singh</h1>
                <p>Machine Learning Engineer</p>
                <button
                    className="mt-5">
                    Download CV
                </button>
            </div>
        </div>
    )
}``