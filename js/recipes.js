const recipes = [
  {
    id: 1,
    name: "Tomatsoppa",
    category: "forratter",
    tag: "Förrätt",
    time: "25 min",
    servings: "4 portioner",
    difficulty: "Lätt",
    image: "https://picsum.photos/seed/tomatsoppa/400/250",
    description: "Krämig soppa med färska tomater och basilika.",
    ingredients: ["800 g krossade tomater", "1 gul lök", "2 dl grädde", "Färsk basilika", "Salt och peppar"],
    instructions: "Fräs löken mjuk i olja. Tillsätt tomater och låt sjuda 15 min. Mixa slätt, rör i grädde och smaka av med salt, peppar och basilika."
  },
  {
    id: 2,
    name: "Bruschetta",
    category: "forratter",
    tag: "Förrätt",
    time: "15 min",
    servings: "4 portioner",
    difficulty: "Lätt",
    image: "https://picsum.photos/seed/bruschetta/400/250",
    description: "Rostad bröd med tomat, vitlök och olivolja.",
    ingredients: ["1 ciabatta", "4 mogna tomater", "2 vitlöksklyftor", "Olivolja", "Salt och basilika"],
    instructions: "Rosta brödskivor. Hacka tomat och vitlök, blanda med olivolja och salt. Lägg på brödet och toppa med basilika."
  },
  {
    id: 3,
    name: "Köttbullar med potatis",
    category: "huvudratter",
    tag: "Kött",
    time: "45 min",
    servings: "4 portioner",
    difficulty: "Medel",
    image: "https://picsum.photos/seed/kottbullar/400/250",
    description: "Klassiska svenska köttbullar med gräddsås.",
    ingredients: ["500 g köttfärs", "1 dl ströbröd", "1 dl mjölk", "1 lök", "Potatis", "Grädde och lingon"],
    instructions: "Blanda färs, ströbröd, mjölk och hackad lök. Forma bullar och stek dem. Koka potatis. Gör sås på steksky och grädde. Servera med lingon."
  },
  {
    id: 4,
    name: "Pasta carbonara",
    category: "huvudratter",
    tag: "Kött",
    time: "30 min",
    servings: "4 portioner",
    difficulty: "Medel",
    image: "https://picsum.photos/seed/carbonara/400/250",
    description: "Italiensk pasta med ägg, bacon och parmesan.",
    ingredients: ["400 g spaghetti", "200 g bacon", "3 ägg", "1 dl parmesan", "Svartpeppar"],
    instructions: "Koka pastan al dente. Stek baconet krispigt. Vispa ägg med parmesan. Blanda varm pasta med bacon och häll över äggblandningen under omrörning."
  },
  {
    id: 5,
    name: "Lax med dill",
    category: "huvudratter",
    tag: "Fisk",
    time: "35 min",
    servings: "4 portioner",
    difficulty: "Lätt",
    image: "https://picsum.photos/seed/lax/400/250",
    description: "Ugnsbakad lax med citron och dillsås.",
    ingredients: ["4 laxfiléer", "1 citron", "Smör", "Grädde", "Färsk dill", "Salt och peppar"],
    instructions: "Lägg lax i ugnsform med citron och smör. Baka i 200 °C ca 15 min. Koka dillsås på grädde och dill. Servera direkt."
  },
  {
    id: 6,
    name: "Chokladkaka",
    category: "efterratter",
    tag: "Efterrätt",
    time: "50 min",
    servings: "8 portioner",
    difficulty: "Medel",
    image: "https://picsum.photos/seed/chokladkaka/400/250",
    description: "Saftig kaka med mörk choklad.",
    ingredients: ["200 g mörk choklad", "150 g smör", "3 ägg", "2 dl socker", "1,5 dl mjöl"],
    instructions: "Smält choklad och smör. Rör i ägg och socker, vänd ner mjölet. Häll i form och grädda i 175 °C ca 25 min."
  },
  {
    id: 7,
    name: "Pannkakor med sylt",
    category: "efterratter",
    tag: "Efterrätt",
    time: "20 min",
    servings: "4 portioner",
    difficulty: "Lätt",
    image: "https://picsum.photos/seed/pannkakor/400/250",
    description: "Tunna pannkakor med bär eller sylt.",
    ingredients: ["3 dl mjöl", "6 dl mjölk", "3 ägg", "Smör till stekning", "Sylt eller bär"],
    instructions: "Vispa ihop mjöl, mjölk och ägg till slät smet. Stek tunna pannkakor i smör. Servera med sylt eller färska bär."
  },
  {
    id: 8,
    name: "Vegetarisk lasagne",
    category: "vegetariskt",
    tag: "Vegetariskt",
    time: "55 min",
    servings: "6 portioner",
    difficulty: "Medel",
    image: "https://picsum.photos/seed/lasagne/400/250",
    description: "Lasagne med zucchini, morot och ost.",
    ingredients: ["Lasagneplattor", "2 zucchini", "2 morötter", "Krossade tomater", "Riven ost"],
    instructions: "Stek grönsaker mjuka. Varva plattor med grönsaker, tomatsås och ost i form. Grädda i 200 °C ca 35 min tills gyllene."
  },
  {
    id: 9,
    name: "Falafelwrap",
    category: "vegetariskt",
    tag: "Vegetariskt",
    time: "25 min",
    servings: "4 portioner",
    difficulty: "Lätt",
    image: "https://picsum.photos/seed/falafel/400/250",
    description: "Wrap med falafel, hummus och grönsaker.",
    ingredients: ["8 falafelbollar", "4 tortillabröd", "Hummus", "Sallad", "Tomat", "Yoghurtsås"],
    instructions: "Värm falafel enligt förpackning. Bred hummus på tortillan, lägg i falafel och grönsaker. Rulla ihop och servera."
  },
  {
    id: 10,
    name: "Grönsakssallad",
    category: "vegetariskt",
    tag: "Veganskt",
    time: "10 min",
    servings: "4 portioner",
    difficulty: "Lätt",
    image: "https://picsum.photos/seed/sallad/400/250",
    description: "Fräsch sallad med säsongens grönsaker.",
    ingredients: ["Blandad sallad", "2 tomater", "1 gurka", "1 paprika", "Olivolja", "Citron", "Salt"],
    instructions: "Skölj och skär grönsakerna. Blanda i skål med olivolja, citron och salt. Servera kall direkt."
  }
];

function getRecipeById(id) {
  return recipes.find(function (recipe) {
    return recipe.id === id;
  });
}
