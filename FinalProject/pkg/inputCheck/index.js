const checkStringOfCategory = async (category) => {
    if (category === 'Breakfast' || 'Brunch' || 'Lunch' || 'Dinner') {
        return true
    }
    return false
} 

module.exports = {
    checkStringOfCategory
}