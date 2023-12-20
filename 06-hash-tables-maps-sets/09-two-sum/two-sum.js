function twoSum(nums, target) {
    const numSet = new Set();

    for (let i = 0; i < nums.length; i++) {
        const compliment = target - nums[i];

        if (numSet.has(compliment)) {
            return [nums.indexOf(compliment), i];
        }

        numSet.add(nums[i]);
    }
}

module.exports = twoSum;
