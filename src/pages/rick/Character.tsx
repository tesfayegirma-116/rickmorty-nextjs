export default function Character({ character }: any) {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full overflow-hidden bg-[#3c3e44] rounded-lg md:flex-row md:rounded-lg">
      <img
        src={character.image}
        alt={character.name}
        className="w-32 h-32 rounded-none md:w-48 md:h-48 md:rounded-t-none md:rounded-l-lg"
      />
      <div className="flex flex-col items-center justify-center w-full p-4 space-y-2 text-center md:items-start md:space-y-1">
        <h1 className="text-2xl font-bold text-white">{character.name}</h1>
        <div className="flex items-center justify-center space-x-1">
          <span
            className={`w-2 h-2 rounded-full ${
              character.status === "Alive"
                ? "bg-green-500 animate-pulse"
                : character.status === "Dead"
                ? "bg-red-500"
                : "bg-yellow-500"
            }`}
          ></span>
          <span className="text-sm font-medium text-white">
            {character.status} - {character.species}
          </span>
        </div>
        <div className="flex items-start justify-start flex-col space-y-1">
          <span className="text-md font-light text-white">
            Last known location:
          </span>
          <span className="text-sm font-medium text-white">
            {character.location.name}
          </span>
          <span className="text-md font-light text-white">First seen in:</span>
          <span className="text-sm font-medium text-white">
            {character.origin.name}
          </span>
        </div>
      </div>
    </div>
  );
}
