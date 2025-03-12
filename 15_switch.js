let day = "Tuesday";

switch (day) {
    case "Monday":
        console.log("Start of the work week!");
        break;
    case "Tuesday":
        console.log("It's just Tuesday.");
        break;
    case "Wednesday":
        console.log("Mid-week day.");
        break;
    case "Thursday":
        console.log("Almost the weekend!");
        break;
    case "Friday":
        console.log("Weekend is near!");
        break;
    case "Saturday":
    case "Sunday":
        console.log("It's the weekend!");
        break;
    default:
        console.log("Invalid day.");
}
