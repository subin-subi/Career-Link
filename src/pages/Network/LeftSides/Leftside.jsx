
import {
  FiUsers,
  FiUser,
  FiCalendar,
  FiFileText,
  FiLayers,
} from "react-icons/fi";


export default function LeftSide(){
    return(
        <div className="bg-white rounded-xl shadow">
            <h3 className="font-semibold text-lg p-4 border-b">
              Manage my network
            </h3>

            <div className="space-y-3 p-4 text-gray-700">

              <div className="flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <FiUsers />
                  <span>Connections</span>
                </div>
                <span className="text-sm text-gray-500">1,188</span>
              </div>

              <div className="flex items-center gap-3">
                <FiUser />
                <span>Following & followers</span>
              </div>

              <div className="flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <FiLayers />
                  <span>Groups</span>
                </div>
                <span className="text-sm text-gray-500">14</span>
              </div>

              <div className="flex items-center gap-3">
                <FiCalendar />
                <span>Events</span>
              </div>

              <div className="flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <FiFileText />
                  <span>Pages</span>
                </div>
                <span className="text-sm text-gray-500">36</span>
              </div>

              <div className="flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <FiFileText />
                  <span>Newsletters</span>
                </div>
                <span className="text-sm text-gray-500">19</span>
              </div>
            </div>
          </div>
    )
}