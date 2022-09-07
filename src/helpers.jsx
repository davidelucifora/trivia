export default (function helpers(){

    const uid = () => Math.floor(Math.random()*Date.now()).toString(36)
    
    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array
    }

    return {uid, shuffleArray}
    
})()