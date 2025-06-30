function Card({ title, children }) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 mb-6 transition-colors">
      <h2 className="text-lg font-semibold mb-2 text-gray-800 dark:text-gray-200">{title}</h2>
      {children}
    </div>
  );
}
export default Card;
