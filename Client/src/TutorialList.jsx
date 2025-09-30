import { faker } from '@faker-js/faker';
import tutorialImage4 from "./images/image4.jpg"
import tutorialImage5 from "./images/image5.jpg"
import tutorialImage6 from "./images/image6.png"

const TutorialList = [
    {
        "key" : 0,
        "image" : tutorialImage4,
        "title" : "Photoshop Shading Tutorial",
        "description" : "This is part of my 12-part 'Photoshop for beginners' course (full playlist available on my website).",
        "author" : faker.internet.username(),
        "ratingNumber" : faker.number.float({multipleOf: 0.1, min: 0.1, max: 5})
    },
    {
        "key" : 1,
        "image" : tutorialImage5,
        "title" : "How to Tie a Tie",
        "description" : "Pretty self-explanatory. Will cover the 3 most common techniques.",
        "author" : faker.internet.username(),
        "ratingNumber" : faker.number.float({multipleOf: 0.1, min: 0.1, max: 5})
    },
    {
        "key" : 2,
        "image" : tutorialImage6,
        "title" : "Installing Linux for the First Time",
        "description" : "Linux is a great alternative to Windows and has some distinct advantages for people looking to have more access to the...",
        "author" : faker.internet.username(),
        "ratingNumber" : faker.number.float({multipleOf: 0.1, min: 0.1, max: 5})
    }
]

export default TutorialList