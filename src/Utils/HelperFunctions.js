import imageCoding from '../Images/topic/imageCoding.png'
import imageCooking from '../Images/topic/imageCooking.png'
import imageFootball from '../Images/topic/imageFootball.png'
import moment from "moment/moment";

const HelperFunctions = {
    generateImageByTopic(topic) {
        if (topic === 'coding') {
            return  <img className="imagesOfTopic" src={imageCoding} alt="coding" />
        } else if (topic === 'cooking') {
            return  <img className="imagesOfTopic" src={imageCooking} alt="cooking" />
        } else {
            return  <img className="imagesOfTopic" src={imageFootball} alt="football" />
        }
    },
    generateDate(time){
        return moment.utc(time).format('DD/MM/YYYY')
    }
}

export default HelperFunctions