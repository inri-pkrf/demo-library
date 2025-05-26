const danSimulations = [
    {
        id: "dan-1",
        title: "נפילת טיל באור יהודה",
        location: "אור יהודה",
        description: "תיאור תיאור תיאור...",
        videoUrl: "https://drive.google.com/uc?export=download&id=1c7OR9PjEwCKSECxboSc7sL1mzIQxIbgD",
        tags: {
            emergency: ["נפילת טיל"],
            damage: ["בניין מגורים"],
            screenSize: ["דסקטופ"],
            videoType: ["וידאו HD"]
        }
    },
    // {
    //     id: "dan-2",
    //     title: "שריפה באור יהודה",
    //     location: "אור יהודה",
    //     description: "תיאור תיאור תיאור...",
    //     videoUrl: "https://drive.google.com/file/d/1uSWV-YKusB46L8xJ8J1cq2Zc8-mPAVes/view?usp=sharing",
    //     tags: {
    //         emergency: ["שריפה"],
    //         damage: ["בניין מגורים"],
    //         screenSize: ["דסקטופ"],
    //         videoType: ["וידאו HD"]
    //     }
    // },
    // {
    //     id: "dan-3",
    //     title: "שריפה בגבעת שמואל",
    //     location: "גבעת שמואל",
    //     description: "תיאור תיאור תיאור...",
    //     videoUrl: "/allDemos/מחוז דן/גבעת שמואל.mp4",
    //     tags: {
    //         emergency: ["שריפה"],
    //         damage: ["בית ספר"],
    //         screenSize: ["מובייל"],
    //         videoType: ["תמונה רחבה"]
    //     }
    // },
    // {
    //     id: "dan-4",
    //     title: "שיטפון בגני תקווה",
    //     location: "גני תקווה",
    //     description: "תיאור תיאור תיאור...",
    //     videoUrl: "/allDemos/מחוז דן/גני תקווה.mp4",
    //     tags: {
    //         emergency: ["שיטפון"],
    //         damage: ["כביש מרכזי"],
    //         screenSize: ["אימרסיבי"],
    //         videoType: ["וידאו רחב"]
    //     }
    // },
    // {
    //     id: "dan-5",
    //     title: "צונאמי בכפר יונה",
    //     location: "כפר יונה",
    //     description: "תיאור תיאור תיאור...",
    //     videoUrl: "/allDemos/מחוז דן/כפר יונה.mp4",
    //     tags: {
    //         emergency: ["צונאמי"],
    //         damage: ["בית חולים"],
    //         screenSize: ["VR"],
    //         videoType: ["סאונד"]
    //     }
    // },
    // {
    //     id: "dan-6",
    //     title: "מלחמה בכפר סבא",
    //     location: "כפר סבא",
    //     description: "תיאור תיאור תיאור...",
    //     videoUrl: "/allDemos/מחוז דן/כפר סבא1.mp4",
    //     tags: {
    //         emergency: ["מלחמה"],
    //         damage: ["בניין מגורים"],
    //         screenSize: ["טוטם"],
    //         videoType: ["וידאו HD"]
    //     }
    // },
    // {
    //     id: "dan-7",
    //     title: "נפילת טיל בכפר סבא",
    //     location: "כפר סבא",
    //     description: "תיאור תיאור תיאור...",
    //     videoUrl: "/allDemos/מחוז דן/כפר סבא2.mp4",
    //     tags: {
    //         emergency: ["נפילת טיל"],
    //         damage: ["בניין מגורים"],
    //         screenSize: ["טוטם"],
    //         videoType: ["וידאו HD"]
    //     }
    // },
    // {
    //     id: "dan-8",
    //     title: "אתר הרס בלב השרון",
    //     location: "לב השרון",
    //     description: "תיאור תיאור תיאור...",
    //     videoUrl: "/allDemos/מחוז דן/לב השרון.mp4",
    //     tags: {
    //         emergency: ["אתר הרס"],
    //         damage: ["בית חולים"],
    //         screenSize: ["דסקטופ"],
    //         videoType: ["תמונה HD"]
    //     }
    // },
    // {
    //     id: "dan-9",
    //     title: "כטב\"מים בנתניה",
    //     location: "נתניה",
    //     description: "תיאור תיאור תיאור...",
    //     videoUrl: "/allDemos/מחוז דן/נתניה1.mp4",
    //     tags: {
    //         emergency: ['כטב"מים'],
    //         damage: ["כביש מרכזי"],
    //         screenSize: ["אימרסיבי"],
    //         videoType: ["וידאו רחב"]
    //     }
    // },
    // {
    //     id: "dan-10",
    //     title: "שריפה בנתניה",
    //     location: "נתניה",
    //     description: "תיאור תיאור תיאור...",
    //     videoUrl: "/allDemos/מחוז דן/נתניה2.mp4",
    //     tags: {
    //         emergency: ['שריפה'],
    //         damage: ["כביש מרכזי"],
    //         screenSize: ["אימרסיבי"],
    //         videoType: ["וידאו רחב"]
    //     }
    // },
    // {
    //     id: "dan-11",
    //     title: "שיטפון בעמק כפרי",
    //     location: "עמק כפרי",
    //     description: "תיאור תיאור תיאור...",
    //     videoUrl: "/allDemos/מחוז דן/עמק כפר1.mp4",
    //     tags: {
    //         emergency: ["שיטפון"],
    //         damage: ["בית ספר"],
    //         screenSize: ["מובייל"],
    //         videoType: ["תמונה HD"]
    //     }
    // },
    // {
    //     id: "dan-12",
    //     title: "שריפה בעמק כפרי",
    //     location: "עמק כפרי",
    //     description: "תיאור תיאור תיאור...",
    //     videoUrl: "/allDemos/מחוז דן/עמק כפר2.mp4",
    //     tags: {
    //         emergency: ["שריפה"],
    //         damage: ["בית ספר"],
    //         screenSize: ["מובייל"],
    //         videoType: ["תמונה HD"]
    //     }
    // },
    // {
    //     id: "dan-13",
    //     title: "נפילת טיל בקריית אונו",
    //     location: "קריית אונו",
    //     description: "תיאור תיאור תיאור...",
    //     videoUrl: "/allDemos/מחוז דן/קריית אונו.mp4",
    //     tags: {
    //         emergency: ["נפילת טיל"],
    //         damage: ["בית חולים"],
    //         screenSize: ["VR"],
    //         videoType: ["וידאו HD"]
    //     }
    // },
    // {
    //     id: "dan-14",
    //     title: "מלחמה ברמת גן",
    //     location: "רמת גן",
    //     description: "תיאור תיאור תיאור...",
    //     videoUrl: "/allDemos/מחוז דן/רמת גן1.mp4",
    //     tags: {
    //         emergency: ["מלחמה"],
    //         damage: ["בית ספר"],
    //         screenSize: ["טוטם"],
    //         videoType: ["תמונה רחבה"]
    //     }
    // },
    // {
    //     id: "dan-15",
    //     title: "צונאמי ברמת גן",
    //     location: "רמת גן",
    //     description: "תיאור תיאור תיאור...",
    //     videoUrl: "/allDemos/מחוז דן/רמת גן2.mp4",
    //     tags: {
    //         emergency: ["צונאמי"],
    //         damage: ["בניין מגורים"],
    //         screenSize: ["דסקטופ"],
    //         videoType: ["וידאו רחב"]
    //     }
    // },
    // {
    //     id: "dan-16",
    //     title: "שריפה ברמת השרון",
    //     location: "רמת השרון",
    //     description: "תיאור תיאור תיאור...",
    //     videoUrl: "/allDemos/מחוז דן/רמת השרון.mp4",
    //     tags: {
    //         emergency: ["שריפה"],
    //         damage: ["כביש מרכזי"],
    //         screenSize: ["מובייל"],
    //         videoType: ["סאונד"]
    //     }
    // },
    // {
    //     id: "dan-17",
    //     title: "נפילת טיל בתל אביב יפו",
    //     location: "תל אביב יפו",
    //     description: "תיאור תיאור תיאור...",
    //     videoUrl: "/allDemos/מחוז דן/תל אביב יפו.mp4",
    //     tags: {
    //         emergency: ["נפילת טיל"],
    //         damage: ["בית חולים"],
    //         screenSize: ["VR"],
    //         videoType: ["וידאו HD"]
    //     }
    // }
];

export default danSimulations;
