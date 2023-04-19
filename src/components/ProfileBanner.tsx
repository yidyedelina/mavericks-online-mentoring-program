export default function ProfileBanner() {
  return (
    <div className="text-white p-8 flex h-96 w-full  bg-blue-600 items-center text-left">
      <div className="w-3/4 flex flex-col gap-3">
        <h1 className="text-3xl text-white font-semibold">React Front End course</h1>
        <p>Just in time</p>
        <div className="flex gap-2 items-center ">
          <img className="w-10 h-10 rounded-full" src="https://images.unsplash.com/photo-1618641986557-1ecd230959aa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80" alt="Rounded avatar"></img>
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
