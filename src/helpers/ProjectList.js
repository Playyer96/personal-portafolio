import RoadSafetyThumbnail from "../assets/Road-Safety_Enviroment.png";
import RoadSafetyBikePlatform from "../assets/Road-Safety_BikePlatformPhoto.png";
import RoadSafetyCarPlatform from "../assets/Road-Safety_CarPlatformPhoto.png";
import RoadSafetyEnvironment from "../assets/Road-Safety_Environment_2.png";
import SofasaThumbnail from "../assets/Sofasa_TakingPhotoMechanic.png";
import SofasaPickingTool from "../assets/Sofasa_PickingTool_1.png";
import SofasaPocketInteraction from "../assets/Sofasa_PocketInteraction.png";
import SofasaTrainingMode from "../assets/Sofasa_TrainingMode_1.png";
import SofasaTeleportMechanic from "../assets/Sofasa_TeleportMechanic.png";
import WorldVsThumbnail from "../assets/WorldVS_Menu.png";
import WorldVSCharacters from "../assets/WorldVS_Characters.png";
import WorldVSCharacterSelection from "../assets/WorldVS_CharacterSelection.png";
import WorldVsInGame from "../assets/WorldVS_In-Game.png";
import GlobalSickJamThumbnail from "../assets/Global-Sick-Jam_SplashScreen.png";
import GlobalSickJamCharacterSelection from "../assets/Global-Sick-Jam_CharacterSelection.png";
import GlobalSickJamEnd from "../assets/Global-Sick-Jam_End.png";
import GlobalSickJamInGame from "../assets/Global-Sick-Jam_InGame.png";
import SamsongThumbnail from "../assets/Samsong_1_1.png";
import SamsongAttack from "../assets/Samsong2_1.png";
import SamsongDeath from "../assets/Samsong3_1.png";

export const ProjectList = [
  {
    name: "Road Safety",
    image: RoadSafetyThumbnail,
    images: [
      { id: "1", image: RoadSafetyThumbnail },
      { id: "2", image: RoadSafetyBikePlatform },
      { id: "3", image: RoadSafetyCarPlatform },
      { id: "4", image: RoadSafetyEnvironment },
    ],
    descriptions: [
      "Virtual reality simulator that puts the player in an environment with a high accident rate to evaluate whether or not they meet road regulations.\n",
      "The built city recreates scenarios such as: run over in a school zone, not respecting a traffic light or stop and other specific cases for motorcycles and cars such as overtaking vehicles and zigzagging.\n",
    ],
    responsabilities: [
      "C++ Mechanics",
      "Blueprints Mechanics",
      "UI Programming",
      "Code Refactoring",
      "Asset Integration",
      "Game Optimization",
    ],
  },
  {
    name: "Sofasa Logistica",
    image: SofasaThumbnail,
    images: [
      { id: "1", image: SofasaThumbnail },
      { id: "2", image: SofasaPickingTool },
      { id: "3", image: SofasaPocketInteraction },
      { id: "4", image: SofasaTeleportMechanic },
      { id: "5", image: SofasaTrainingMode },
    ],
    descriptions: [
      "Training simulators for Renault warehouse which is helping the company warehouse, improve the training sessions helping the employees learn faster get faster without interrupting the real environment.",
    ],
    responsabilities: [
      "Project Architecture",
      "Gameplay Mechanics",
      "UI Programming",
      "Api Conections",
      "Mechanics Adaptation for Hi5 GLoves And HTC Vive controllers",
      "Optimizations",
      "Asset Integration",
    ],
  },
  {
    name: "World VS",
    image: WorldVsThumbnail,
    images: [
      { id: "1", image: WorldVsThumbnail },
      { id: "2", image: WorldVSCharacterSelection },
      { id: "3", image: WorldVSCharacters },
      { id: "4", image: WorldVsInGame },
    ],
    descriptions: [
      "Fight for the honor of their universe. its a fight where the main characters from my classmates games fight each other and a textureless cube, because why not?",
    ],
    responsabilities: [
      "Gameplay Mechanics",
      "UI Programming",
      "Animation Programming",
      "Game Optimization",
      "Assets Integration",
    ],
  },
  {
    name: "Global Sick Jam",
    image: GlobalSickJamThumbnail,
    images: [
      { id: "1", image: GlobalSickJamThumbnail },
      { id: "2", image: GlobalSickJamCharacterSelection },
      { id: "3", image: GlobalSickJamInGame },
      { id: "4", image: GlobalSickJamEnd },
    ],
    descriptions: [
      "This game was made in the global game jam 2018, which consists in transmitting diseases among the attendees of the GGJ event at the UPB Coliseum. Fighting game for 2-4 players. Multiple controllers support.",
    ],
    responsabilities: [
      "Map Interactions",
      "UI Programming",
      "Animation Programming",
      "Character Movements",
      "Enemies AI",
    ],
  },
  {
    name: "Samsong",
    image: SamsongThumbnail,
    images: [
      { id: "1", image: SamsongThumbnail },
      { id: "2", image: SamsongAttack },
      { id: "3", image: SamsongDeath },
    ],
    descriptions: [
      "Samsong the barbarian, must protect his cave from countless bats using the best weapon possible, his electric triangle.Game created in the Global Game jam 2017 Winner of the best use of Hardware Global Game Jam 2017 (U.P.B, Medellín, Colombia).",
    ],
    responsabilities: [
      "Gameplay Mechanics",
      "UI Programming",
      "Game Optimization",
      "AI Simple Movement",
      "Animation Programming",
    ],
  },
];
