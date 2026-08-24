import logo from '../assets/img/velure.png';

export default function Logo() {
  return (
    <div className="flex items-center space-x-0">
      <img src={logo} alt="Velure Logo" className="w-16 p-3" />
      <span className="text-xl font-bold text-gray-900 dark:text-white">
        Velure
      </span>
    </div>
  );
}