const haifaSimulations = [
    // {
    //     id: "haifa-1",
    //     title: "פגיעת טיל בחיפה",
    //     location: "חיפה",
    //     description: "תיאור תיאור תיאור...",
    //     videoUrl: "/allDemos/מחוז חיפה/חיפה.mp4",
    //     tags: {
    //         emergency: ["נפילת טיל"],
    //         damage: ["נמל"],
    //         screenSize: ["דסקטופ"],
    //         videoType: ["וידאו HD"]
    //     }
    // },
    // {
    //     id: "haifa-2",
    //     title: "מהומה בחריש - תרחיש 1",
    //     location: "חריש",
    //     description: "תיאור תיאור תיאור...",
    //     videoUrl: "/allDemos/מחוז חיפה/חריש1.mp4",
    //     tags: {
    //         emergency: ["מהומות"],
    //         damage: ["כביש מרכזי"],
    //         screenSize: ["מובייל"],
    //         videoType: ["וידאו רחב"]
    //     }
    // },
    // {
    //     id: "haifa-3",
    //     title: "מהומה בחריש - תרחיש 2",
    //     location: "חריש",
    //     description: "תיאור תיאור תיאור...",
    //     videoUrl: "/allDemos/מחוז חיפה/חריש2.mp4",
    //     tags: {
    //         emergency: ["מהומות"],
    //         damage: ["מרכז מסחרי"],
    //         screenSize: ["דסקטופ"],
    //         videoType: ["תמונה HD"]
    //     }
    // },
    // {
    //     id: "haifa-4",
    //     title: "פגיעה בטירת הכרמל - תרחיש 1",
    //     location: "טירת הכרמל",
    //     description: "תיאור תיאור תיאור...",
    //     videoUrl: "/allDemos/מחוז חיפה/טירת הכרמל1.mp4",
    //     tags: {
    //         emergency: ["נפילת טיל"],
    //         damage: ["בניין מגורים"],
    //         screenSize: ["VR"],
    //         videoType: ["וידאו HD"]
    //     }
    // },
    // {
    //     id: "haifa-5",
    //     title: "פגיעה בטירת הכרמל - תרחיש 2",
    //     location: "טירת הכרמל",
    //     description: "תיאור תיאור תיאור...",
    //     videoUrl: "/allDemos/מחוז חיפה/טירת הכרמל2.mp4",
    //     tags: {
    //         emergency: ["שריפה"],
    //         damage: ["בית ספר"],
    //         screenSize: ["מובייל"],
    //         videoType: ["וידאו רחב"]
    //     }
    // },
    // {
    //     id: "haifa-6",
    //     title: "אירוע חירום במגדל העמק",
    //     location: "מגדל העמק",
    //     description: "תיאור תיאור תיאור...",
    //     videoUrl: "/allDemos/מחוז חיפה/מגדל העמק.mp4",
    //     tags: {
    //         emergency: ["מלחמה"],
    //         damage: ["אזור תעשייה"],
    //         screenSize: ["אימרסיבי"],
    //         videoType: ["תמונה HD"]
    //     }
    // },
    // {
    //     id: "haifa-7",
    //     title: "שיטפון בנוף הגליל",
    //     location: "נוף הגליל",
    //     description: "תיאור תיאור תיאור...",
    //     videoUrl: "/allDemos/מחוז חיפה/נוף הגליל.mp4",
    //     tags: {
    //         emergency: ["שיטפון"],
    //         damage: ["כביש מרכזי"],
    //         screenSize: ["טוטם"],
    //         videoType: ["וידאו HD"]
    //     }
    // },
    // {
    //     id: "haifa-8",
    //     title: "מהומה בנשר",
    //     location: "נשר",
    //     description: "תיאור תיאור תיאור...",
    //     videoUrl: "/allDemos/מחוז חיפה/נשר.mp4",
    //     tags: {
    //         emergency: ["מהומות"],
    //         damage: ["מרכז עירוני"],
    //         screenSize: ["דסקטופ"],
    //         videoType: ["תמונה רחבה"]
    //     }
    // },
    // {
    //     id: "haifa-9",
    //     title: "אירוע בחרום בקרית ביאליק - תרחיש 1",
    //     location: "קרית ביאליק",
    //     description: "תיאור תיאור תיאור...",
    //     videoUrl: "/allDemos/מחוז חיפה/קרית ביאליק1.mp4",
    //     tags: {
    //         emergency: ["נפילת טיל"],
    //         damage: ["בית חולים"],
    //         screenSize: ["VR"],
    //         videoType: ["וידאו HD"]
    //     }
    // },
    // {
    //     id: "haifa-10",
    //     title: "אירוע בחרום בקרית ביאליק - תרחיש 2",
    //     location: "קרית ביאליק",
    //     description: "תיאור תיאור תיאור...",
    //     videoUrl: "/allDemos/מחוז חיפה/קרית ביאליק2.mp4",
    //     tags: {
    //         emergency: ["מלחמה"],
    //         damage: ["אזור מגורים"],
    //         screenSize: ["אימרסיבי"],
    //         videoType: ["וידאו רחב"]
    //     }
    // },
    // {
    //     id: "haifa-11",
    //     title: "שריפה בקרית טבעון",
    //     location: "קרית טבעון",
    //     description: "תיאור תיאור תיאור...",
    //     videoUrl: "/allDemos/מחוז חיפה/קרית טבעון1.mp4",
    //     tags: {
    //         emergency: ["שריפה"],
    //         damage: ["יער קהילתי"],
    //         screenSize: ["מובייל"],
    //         videoType: ["תמונה HD"]
    //     }
    // },
    // {
    //     id: "haifa-12",
    //     title: "פגיעה קשה בקרית ים",
    //     location: "קרית ים",
    //     description: "תיאור תיאור תיאור...",
    //     videoUrl: "/allDemos/מחוז חיפה/קרית ים.mp4",
    //     tags: {
    //         emergency: ["כטב\"מים"],
    //         damage: ["חוף ים"],
    //         screenSize: ["דסקטופ"],
    //         videoType: ["וידאו רחב"]
    //     }
    // }
];

export default haifaSimulations;
