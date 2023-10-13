# DriveU-BGLoc

yarn
cd ios && pod install
npx react-native run-ios

The specified requirements have been exclusively implemented for the iOS platform only 

Notes :
- Implemented Background location fetching (Realtime || Interval set to 3 sec|| It can be changable) 
- Implemented Map view to see the users past location with marker 
- Handled Location permissions
- Stored users past location coordinates with timestamp in local storage with encrypted format
- Developed and deigned simple UI for better understand

Used Libraries 

{
    "@react-native-community/masked-view": "^0.1.11",
    "@react-navigation/native": "^6.1.8",
    "@react-navigation/stack": "^6.3.18",
    "@reduxjs/toolkit": "^1.9.7", // RTK TO STORE DATA USING REDUCERS
    "react": "18.2.0",
    "react-native": "0.72.6",
    "react-native-background-timer": "^2.4.1", // FOR BG TASK 
    "react-native-encrypted-storage": "^4.0.3", // ENCRYPTED STORAGE TO STORE USERS DATA IN SAFER SIDE
    "react-native-geolocation-service": "^5.3.1", // TO GET USER LOCATION
    "react-native-gesture-handler": "^2.13.2",
    "react-native-maps": "^1.8.0", // TO SHOW THE PAST LOCATIONS IN MAP VIEW
    "react-native-permissions": "^3.10.0", // HANDLING LOCATION PERMISSIONS
    "react-native-reanimated": "^3.5.4",
    "react-native-safe-area-context": "^4.7.2",
    "react-native-screens": "^3.25.0",
    "react-navigation-stack": "^2.10.4",
    "react-redux": "^8.1.3", 
    "redux-persist": "^6.0.0" // PERSISTING THE STORED DATA
}
