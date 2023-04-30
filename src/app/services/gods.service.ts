import { Injectable } from '@angular/core';
import { God } from '../models/god';

@Injectable({
  providedIn: 'root'
})
export class GodsService {

  constructor() { }

  gods: God[] = [
    {
      id: 0,
      name: "Achilles",
      role: "Warrior"
    },
    {
      id: 1,
      name: "Agni",
      role: "Mage"
    },
    {
      id: 2,
      name: "Ah Muzen Cab",
      role: "Hunter"
    },
    {
      id: 3,
      name: "Ah Punch",
      role: "Mage"
    },
    {
      id: 4,
      name: "Amaterasu",
      role: "Warrior"
    },
    {
      id: 5,
      name: "Anhur",
      role: "Hunter"
    },
    {
      id: 6,
      name: "Anubis",
      role: "Mage"
    },
    {
      id: 7,
      name: "Ao Kuang",
      role: "Mage"
    },
    {
      id: 8,
      name: "Aphrodite",
      role: "Mage"
    },
    {
      id: 9,
      name: "Apollo",
      role: "Hunter"
    },
    {
      id: 10,
      name: "Arachne",
      role: "Assassin"
    },
    {
      id: 11,
      name: "Ares",
      role: "Guardian"
    },
    {
      id: 12,
      name: "Artemis",
      role: "Hunter"
    },
    {
      id: 13,
      name: "Artio",
      role: "Guardian"
    },
    {
      id: 14,
      name: "Athena",
      role: "Guardian"
    },
    {
      id: 15,
      name: "Atlas",
      role: "Guardian"
    },
    {
      id: 16,
      name: "Awilix",
      role: "Assassin"
    },
    {
      id: 17,
      name: "Baba Yaga",
      role: "Mage"
    },
    {
      id: 18,
      name: "Bacchus",
      role: "Guardian"
    },
    {
      id: 19,
      name: "Bakasura",
      role: "Assassin"
    },
    {
      id: 20,
      name: "Baron Samedi",
      role: "Mage"
    },
    {
      id: 21,
      name: "Bastet",
      role: "Assassin"
    },
    {
      id: 22,
      name: "Bellona",
      role: "Warrior"
    },
    {
      id: 23,
      name: "Cabrakan",
      role: "Guardian"
    },
    {
      id: 24,
      name: "Camazotz",
      role: "Assassin"
    },
    {
      id: 25,
      name: "Cerberus",
      role: "Guardian"
    },
    {
      id: 26,
      name: "Cernunnos",
      role: "Hunter"
    },
    {
      id: 27,
      name: "Chaac",
      role: "Warrior"
    },
    {
      id: 28,
      name: "Chang'e",
      role: "Mage"
    },
    {
      id: 29,
      name: "Chernobog",
      role: "Hunter"
    },
    {
      id: 30,
      name: "Chiron",
      role: "Hunter"
    },
    {
      id: 31,
      name: "Chronos",
      role: "Mage"
    },
    {
      id: 32,
      name: "Cliodhna",
      role: "Assassin"
    },
    {
      id: 33,
      name: "Cthulhu",
      role: "Guardian"
    },
    {
      id: 34,
      name: "Cu Chulainn",
      role: "Warrior"
    },
    {
      id: 35,
      name: "Cupid",
      role: "Hunter"
    },
    {
      id: 36,
      name: "Da Ji",
      role: "Assassin"
    },
    {
      id: 37,
      name: "Danzaburou",
      role: "Hunter"
    },
    {
      id: 38,
      name: "Discordia",
      role: "Mage"
    },
    {
      id: 39,
      name: "Erlang Shen",
      role: "Warrior"
    },
    {
      id: 40,
      name: "Eset",
      role: "Mage"
    },
    {
      id: 41,
      name: "Fafnir",
      role: "Guardian"
    },
    {
      id: 42,
      name: "Fenrir",
      role: "Assassin"
    },
    {
      id: 43,
      name: "Freya",
      role: "Mage"
    },
    {
      id: 44,
      name: "Ganesha",
      role: "Guardian"
    },
    {
      id: 45,
      name: "Geb",
      role: "Guardian"
    },
    {
      id: 46,
      name: "Gilgamesh",
      role: "Warrior"
    },
    {
      id: 47,
      name: "Guan Yu",
      role: "Warrior"
    },
    {
      id: 48,
      name: "Hachiman",
      role: "Hunter"
    },
    {
      id: 49,
      name: "Hades",
      role: "Mage"
    },
    {
      id: 50,
      name: "He Bo",
      role: "Mage"
    },
    {
      id: 51,
      name: "Heimdallr",
      role: "Hunter"
    },
    {
      id: 52,
      name: "Hel",
      role: "Mage"
    },
    {
      id: 53,
      name: "Hera",
      role: "Mage"
    },
    {
      id: 54,
      name: "Hercules",
      role: "Warrior"
    },
    {
      id: 55,
      name: "Horus",
      role: "Warrior"
    },
    {
      id: 56,
      name: "Hou Yi",
      role: "Hunter"
    },
    {
      id: 57,
      name: "Hun Batz",
      role: "Assassin"
    },
    {
      id: 58,
      name: "Ishtar",
      role: "Hunter"
    },
    {
      id: 59,
      name: "Ix Chel",
      role: "Mage"
    },
    {
      id: 60,
      name: "Izanami",
      role: "Hunter"
    },
    {
      id: 61,
      name: "Janus",
      role: "Mage"
    },
    {
      id: 62,
      name: "Jing Wei",
      role: "Hunter"
    },
    {
      id: 63,
      name: "Jormungandr",
      role: "Guardian"
    },
    {
      id: 64,
      name: "Kali",
      role: "Assassin"
    },
    {
      id: 65,
      name: "Khepri",
      role: "Guardian"
    },
    {
      id: 66,
      name: "King Arthur",
      role: "Warrior"
    },
    {
      id: 67,
      name: "Kukulkan",
      role: "Mage"
    },
    {
      id: 68,
      name: "Kumbhakarna",
      role: "Guardian"
    },
    {
      id: 69,
      name: "Kuzenbo",
      role: "Guardian"
    },
    {
      id: 70,
      name: "Lancelot",
      role: "Assassin"
    },
    {
      id: 71,
      name: "Loki",
      role: "Assassin"
    },
    {
      id: 72,
      name: "Martichoras",
      role: "Hunter"
    },
    {
      id: 73,
      name: "Maui",
      role: "Guardian"
    },
    {
      id: 74,
      name: "Medusa",
      role: "Hunter"
    },
    {
      id: 75,
      name: "Mercury",
      role: "Assassin"
    },
    {
      id: 76,
      name: "Merlin",
      role: "Mage"
    },
    {
      id: 77,
      name: "Morgan Le Fay",
      role: "Mage"
    },
    {
      id: 78,
      name: "Mulan",
      role: "Warrior"
    },
    {
      id: 79,
      name: "Ne Zha",
      role: "Assassin"
    },
    {
      id: 80,
      name: "Neith",
      role: "Hunter"
    },
    {
      id: 81,
      name: "Nemesis",
      role: "Assassin"
    },
    {
      id: 82,
      name: "Nike",
      role: "Warrior"
    },
    {
      id: 83,
      name: "Nox",
      role: "Mage"
    },
    {
      id: 84,
      name: "Nu Wa",
      role: "Mage"
    },
    {
      id: 85,
      name: "Odin",
      role: "Warrior"
    },
    {
      id: 86,
      name: "Olorun",
      role: "Mage"
    },
    {
      id: 87,
      name: "Osiris",
      role: "Warrior"
    },
    {
      id: 88,
      name: "Pele",
      role: "Assassin"
    },
    {
      id: 89,
      name: "Persephone",
      role: "Mage"
    },
    {
      id: 90,
      name: "Poseidon",
      role: "Mage"
    },
    {
      id: 91,
      name: "Ra",
      role: "Mage"
    },
    {
      id: 92,
      name: "Raijin",
      role: "Mage"
    },
    {
      id: 93,
      name: "Rama",
      role: "Hunter"
    },
    {
      id: 94,
      name: "Ratatoskr",
      role: "Assassin"
    },
    {
      id: 95,
      name: "Ravana",
      role: "Assassin"
    },
    {
      id: 96,
      name: "Scylla",
      role: "Mage"
    },
    {
      id: 97,
      name: "Serqet",
      role: "Assassin"
    },
    {
      id: 98,
      name: "Set",
      role: "Assassin"
    },
    {
      id: 99,
      name: "Shiva",
      role: "Warrior"
    },
    {
      id: 100,
      name: "Skadi",
      role: "Hunter"
    },
    {
      id: 101,
      name: "Sobek",
      role: "Guardian"
    },
    {
      id: 102,
      name: "Sol",
      role: "Mage"
    },
    {
      id: 103,
      name: "Sun Wukong",
      role: "Warrior"
    },
    {
      id: 104,
      name: "Surtr",
      role: "Warrior"
    },
    {
      id: 105,
      name: "Susano",
      role: "Assassin"
    },
    {
      id: 106,
      name: "Sylvanus",
      role: "Guardian"
    },
    {
      id: 107,
      name: "Terra",
      role: "Guardian"
    },
    {
      id: 108,
      name: "Thanatos",
      role: "Assassin"
    },
    {
      id: 109,
      name: "The Morrigan",
      role: "Mage"
    },
    {
      id: 110,
      name: "Thor",
      role: "Assassin"
    },
    {
      id: 111,
      name: "Thoth",
      role: "Mage"
    },
    {
      id: 112,
      name: "Tiamat",
      role: "Mage"
    },
    {
      id: 113,
      name: "Tsukuyomi",
      role: "Assassin"
    },
    {
      id: 114,
      name: "Tyr",
      role: "Warrior"
    },
    {
      id: 115,
      name: "Ullr",
      role: "Hunter"
    },
    {
      id: 116,
      name: "Vamana",
      role: "Warrior"
    },
    {
      id: 117,
      name: "Vulcan",
      role: "Mage"
    },
    {
      id: 118,
      name: "Xbalanque",
      role: "Hunter"
    },
    {
      id: 119,
      name: "Xing Tian",
      role: "Guardian"
    },
    {
      id: 120,
      name: "Yemoja",
      role: "Guardian"
    },
    {
      id: 121,
      name: "Ymir",
      role: "Guardian"
    },
    {
      id: 122,
      name: "Yu Huang",
      role: "Mage"
    },
    {
      id: 123,
      name: "Zeus",
      role: "Mage"
    },
    {
      id: 124,
      name: "Zhong Kui",
      role: "Mage"
    }
  ]

  getGods() {

    return this.gods;

  }

}