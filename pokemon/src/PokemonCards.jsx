export const PokemonCards = ({ pokemonData }) => {
  return (
    <li className="mt-10 w-[16rem] min-h-[22rem] bg-white rounded-xl shadow-lg p-4 hover:scale-105 duration-300 cursor-pointer">


     
      <figure className="flex justify-center">
        <img
          src={pokemonData.sprites.other.dream_world.front_default}
          alt={pokemonData.name}
          className="w-[55%] h-[8rem] object-contain"
        />
      </figure>

     
      <h1 className="text-xl text-center font-bold text-gray-800 capitalize mt-3">
        {pokemonData.name}
      </h1>

      
      <div className="text-center mt-1">
        <p className="px-2 py-1 inline-block bg-blue-100 text-blue-700 rounded-full capitalize text-xs font-medium">
          {pokemonData.types.map((curType) => curType.type.name).join(", ")}
        </p>
      </div>

    
      <div className="grid grid-cols-3 gap-2 mt-3 text-center text-xs">
        <p className="bg-gray-100 p-2 rounded-md text-gray-700 font-semibold">
          <span className="block text-gray-500 text-[10px]">Height</span>
          {pokemonData.height}
        </p>

        <p className="bg-gray-100 p-2 rounded-md text-gray-700 font-semibold">
          <span className="block text-gray-500 text-[10px]">Weight</span>
          {pokemonData.weight}
        </p>

        <p className="bg-gray-100 p-2 rounded-md text-gray-700 font-semibold">
          <span className="block text-gray-500 text-[10px]">Speed</span>
          {pokemonData.stats[5].base_stat}
        </p>
      </div>

      <div className="grid grid-cols-3 gap-2 mt-3 text-center text-xs">
        <p className="bg-yellow-100 p-2 rounded-md text-yellow-700 font-semibold">
          <span className="block text-gray-500 text-[10px]">Exp</span>
          {pokemonData.base_experience}
        </p>

        <p className="bg-red-100 p-2 rounded-md text-red-700 font-semibold">
          <span className="block text-gray-500 text-[10px]">Attack</span>
          {pokemonData.stats[1].base_stat}
        </p>

        <p className="bg-green-100 p-2 rounded-md text-green-700 font-semibold capitalize">
          <span className="block text-gray-500 text-[10px]">Ability</span>
          {pokemonData.abilities
            .map((abilityInfo) => abilityInfo.ability.name)
            .slice(0, 1)
            .join(", ")}
        </p>
      </div>

    </li>
  );
};
