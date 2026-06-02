const genres = [
  "Novel", "Adventure", "Mythology", "Horror",
  "Love Story", "Biography", "Autobiography"
];

const novelTitles = [
  "The Silent Garden", "Echoes of Tomorrow", "Beneath the Stars", "The Last Letter",
  "Shadows of Time", "The Forgotten Path", "A World Apart", "The Hidden Truth",
  "Whispers in the Dark", "The Broken Promise", "City of Dreams", "The Empty Chair",
  "Beyond the Horizon", "The Glass House", "Voices from the Past", "The Lost Key",
  "A Thousand Miles", "The Paper Boat", "Songs of the Sea", "The White Room"
];

const adventureTitles = [
  "The Lost Expedition", "Into the Wild", "Storm Chasers", "The Hidden Valley",
  "Jungle Survival", "Arctic Quest", "Desert Storm", "The Mountain Trail",
  "Voyage to the Unknown", "The River Crossing", "Peak of Destiny", "Cave of Wonders",
  "The Great Trek", "Ocean Odyssey", "The Forbidden Island", "Sky High",
  "The Underground City", "Race Against Time", "The Secret Map", "Wilderness Survivor"
];

const mythologyTitles = [
  "Gods of Olympus", "The Mahabharat Retold", "Norse Legends", "The Epic of Gilgamesh",
  "Tales of Shiva", "The Ramayana Chronicles", "Celtic Myths", "Egyptian Gods",
  "The Iliad Revisited", "Myths of the East", "The Vedic Age", "Aztec Legends",
  "The Trojan War", "Legends of Indra", "Chinese Mythology", "Japanese Folklore",
  "The Birth of Zeus", "Poseidon's Wrath", "Vishnu's Avatar", "The Golden Fleece"
];

const horrorTitles = [
  "The Haunted Mansion", "Darkness Within", "Screams at Midnight", "The Cursed Village",
  "Blood Moon Rising", "The Witch's Curse", "Dead End Street", "The Forgotten Cemetery",
  "Night Terror", "The Shadow Man", "Beneath the Grave", "The Asylum",
  "The Possession", "Whispers of Death", "The Abandoned House", "Evil Awakens",
  "The Demon's Gate", "Nightmare Unleashed", "The Black Forest", "Souls of the Dead"
];

const loveStoryTitles = [
  "Forever Yours", "A Summer to Remember", "The Last Dance", "Love in Paris",
  "Heartstrings", "The Perfect Stranger", "Falling for You", "My One and Only",
  "The Promise Ring", "Love Across Miles", "Second Chances", "The Wedding Vow",
  "Sweet Surrender", "You and Me Always", "The First Kiss", "Chasing Love",
  "Written in the Stars", "The Love Letter", "One More Day", "Till We Meet Again"
];

const biographyTitles = [
  "The Life of Einstein", "Steve Jobs Uncensored", "Gandhi: The Man",
  "Napoleon Bonaparte", "The Real Shakespeare", "Lincoln's Legacy",
  "Marie Curie: Pioneer", "The World of Tesla", "Churchill's War",
  "Life of Mandela", "Edison's Genius", "The Gates Foundation",
  "Darwin's Journey", "Freud Explained", "The Newton Principle",
  "Life of Cleopatra", "Caesar's Rome", "Florence Nightingale",
  "Mozart's Music", "Beethoven's Life"
];

const autobiographyTitles = [
  "My Story: Barack Obama", "Long Walk to Freedom", "The Diary of Anne Frank",
  "I Am Malala", "Wings of Fire", "Open: Andre Agassi",
  "My Experiments with Truth", "Shoe Dog: Phil Knight", "Born a Crime",
  "The Story of My Life", "Glass Castle", "Educated: A Memoir",
  "Man's Search for Meaning", "The Alchemist's Journey", "Wild: Cheryl Strayed",
  "Becoming: Michelle Obama", "When Breath Becomes Air", "Know My Name",
  "Just Kids", "Dreams from My Father"
];

const allTitles = {
  "Novel": novelTitles,
  "Adventure": adventureTitles,
  "Mythology": mythologyTitles,
  "Horror": horrorTitles,
  "Love Story": loveStoryTitles,
  "Biography": biographyTitles,
  "Autobiography": autobiographyTitles
};

const firstNames = [
  "James", "Mary", "John", "Patricia", "Robert", "Jennifer", "Michael", "Linda",
  "William", "Barbara", "David", "Susan", "Richard", "Jessica", "Joseph", "Sarah",
  "Thomas", "Karen", "Charles", "Lisa", "Ravi", "Priya", "Arjun", "Anita",
  "Mohammed", "Fatima", "Chen", "Mei", "Carlos", "Sofia", "Amelia", "Oliver",
  "Ethan", "Emma", "Noah", "Olivia", "Liam", "Ava", "Mason", "Isabella"
];

const lastNames = [
  "Smith", "Johnson", "Williams", "Brown", "Jones", "Garcia", "Miller", "Davis",
  "Wilson", "Anderson", "Taylor", "Thomas", "Jackson", "White", "Harris", "Martin",
  "Sharma", "Patel", "Kumar", "Singh", "Khan", "Ahmed", "Ali", "Hassan",
  "Zhang", "Wang", "Li", "Liu", "Rodriguez", "Martinez", "Lopez", "Gonzalez",
  "Murphy", "O'Brien", "Walsh", "Ryan", "Clarke", "Collins", "Evans", "Hughes"
];

// Generate 1000 books
const books = [];
let id = 1;

genres.forEach((genre) => {
  const titles = allTitles[genre];
  const booksPerGenre = Math.floor(1000 / genres.length); // ~142 per genre

  for (let i = 0; i < booksPerGenre; i++) {
    const titleBase = titles[i % titles.length];
    const suffix = Math.floor(i / titles.length) > 0
      ? ` Vol. ${Math.floor(i / titles.length) + 1}` : "";
    const firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
    const lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
    const year = 1950 + Math.floor(Math.random() * 74);
    const pages = 150 + Math.floor(Math.random() * 650);

    books.push({
      id: id++,
      title: titleBase + suffix,
      author: `${firstName} ${lastName}`,
      genre: genre,
      year: year,
      pages: pages,
      available: Math.random() > 0.2
    });
  }
});

// Sort alphabetically by title
books.sort((a, b) => a.title.localeCompare(b.title));

// Re-assign IDs after sorting
books.forEach((book, index) => {
  book.id = index + 1;
});

module.exports = books;