Pokémon Website

A modern Pokémon website built using *React.js** and Tailwind CSS, where users can browse Pokémon cards and search/filter Pokémon by name in real-time.

---
 Features

- Built with *React.js*
- Styled using *Tailwind CSS*
- *Search & Filter Pokémon cards* by name
- Fully *responsive design*
-  Reusable React components
-  Fast and smooth UI experience

---

 Tech Stack

- *React.js*
- *Tailwind CSS*
- *JavaScript (ES6+)*
- *Pokémon API / Static Data* 

---

 Search & Filter Functionality

- Users can type a Pokémon name in the search bar
- Pokémon cards are *filtered instantly**
- Filtering is *case-insensitive*
- Implemented using React *state & array filter method*

Example logic:
```js
pokemonList.filter(pokemon =>
  pokemon.name.toLowerCase().includes(search.toLowerCase())
);
