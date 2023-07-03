export default function Information() {
    return (
        <div className="shadow-lg rounded-lg p-5 bg-white/10 bg-white/10">
            <h1 className="mb-5">Information</h1>
            <ul className="flex flex-col gap-2">
                <li className="flex justify-between">
                    <p>Location</p>
                    <p> Boston, MA</p>
                </li>
                <li className="flex justify-between">
                    <p>Phone</p>
                    <p>305-457-9897</p>
                </li>
                <li className="flex justify-between">
                    <p>Email</p>
                    <p>singh@arvinder.me</p>
                </li>
            </ul>
        </div>
    )
}