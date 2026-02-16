export default function Puzzle(){
    return(
         <div className="bg-white rounded-xl shadow p-5 flex justify-between items-center">
            <div>
              <p className="font-semibold">Need a 30 second break?</p>
              <p className="text-sm text-gray-500">
                You've earned it! LinkedIn’s daily logic puzzle
              </p>
            </div>
            <button className="border px-4 py-2 rounded-full text-blue-600">
              Solve now
            </button>
          </div>
    )
}