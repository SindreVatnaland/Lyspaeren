interface ICardData {
    cardTitle: string,
    cardDescription?: string,
    cardRating: string,
    cardPrice: string,
    cardImage: string
}

export const cardData = () => ([{
    cardTitle: "iPhone screen needs repair",
    cardDescription: "Description",
    cardRating: "★4.3",
    cardPrice: "400kr",
    cardImage: "https://i.insider.com/5995b6b4f1a850c62a8b56c8?width=1000&format=jpeg&auto=webp"
    },{
    cardTitle: "Car radio with damaged display",
    cardDescription: "",
    cardRating: "★3.4",
    cardPrice: "700kr",
    cardImage: "https://i.ytimg.com/vi/gtPeIv76OMY/maxresdefault.jpg"
    },{
    cardTitle: "Washing machine wont spin",
    cardDescription: "",
    cardRating: "★4.4",
    cardPrice: "850kr",
    cardImage: "https://universalappliancerepair.com/wp-content/uploads/2017/08/blog_washer-featured.jpg"
    },{
    cardTitle: "Damaged back on Samsung S7",
    cardDescription: "",
    cardRating: "★3.9",
    cardPrice: "350kr",
    cardImage: "https://www.cnet.com/a/img/CYd3Wu-1ADhT9SbdaHFVKWnl_2o=/1200x675/2016/03/18/a1ad8867-64c1-48ad-8fc5-086ea9fcad4e/fd-samsung-s7-cracked-broken-6654-001.jpg"
    },{
    cardTitle: "AirPods with dead battery",
    cardDescription: "",
    cardRating: "★4.1",
    cardPrice: "500kr",
    cardImage: "https://www.slashgear.com/wp-content/uploads/2016/09/i-Jvdx8XM-X3-1280x720.jpg"
    },{
    cardTitle: "Xbox red ring of death",
    cardDescription: "",
    cardRating: "★3.4",
    cardPrice: "250kr",
    cardImage: "https://www.gamereactor.no/media/56/_1495614b.jpg"
    },{
    cardTitle: "Malfunctioning rock",
    cardDescription: "",
    cardRating: "★4.8",
    cardPrice: "700kr",
    cardImage: "https://imagez.tmz.com/image/85/16by9/2020/10/26/855055b47150413aaa4ca315fc445cc6_xl.jpg"
    }
]);