const feed = [
    {
        id: 0,
        profile: "AJ + Español",
        username: "ajplusespanol",
        profileUrl: 'https://pbs.twimg.com/profile_images/1199022496521080832/tBx9LPh8_400x400.png',
        content: `Laika fue elegida para viajar al espacio sabiendo que no resistiría.
        ¿Son éticas nuestras maneras de hacer ciencia? 
        Queremos saber qué opinas.
        `,
        interaction: {
            comments: 5,
            retweets: 66,
            likes: 126,
            commentsDone: false,
            retweetsDone: false,
            likesDone: false
        },
        verified: false,
        blocked: false,
        menu: false
    },
    {
        id: 1,
        profile: "Elon Musk",
        username: "elonmusk",
        profileUrl: 'https://static.independent.co.uk/s3fs-public/thumbnails/image/2018/08/08/17/elon-musk.jpg',
        content: `Several thousand more Starlink beta participation invitations going out this week.
        `,
        interaction: {
            comments: 6700,
            retweets: 3700,
            likes: 84000,
            commentsDone: false,
            retweetsDone: false,
            likesDone: false
        },
        verified: true,
        blocked: false,
        menu: false
    },
    {
        id: 2,
        profile: "Google",
        username: "google",
        profileUrl: 'https://images.theconversation.com/files/93616/original/image-20150902-6700-t2axrz.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1000&fit=clip',
        content: `20 years ago today the first crew of astronauts and researchers arrived at the International Space Station, forever changing how we explore space. Cohete Celebrate #SpaceStation20th with @NASA
        & @GoogleArts by exploring a 3D model of the`,
        interaction: {
            comments: 26,
            retweets: 100,
            likes: 693,
            commentsDone: false,
            retweetsDone: false,
            likesDone: false
        },
        verified: true,
        blocked: false,
        menu: false
    },
    {
        id: 3,
        profile: "LeBron James",
        username: "KingJames",
        profileUrl: 'https://pbs.twimg.com/profile_images/1010862750401253377/Rof4XuYC_400x400.jpg',
        content: `Y’all see the setup right???!!!`,
        interaction: {
            comments: 17600,
            retweets: 1300,
            likes: 78800,
            commentsDone: false,
            retweetsDone: false,
            likesDone: false
        },
        verified: true,
        blocked: false,
        menu: false
    },
    {
        id: 4,
        profile: "BBC Breaking News",
        username: "BBCBreaking",
        profileUrl: 'https://pbs.twimg.com/profile_images/1150716997254209536/M7gkjsv5.jpg',
        content: `Prince William contracted Covid-19 in April at a similar time to his father Prince Charles, palace sources tell BBC
        `,
        interaction: {
            comments: 1300,
            retweets: 2200,
            likes: 4200,
            commentsDone: false,
            retweetsDone: false,
            likesDone: false
        },
        verified: true,
        blocked: false,
        menu: false
    },
    {
        id: 5,
        profile: "NVIDIA GeForce",
        username: "NVIDIAGeForce",
        profileUrl: 'https://pbs.twimg.com/profile_images/1301059967378771968/d6hDFA-r_400x400.jpg',
        content: `Hitch a ride on the RTX Battle Bus!
        Experience Fortnite in a new light with NVIDIA ray traced shadows, global illumination and ambient occlusion. 
        Learn more about RTX, DLSS, and NVIDIA Reflex in Fortnite: https://nvidia.com/en-us/geforce/campaigns/play-fortnite-with-rtx/`,
        interaction: {
            comments: 56,
            retweets: 34,
            likes: 524,
            commentsDone: false,
            retweetsDone: false,
            likesDone: false
        },
        verified: true,
        blocked: false,
        menu: false
    },
    {
        id: 6,
        profile: "National Geographic",
        username: "NatGeo",
        profileUrl: 'https://pbs.twimg.com/profile_images/1305841513050583045/GMz3LpM1_400x400.png',
        content: `What's the most soothing experience you've had in nature? (Bonus points if you have a photo or video)`,
        interaction: {
            comments: 128,
            retweets: 76,
            likes: 434,
            commentsDone: false,
            retweetsDone: false,
            likesDone: false
        },
        verified: true,
        blocked: false,
        menu: false
    },
    {
        id: 7,
        profile: "Hipertextual",
        username: "Hipertextual",
        profileUrl: 'https://pbs.twimg.com/profile_images/1280427548653092864/X9bC3ZMZ_400x400.jpg',
        content: `Cinco recomendaciones, y una sorpresa, para ver en Netflix en noviembre`,
        interaction: {
            comments: 0,
            retweets: 1,
            likes: 4,
            commentsDone: false,
            retweetsDone: false,
            likesDone: false
        },
        verified: true,
        blocked: false,
        menu: false
    },
   {
        id: 8,
        profile: "Real Madrid C.F.",
        username: "realmadrid",
        profileUrl: 'https://upload.wikimedia.org/wikipedia/an/thumb/c/c7/Logo_Real_Madrid.svg/500px-Logo_Real_Madrid.svg.png',
        content: `¡El capitán, @SergioRamos, alcanza la cifra de 1️⃣0️⃣0️⃣ goles con la camiseta del 
        @RealMadrid! #RealFootball | #HalaMadrid`,
        interaction: {
            comments: 210,
            retweets: 3700,
            likes: 14900,
            commentsDone: false,
            retweetsDone: false,
            likesDone: false
        },
        verified: true,
        blocked: false,
        menu: false
    },
    {
        id: 9,
        profile: "UEFA Champions League",
        username: "ChampionsLeague",
        profileUrl: 'https://pbs.twimg.com/profile_images/1073607078109949957/74oimLX4_400x400.jpg',
        content: `Bayern have won their last 13 Champions League games... #UCL`,
        interaction: {
            comments: 19,
            retweets: 54,
            likes: 818,
            commentsDone: false,
            retweetsDone: false,
            likesDone: false
        },
        verified: true,
        blocked: false,
        menu: false
    },
    {
        id: 10,
        profile: "FC Barcelona",
        username: "FCBarcelona_es",
        profileUrl: 'https://www.ecured.cu/images/9/9e/Fcbarcelona.png',
        content: `¡La 
        @LigadeCampeones no se detiene!
        Preparados para una nueva noche europea. 
        Este miércoles, #BarçaDynamo`,
        interaction: {
            comments: 6,
            retweets: 30,
            likes: 723,
            commentsDone: false,
            retweetsDone: false,
            likesDone: false
        },
        verified: true,
        blocked: true,
        menu: false
    },
    {
        id: 11,
        profile: "Youtube",
        username: "Youtube",
        profileUrl: 'https://lh3.googleusercontent.com/lMoItBgdPPVDJsNOVtP26EKHePkwBg-PkuY9NOrc-fumRtTFP4XhpUNk_22syN4Datc=s180',
        content: `Drop links to the videos that are helping you right now`,
        interaction: {
            comments: 4900,
            retweets: 878,
            likes: 11300,
            commentsDone: false,
            retweetsDone: false,
            likesDone: false
        },
        verified: true,
        blocked: true,
        menu: false
    }
];
export default feed