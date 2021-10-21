export interface ICardData {
    cardTitle: string,
    cardDescription?: string,
    cardRating: string,
    cardPrice: string,
    cardImage: string,
}

export const cardData = () => ([
    {
        cardTitle: "My PC's keyboard is not working!",
        cardDescription: "One week ago when I was using microsoft word, the keyboard on my PC suddenly stopped working! I have no idea why or how to fix this. Can somebody please help me?",
        cardRating: "3.8",
        cardPrice: "900kr",
        cardImage: "https://picsum.photos/id/0/700/400",
    }, {
        cardTitle: "iPhone screen needs repair",
        cardDescription: "I was walking my dog the other day when he suddenly decided to start running which caused me to drop my phone on concrete.",
        cardRating: "4.3",
        cardPrice: "400kr",
        cardImage: "https://i.insider.com/5995b6b4f1a850c62a8b56c8?width=1000&format=jpeg&auto=webp"
    }, {
        cardTitle: "Car radio with damaged display",
        cardDescription: "Just bought a new car with this defect radio and want it fixed",
        cardRating: "3.4",
        cardPrice: "700kr",
        cardImage: "https://i.ytimg.com/vi/gtPeIv76OMY/maxresdefault.jpg"
    }, {
        cardTitle: "Washing machine wont spin",
        cardDescription: "Have had this washing machine for about a year now and it just decided to not run when starting a washing program ",
        cardRating: "4.4",
        cardPrice: "850kr",
        cardImage: "https://universalappliancerepair.com/wp-content/uploads/2017/08/blog_washer-featured.jpg"
    }, {
        cardTitle: "Damaged back on Samsung S7",
        cardDescription: "Dropped my phone, whoops!",
        cardRating: "3.9",
        cardPrice: "350kr",
        cardImage: "https://www.cnet.com/a/img/CYd3Wu-1ADhT9SbdaHFVKWnl_2o=/1200x675/2016/03/18/a1ad8867-64c1-48ad-8fc5-086ea9fcad4e/fd-samsung-s7-cracked-broken-6654-001.jpg"
    }, {
        cardTitle: "AirPods with dead battery",
        cardDescription: "Help!",
        cardRating: "4.1",
        cardPrice: "500kr",
        cardImage: "https://www.slashgear.com/wp-content/uploads/2016/09/i-Jvdx8XM-X3-1280x720.jpg"
    }, {
        cardTitle: "Xbox red ring of death",
        cardDescription: "Took my old xbox 360 out the closet in many years and it happened to not work..",
        cardRating: "3.4",
        cardPrice: "250kr",
        cardImage: "https://www.gamereactor.no/media/56/_1495614b.jpg"
    }, {
        cardTitle: "Malfunctioning rock",
        cardDescription: "Rock too damn hard..",
        cardRating: "4.8",
        cardPrice: "700kr",
        cardImage: "https://imagez.tmz.com/image/85/16by9/2020/10/26/855055b47150413aaa4ca315fc445cc6_xl.jpg"
    }
]);