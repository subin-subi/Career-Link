export default function RightSide(){
    return(
      <>
         {/* RIGHT SIDEBAR */}
      <div className="hidden lg:block w-80 space-y-6">

        {/* Messages */}
        <div className="bg-white rounded-xl shadow p-5">
          <h3 className="font-semibold mb-4">Messages</h3>

          <div className="space-y-3">
            {["Zemira lopez","Megna Fox","Zemira lopez"].map((name,i)=>(
              <div key={i} className="flex items-center gap-3">
                <img
                  src={`https://i.pravatar.cc/40?img=${i+30}`}
                  className="w-9 h-9 rounded-full"
                  alt=""
                />
                <p className="text-sm">{name}</p>
              </div>
            ))}
          </div>

          <button className="text-sm text-blue-600 mt-3">
            Show more
          </button>
        </div>

        {/* News */}
        <div className="bg-white rounded-xl shadow p-5">
          <h3 className="font-semibold mb-4">News</h3>

          <ul className="space-y-3 text-sm">
            <li>
              Breakthrough in solar battery technology
              <p className="text-xs text-gray-500">2h ago • 112,540 readers</p>
            </li>

            <li>
              Neuralink achieves wireless brain-texting
              <p className="text-xs text-gray-500">9h ago • 32,800 readers</p>
            </li>

            <li>
              Global oil prices fall amid green energy shift
              <p className="text-xs text-gray-500">5h ago • 10,270 readers</p>
            </li>
          </ul>

          <button className="text-sm text-blue-600 mt-3">
            Show more
          </button>
        </div>

      </div>
      </>
    )
}