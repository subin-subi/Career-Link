export default function Tab(){
    return(
          <div className="bg-white rounded-xl shadow px-6 py-3 flex gap-8">
            <button className="border-b-2 border-green-600 pb-2 font-semibold">
              Grow
            </button>
            <button className="text-gray-500">Catch up</button>
          </div>
    )
}