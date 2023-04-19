export default function ProfileBanner() {
  return (
    <div className="flex h-96 w-full items-center bg-cyan-400 p-8 text-left text-white hover:bg-cyan-500">
      <div className="flex w-3/4 flex-col gap-3">
        <h1 className="text-3xl font-semibold text-white">
          React Front End course
        </h1>
        <p>Just in time</p>
        <div className="flex items-center gap-2 ">
          <img
            className="h-10 w-10 rounded-full"
            src="https://images.unsplash.com/photo-1618641986557-1ecd230959aa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80"
            alt="Rounded avatar"
          ></img>
          <p className="text-base font-semibold">Yidnekachew Tebeje</p>
        </div>
      </div>
      <div>
        <p>Enrolled Date: Jun 23 </p>
        <p>progress</p>

        <div>
          <p>duration 3 Months</p>
        </div>
      </div>
    </div>
  )
}
