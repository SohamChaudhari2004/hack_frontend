

import { Link } from 'react-router-dom';

const Card = ({ title, description, isNew = false, icon, link }) => (
  <Link to={link}>
    <div
      className="bg-white p-6 rounded-lg shadow-md transition-transform transform hover:scale-95 hover:shadow-lg duration-300"
    >
      <div className="flex justify-between items-start mb-4">
        {/* Icon/Image Container */}
        <div className="w-30 h-30 bg-primary rounded-full overflow-hidden flex items-center justify-center">
          <img
            src={icon}
            alt="icon"
            className="w-full h-full object-cover"
          />
        </div>

        {/* New Tag */}
        {isNew && (
          <span className="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded">
            New!
          </span>
        )}
      </div>

      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  </Link>
);

export default Card;
