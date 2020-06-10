const tip = [
    {
        title: "",
        description: "",
        country: "",
        continent: "",
        image: ""
    },
    {
        title: "Rainbow Mountain",
        description: "The peaks in the Ausangate mountain region of the Peruvian Andes are all uncommonly colored, but none are quite so marvelous as Vinicunca, known as Rainbow Mountain. This remote candy-striped mountain is straight out of the pages of Dr. Seuss. Yet for all its striking colors, Rainbow Mountain is notoriously hard to find.",
        country: "Peru",
        continent: "South America",
        image: "https://assets.atlasobscura.com/media/W1siZiIsInVwbG9hZHMvcGxhY2VfaW1hZ2VzLzhhYzcxYTY3ODVhZWFkYjlhZDFiNmNhMjhlZWY4MDMxODY4MTVjOWMuanBnIl0sWyJwIiwidGh1bWIiLCIxMjAweD4iXSxbInAiLCJjb252ZXJ0IiwiLXF1YWxpdHkgODEgLWF1dG8tb3JpZW50Il1d/8ac71a6785aeadb9ad1b6ca28eef803186815c9c.jpg"
    },
    {
        title: "Perito Moreno Glacier",
        description: "If you only visit one glacier in your life, Perito Moreno would be a good one to pick. It towers above the turquoise glacial water of Patagonia’s Los Glaciares National Park, beaming a blinding white and exuding cold blue hues. This stunning mass of ice spans 121 square miles and, unlike most of Earth’s other glaciers, is is still growing.",
        country: "Argentina",
        continent: "South America",
        image: "https://assets.atlasobscura.com/media/W1siZiIsInVwbG9hZHMvcGxhY2VfaW1hZ2VzLzhhYzcxYTY3ODVhZWFkYjlhZDFiNmNhMjhlZWY4MDMxODY4MTVjOWMuanBnIl0sWyJwIiwidGh1bWIiLCIxMjAweD4iXSxbInAiLCJjb252ZXJ0IiwiLXF1YWxpdHkgODEgLWF1dG8tb3JpZW50Il1d/8ac71a6785aeadb9ad1b6ca28eef803186815c9c.jpg"
    },
    {
        title: "Leftover Star Wars Sets",
        description: "",
        country: "Tunisia",
        continent: "Africa",
        image: "https://assets.atlasobscura.com/media/W1siZiIsInVwbG9hZHMvcGxhY2VfaW1hZ2VzLzhhYzcxYTY3ODVhZWFkYjlhZDFiNmNhMjhlZWY4MDMxODY4MTVjOWMuanBnIl0sWyJwIiwidGh1bWIiLCIxMjAweD4iXSxbInAiLCJjb252ZXJ0IiwiLXF1YWxpdHkgODEgLWF1dG8tb3JpZW50Il1d/8ac71a6785aeadb9ad1b6ca28eef803186815c9c.jpg"
    },
    {
        title: "Hitler's Olympic Village",
        description: "",
        country: "Germany",
        continent: "Europe",
        image: "https://assets.atlasobscura.com/media/W1siZiIsInVwbG9hZHMvcGxhY2VfaW1hZ2VzLzhhYzcxYTY3ODVhZWFkYjlhZDFiNmNhMjhlZWY4MDMxODY4MTVjOWMuanBnIl0sWyJwIiwidGh1bWIiLCIxMjAweD4iXSxbInAiLCJjb252ZXJ0IiwiLXF1YWxpdHkgODEgLWF1dG8tb3JpZW50Il1d/8ac71a6785aeadb9ad1b6ca28eef803186815c9c.jpg"
    },
    {
        title: "Discoteca Ayala",
        description: "",
        country: "Cuba",
        continent: "North America",
        image: "https://assets.atlasobscura.com/media/W1siZiIsInVwbG9hZHMvcGxhY2VfaW1hZ2VzLzhhYzcxYTY3ODVhZWFkYjlhZDFiNmNhMjhlZWY4MDMxODY4MTVjOWMuanBnIl0sWyJwIiwidGh1bWIiLCIxMjAweD4iXSxbInAiLCJjb252ZXJ0IiwiLXF1YWxpdHkgODEgLWF1dG8tb3JpZW50Il1d/8ac71a6785aeadb9ad1b6ca28eef803186815c9c.jpg"
    },
    {
        title: "Barack Obama Plaza",
        description: "",
        country: "Ireland",
        continent: "Europe",
        image: "https://assets.atlasobscura.com/media/W1siZiIsInVwbG9hZHMvcGxhY2VfaW1hZ2VzLzhhYzcxYTY3ODVhZWFkYjlhZDFiNmNhMjhlZWY4MDMxODY4MTVjOWMuanBnIl0sWyJwIiwidGh1bWIiLCIxMjAweD4iXSxbInAiLCJjb252ZXJ0IiwiLXF1YWxpdHkgODEgLWF1dG8tb3JpZW50Il1d/8ac71a6785aeadb9ad1b6ca28eef803186815c9c.jpg"
    },
    {
        title: "The Libraries of Chinguetti",
        description: "",
        country: "Mauritania",
        continent: "Ocenia",
        image: "https://assets.atlasobscura.com/media/W1siZiIsInVwbG9hZHMvcGxhY2VfaW1hZ2VzLzhhYzcxYTY3ODVhZWFkYjlhZDFiNmNhMjhlZWY4MDMxODY4MTVjOWMuanBnIl0sWyJwIiwidGh1bWIiLCIxMjAweD4iXSxbInAiLCJjb252ZXJ0IiwiLXF1YWxpdHkgODEgLWF1dG8tb3JpZW50Il1d/8ac71a6785aeadb9ad1b6ca28eef803186815c9c.jpg"
    },
    {
        title: "Forbes Pigment Collection",
        description: "",
        country: "United States",
        continent: "North America"
    },
    {
        title: "Pogue's Run",
        description: "",
        country: "United States",
        continent: "North America"
    },
    {
        title: "Hidden Egyptian Temple in Field Museum Break Room",
        description: "",
        country: "United States",
        continent: "North America"
    },
    {
        title: "David Bowie Graffiti Mural",
        description: "",
        country: "England",
        continent: "Europe"
    },
    {
        title: "Opus 40",
        description: "",
        country: "United States",
        continent: "North America"
    },
    {
        title: "Long Lines Building",
        description: "",
        country: "United States",
        continent: "North America"
    },
    {
        title: "Zhangjiajie Glass Bridge",
        description: "",
        country: "China",
        continent: "Asia"
    },
    {
        title: "Deep Throat Parking Garage",
        description: "",
        country: "United States",
        continent: "North America"
    },
    {
        title: "The Imperial War Museum London",
        description: "",
        country: "England",
        continent: "Europe"
    },
    {
        title: "The Sunken City of Baia",
        description: "",
        country: "Italy",
        continent: "Europe"
    },
    {
        title: "The Grolier Club",
        description: "",
        country: "United States",
        continent: "North America"
    },
    {
        title: "Los Jardines de la Tropical",
        description: "",
        country: "Cuba",
        continent: ""
    },
    {
        title: "Colina Kapa Astronomical Observatory",
        description: "",
        country: "Bosnia and Herzegovina",
        continent: "Europe"
    },
    {
        title: "Bibliotheca Philosophica Hermetica - Ritman Library",
        description: "",
        country: "Netherlands",
        continent: "Europe"
    },
    {
        title: "Professional and Amateur Pinball Association World Headquarters",
        description: "",
        country: "United States",
        continent: "North America"
    },
    {
        title: "U.S. Fish and Wildlife Service Forensics Laboratory",
        description: "",
        country: "United States",
        continent: "North America"
    },
    {
        title: '"Singing Runway" at the Abandoned Disney World Airport',
        description: "",
        country: "United States",
        continent: "North America"
    },
    {
        title: "Nishiyama Onsen Keiunkan",
        description: "",
        country: "Japan",
        continent: "Asia"
    },
    {
        title: "Rasputin Museum at Yusupov Palace",
        description: "",
        country: "Russia",
        continent: "Europe"
    },
    {
        title: "Dymaxion Chronofile",
        description: "",
        country: "United States",
        continent: "North America"
    },
];

export default tip;