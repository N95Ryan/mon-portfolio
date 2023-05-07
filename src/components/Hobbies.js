import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBasketball,
  faGamepad,
  faMedal,
  faBook,
  faShirt,
  faDumbbell,
  faMusic,
  faPlaneDeparture,
} from "@fortawesome/free-solid-svg-icons";

const App = () => {
  return (
    <div className="py-4">
      <h4>Mes loisirs</h4>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-gray-800 bg-opacity-25 hover:bg-opacity-50 text-white rounded shadow p-4 flex items-center space-x-4 transition duration-300">
          <FontAwesomeIcon
            icon={faBasketball}
            className="text-3xl text-orange-600"
          />
          <span className="text-xl font-bold text-white">Basketball</span>
        </div>
        <div className="bg-gray-800 bg-opacity-25 hover:bg-opacity-50 text-white rounded shadow p-4 flex items-center space-x-4 transition duration-300">
          <FontAwesomeIcon
            icon={faGamepad}
            className="text-3xl text-fuchsia-600"
          />
          <span className="text-xl font-bold text-white">Jeux vidéos</span>
        </div>
        <div className="bg-gray-800 bg-opacity-25 hover:bg-opacity-50 text-white rounded shadow p-4 flex items-center space-x-4 transition duration-300">
          <FontAwesomeIcon
            icon={faMedal}
            className="text-3xl text-yellow-500"
          />
          <span className="text-xl font-bold text-white">Judo</span>
        </div>
        <div className="bg-gray-800 bg-opacity-25 hover:bg-opacity-50 text-white rounded shadow p-4 flex items-center space-x-4 transition duration-300">
          <FontAwesomeIcon icon={faBook} className="text-3xl text-blue-500" />
          <span className="text-xl font-bold text-white">Mangas</span>
        </div>
        <div className="bg-gray-800 bg-opacity-25 hover:bg-opacity-50 text-white rounded shadow p-4 flex items-center space-x-4 transition duration-300">
          <FontAwesomeIcon
            icon={faShirt}
            className="text-3xl text-emerald-500"
          />
          <span className="text-xl font-bold text-white">Mode</span>
        </div>
        <div className="bg-gray-800 bg-opacity-25 hover:bg-opacity-50 text-white rounded shadow p-4 flex items-center space-x-4 transition duration-300">
          <FontAwesomeIcon
            icon={faDumbbell}
            className="text-3xl text-red-600"
          />
          <span className="text-xl font-bold text-white">Musculation</span>
        </div>
        <div className="bg-gray-800 bg-opacity-25 hover:bg-opacity-50 text-white rounded shadow p-4 flex items-center space-x-4 transition duration-300">
          <FontAwesomeIcon
            icon={faMusic}
            className="text-3xl text-violet-500"
          />
          <span className="text-xl font-bold text-white">Musique</span>
        </div>
        <div className="bg-gray-800 bg-opacity-25 hover:bg-opacity-50 text-white rounded shadow p-4 flex items-center space-x-4 transition duration-300">
          <FontAwesomeIcon
            icon={faPlaneDeparture}
            className="text-3xl text-sky-400"
          />
          <span className="text-xl font-bold text-white">Voyager</span>
        </div>
      </div>
    </div>
  );
};

export default App;
