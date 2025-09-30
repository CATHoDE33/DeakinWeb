import { faker } from '@faker-js/faker';
import articleImage1 from "./images/image1.jpg"
import articleImage2 from "./images/image2.jpg"
import articleImage3 from "./images/image3.jpg"

const initialAnimalType = faker.animal.type()
const firstLetter = initialAnimalType.charAt(0)
const firstLetterCap = firstLetter.toUpperCase()
const remainingLetters = initialAnimalType.slice(1)
const capitalizedAnimalType = firstLetterCap + remainingLetters

const ArticleList = [
    {
        "key" : 0,
        "image" : articleImage1,
        "title" : "Credit Union Hacked",
        "description" : "International company " + faker.company.name() + " has had it's secure data breached yesterday night, with officials stating that ille...",
        "author" : "Written by " + faker.person.fullName(),
        "ratingNumber" : faker.number.float({multipleOf: 0.1, min: 0.1, max: 5})
    },
    {
        "key" : 1,
        "image" : articleImage2,
        "title" : "New Species of " + capitalizedAnimalType + " Discovered",
        "description" : "Previously thought to be mostly known to biologists, this new animal species has been discovered off the coast of South...",
        "author" : "Written by " + faker.person.fullName(),
        "ratingNumber" : faker.number.float({multipleOf: 0.1, min: 0.1, max: 5})
    },
    {
        "key" : 2,
        "image" : articleImage3,
        "title" : "A Development in Hydrogen Cars",
        "description" : "In terms of the automobile, batteries and petrol powered ones have generally been the two competing forces in the indust...",
        "author" : "Written by " + faker.person.fullName(),
        "ratingNumber" : faker.number.float({multipleOf: 0.1, min: 0.1, max: 5})
    }
]

export default ArticleList