/**
 * This function returns a bmi value that is calculated based on weight(kg) and height(cm).
 * @param {*} weightKg 
 * @param {*} heightCm 
 * @returns bmi that has 1 fixed floating point with rounded value
 */
exports.getBMI = function(weightKg, heightCm) {

    let bmi = 0
    if(weightKg != 0 && heightCm != 0) //input validation check
        bmi = weightKg / Math.pow(heightCm/100, 2); //covert height(cm) to height(m2)

    return bmi.toFixed(1); //return 1 fixed floating point and rounded value
}