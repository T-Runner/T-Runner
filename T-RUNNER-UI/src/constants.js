export const defaultMember = {
  fullname: "",
  username: "",
  role: "",
  groupName: "",
  email: "",
  phoneNumber: "",
  DOB: "",
  weight: "",
  gender: "",
};

export const defaultExerciseLibrary = {
  name: "",
  img: "",
};

const createRoleData = (role) => {
  return { role };
};

export const roleDatas = [
  createRoleData("Super Admin"),
  createRoleData("Admin"),
  createRoleData("Coach"),
  createRoleData("Member"),
  createRoleData("Customer Service"),
];

const createData = (
  fullname,
  username,
  role,
  groupName,
  email,
  phoneNumber,
  DOB,
  weight,
  gender
) => {
  return {
    fullname,
    username,
    role,
    groupName,
    email,
    phoneNumber,
    DOB,
    weight,
    gender,
  };
};

export const memberdatas = [
  createData(
    "Tino Phan",
    "tinophan247",
    "Super Admin",
    "TMA Group",
    "tinophan@gmail.com",
    "0999888777",
    "1/1/2000",
    "75kg",
    "Male"
  ),
  createData(
    "Han Trinh",
    "peDau",
    "Admin",
    "OTF Group",
    "hanytrinh@gmail.com",
    "0987654321",
    "2/2/1995",
    "45kg",
    "Female"
  ),
  createData(
    "Anh Phan",
    "anhphan123",
    "Coach",
    "TMA Group",
    "anhphan@gmail.com",
    "0999777666",
    "3/3/2000",
    "80kg",
    "Male"
  ),
  createData(
    "Duc Vo",
    "ducvo789",
    "Member",
    "CT4 Group",
    "ducvo@gmail.com",
    "0999555444",
    "4/4/2000",
    "65kg",
    "Male"
  ),
  createData(
    "Huy Nguyen",
    "anhHatDe",
    "Member",
    "PDA Group",
    "huynguyen@gmail.com",
    "0999444333",
    "5/5/2000",
    "75kg",
    "Male"
  ),
  createData(
    "Tony Tong",
    "tonytong567",
    "Customer Service",
    "TMA Group",
    "tonytong@gmail.com",
    "0999111222",
    "6/5/1987",
    "70kg",
    "Male"
  ),
];

const createDataExercise = (img, name) => {
  return { img, name };
};

export const exercisesdata = [
  createDataExercise(
    "https://encrypted-tbn0.gstatic.com/ima  ges?q=tbn:ANd9GcQe8BtgN04salqSqXG_hA4lb-WDwetpZprN0jtb_ucY95CpIUXWyTTvVMCEBMEhRgKvg6k&usqp=CAU",
    "Jogging with Treadmill"
  ),
  createDataExercise(
    "https://blog.o2fitnessclubs.com/hubfs/les%20mills%202%20.jpg",
    "Squad with Dumbbell"
  ),
  createDataExercise(
    "https://www.jtxfitness.com/media/catalog/product/s/t/studio_bike_from_jtx_fitness_-_built_for_durability_stability_performance_1_1.jpg",
    "Cardio with Bike"
  ),
  createDataExercise(
    "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/determined-men-exercising-on-rowing-machines-at-royalty-free-image-1625135789.jpg?crop=1.00xw:0.753xh;0,0.169xh&resize=1200:*",
    "Rower Exercises"
  ),
  createDataExercise(
    "https://hips.hearstapps.com/hmg-prod/images/sportswoman-doing-sit-ups-with-medicine-ball-on-royalty-free-image-1040221548-1548258778.jpg",
    "Medicine Ball Exercises"
  ),
  createDataExercise(
    "https://health.clevelandclinic.org/wp-content/uploads/sites/3/2021/05/bicycleAbCruches-1216161742_770x553-650x428.jpg",
    "Ab workout"
  ),
  createDataExercise(
    "https://assets.gqindia.com/photos/5cee7eb00379a73d25177759/master/pass/Pushup.jpg",
    "Push up"
  ),
  createDataExercise(
    "https://www.jtxfitness.com/media/catalog/product/cache/aea7ede9c4f8eec24074fda02ef96ae3/h/o/home_cross_trainer_1.jpg",
    "Strider workout"
  ),
  createDataExercise(
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxAnpWr7QutxIWg_B4ekGMn1YMVqYTLffguA&usqp=CAU",
    "Bosu workout"
  ),
  createDataExercise(
    "https://www.stack.com/wp-content/uploads/2013/03/Decline-Bench1.png",
    "Decline Bench workout"
  ),
  createDataExercise(
    "https://cdn.shopify.com/s/files/1/1283/2557/articles/Resistance_Band_Exercises_1024x.jpg?v=1645052429",
    "Resistance bands workout"
  ),
  createDataExercise(
    "https://www.mensjournal.com/wp-content/uploads/2018/05/1380-dumbbell-curl1.jpg?quality=86&strip=all",
    "Dumbbell workout"
  ),
];

//fake data group list
const createDataGroups = (
  groupName,
  desc,
  location,
  sport,
  groupType,
  createdDate,
  totalRunners,
  active,
  website,
  checkbox,
  img
) => {
  return {
    groupName,
    desc,
    location,
    sport,
    groupType,
    createdDate,
    totalRunners,
    active,
    website,
    checkbox,
    img,
  };
};

export const groupData = [
  createDataGroups(
    "Group A",
    "We are the one. We ride, we run",
    "Hà Nội",
    ["Run"],
    "Company/Workplace",
    "01/15/2023",
    200,
    "Enabled",
    "https://www.tma.vn/",
    true,
    "https://kingscampsandfitness.com/wp-content/uploads/2016/06/Trail-Running-Square.jpg"
  ),
  createDataGroups(
    "Group B",
    "Enjoy the moment that your",
    "Hà Nam",
    ["Row"],
    "Other",
    "01/07/2023",
    178,
    "Enabled",
    "https://www.tma.vn/",
    true,
    "https://img.freepik.com/premium-vector/badminton-rackets-flat-square-icon-with-shadows_47586-1.jpg"
  ),
  createDataGroups(
    "Group C",
    "No description",
    "Hải Dương",
    ["Run", "Ride"],
    "Racing Team",
    "12/21/2022",
    23,
    "Disabled",
    "",
    false,
    "https://img.freepik.com/free-psd/reasons-ride-bike-ad-template-square-flyer_23-2148755171.jpg"
  ),
  createDataGroups(
    "Group A",
    "We are the one. We ride, we run",
    "Hà Nội",
    ["Run"],
    "Company/Workplace",
    "01/15/2023",
    200,
    "Enabled",
    "https://www.tma.vn/",
    true,
    "https://kingscampsandfitness.com/wp-content/uploads/2016/06/Trail-Running-Square.jpg"
  ),
  createDataGroups(
    "Group B",
    "Enjoy the moment that your",
    "Hà Nam",
    ["Row"],
    "Other",
    "01/07/2023",
    178,
    "Enabled",
    "https://www.tma.vn/",
    true,
    "https://img.freepik.com/premium-vector/badminton-rackets-flat-square-icon-with-shadows_47586-1.jpg"
  ),
  createDataGroups(
    "Group C",
    "No description",
    "Hải Dương",
    ["Run", "Ride"],
    "Racing Team",
    "12/21/2022",
    23,
    "Disabled",
    "",
    false,
    "https://img.freepik.com/free-psd/reasons-ride-bike-ad-template-square-flyer_23-2148755171.jpg"
  ),
  createDataGroups(
    "Group A",
    "We are the one. We ride, we run",
    "Hà Nội",
    ["Run"],
    "Company/Workplace",
    "01/15/2023",
    200,
    "Enabled",
    "https://www.tma.vn/",
    true,
    "https://kingscampsandfitness.com/wp-content/uploads/2016/06/Trail-Running-Square.jpg"
  ),
  createDataGroups(
    "Group B",
    "Enjoy the moment that your",
    "Hà Nam",
    ["Row"],
    "Other",
    "01/07/2023",
    178,
    "Enabled",
    "https://www.tma.vn/",
    true,
    "https://img.freepik.com/premium-vector/badminton-rackets-flat-square-icon-with-shadows_47586-1.jpg"
  ),
  createDataGroups(
    "Group C",
    "No description",
    "Hải Dương",
    ["Run", "Ride"],
    "Racing Team",
    "12/21/2022",
    23,
    "Disabled",
    "",
    false,
    "https://img.freepik.com/free-psd/reasons-ride-bike-ad-template-square-flyer_23-2148755171.jpg"
  ),
];

export const defaultGroup = {
  groupName: "",
  desc: "",
  location: "",
  sport: [],
  groupType: "",
  createdDate: "",
  totalRunners: 0,
  active: "Enabled",
  website: "",
  checkbox: false,
  img: "",
};
//fake data location list
const createLocationData = (value) => {
  return { value };
};

export const locationDatas = [
  createLocationData("Hà Nội"),
  createLocationData("Hà Nam"),
  createLocationData("Hà Tĩnh"),
  createLocationData("Hải Dương"),
  createLocationData("Hải Phòng"),
];

//fake data group type
const createGroupTypeData = (value) => {
  return { value };
};

export const groupTypeDatas = [
  createGroupTypeData("Racing Team"),
  createGroupTypeData("Company/Workplace"),
  createGroupTypeData("Club"),
  createGroupTypeData("Shop"),
  createGroupTypeData("Other"),
];

//fake data active
const createActiveData = (value) => {
  return { value };
};

export const activeDatas = [
  createActiveData("Enabled"),
  createActiveData("Disabled"),
];

//fake data sport
const createDataSports = (
  sportName,
  sportType,
  lastModifiedBy,
  lastModifiedDate,
  active
) => {
  return { sportName, sportType, lastModifiedBy, lastModifiedDate, active };
};

export const sportData = [
  createDataSports(
    "Canoe",
    "Water Sports",
    "Gloria Yort",
    "01/15/2023",
    "Disabled"
  ),
  createDataSports(
    "CrossFit",
    "Other Sports",
    "Miranda Streich",
    "01/07/2023",
    "Disabled"
  ),
  createDataSports(
    "E-Bike Ride",
    "Cycle Sports",
    "Kyle Baile",
    "01/12/2023",
    "Disabled"
  ),
  createDataSports(
    "Golf",
    "Other Sports",
    "Neil Mayert",
    "12/21/2022",
    "Disabled"
  ),
  createDataSports(
    "Run",
    "Foot Sports",
    "Deanna Daniel",
    "12/04/2022",
    "Enabled"
  ),
  createDataSports(
    "Ride",
    "Cycle Sports",
    "Gloria Yort",
    "01/01/2023",
    "Enabled"
  ),
  createDataSports(
    "Row",
    "Water Sports",
    "Gloria Yort",
    "12/19/2022",
    "Enabled"
  ),
  createDataSports(
    "Sail",
    "Water Sports",
    "Deanna Daniel",
    "12/28/2022",
    "Disabled"
  ),
  createDataSports(
    "Skateboard",
    "Other Sports",
    "Deanna Daniel",
    "12/28/2022",
    "Disabled"
  ),
  createDataSports(
    "Surf",
    "Water Sports",
    "Gloria Yort",
    "12/28/2022",
    "Disabled"
  ),
  createDataSports(
    "Swim",
    "Water Sports",
    "Gloria Yort",
    "12/28/2022",
    "Disabled"
  ),
  createDataSports(
    "Walk",
    "Foot Sports",
    "Debra Klein",
    "12/28/2022",
    "Enabled"
  ),
  createDataSports(
    "Yoga",
    "Other Sports",
    "Gloria Yort",
    "12/28/2022",
    "Disabled"
  ),
];

export const defautSport = {
  sportName: "",
  sportType: "",
  lastModifiedBy: "",
  lastModifiedDate: "",
  active: "",
  img: "",
};

//fake data active
const createSportTypeData = (value) => {
  return { value };
};

export const sportTypeDatas = [
  createSportTypeData("Foot Sports"),
  createSportTypeData("Cycle Sports"),
  createSportTypeData("Water Sports"),
  createSportTypeData("Winter Sports"),
  createSportTypeData("Other Sports"),
];