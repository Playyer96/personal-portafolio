import RoadSafetyThumbnail from "../assets/Road-Safety_Enviroment.png";
import RoadSafetyBikePlatform from "../assets/Road-Safety_BikePlatformPhoto.png";
import RoadSafetyCarPlatform from "../assets/Road-Safety_CarPlatformPhoto.png";
import RoadSafetyEnvironment from "../assets/Road-Safety_Environment_2.png";
import SofasaThumbnail from "../assets/Sofasa_TakingPhotoMechanic.png";
import WorldVsThumbnail from "../assets/WorldVS_Menu.png";
import GlobalSickJamThumbnail from "../assets/Global-Sick-Jam_SplashScreen.png";
import SamsongThumbnail from "../assets/Samsong_1_1.png";

export const ProjectList = [
  {
    name: "Road Safety",
    images: [
      { id: "1", image: RoadSafetyThumbnail },
      { id: "2", image: RoadSafetyBikePlatform },
      { id: "3", image: RoadSafetyCarPlatform },
      { id: "4", image: RoadSafetyEnvironment },
    ],
    description:
      "Virtual reality simulator that puts the player in an environment with a high accident rate to evaluate whether or not they meet road regulations. The built city recreates scenarios such as: run over in a school zone, not respecting a traffic light or stop and other specific cases for motorcycles and cars such as overtaking vehicles and zigzagging.",
    responsabilities: "",
  },
  {
    name: "Sofasa Logistica",
    image: SofasaThumbnail,
    description:
      "Training simulators for Renault warehouse which is helping the company warehouse, improve the training sessions helping the employees learn faster get faster without interrupting the real environment.",
    responsabilities:
      "The architecture of the simulator, the development of the mechanics and fits them to the Hi5Gloves and HTC Viva controls.",
  },
  {
    name: "World VS",
    image: WorldVsThumbnail,
    description:
      "Fight for the honor of their universe. its a fight where the main characters from my classmates games fight each other and a textureless cube, because why not?",
  },
  {
    name: "Global Sick Jam",
    image: GlobalSickJamThumbnail,
    description:
      "This game was made in the global game jam 2018, which consists in transmitting diseases among the attendees of the GGJ event at the UPB Coliseum.",
    responsabilities:
      "Program some interactions on the map,Help in the programming of canvas UI, Support in the programming part of the main character's movement.",
  },
  {
    name: "Samsong",
    image: SamsongThumbnail,
    description:
      "Samsong the barbarian, must protect his cave from countless bats using the best weapon possible, his electric triangle.Game created in the Global Game jam 2017 Winner of the <b>best use of Hardware Global Game Jam 2017<b> (U.P.B, Medellín, Colombia).",
    responsabilities:
      "Programed the spawn of bats and musical notes, Worked with state machine for the animations, Recreate the enemies behaviours, Assisted the creation of controllers with sensors.",
  },
];
