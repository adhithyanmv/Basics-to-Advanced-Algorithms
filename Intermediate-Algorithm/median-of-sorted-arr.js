var findMedianSortedArrays = function (nums1, nums2) {
  sorted = nums1.concat(nums2).sort((a, b) => a - b);
  if (sorted.length % 2 == 0) {
    return (sorted[sorted.length / 2 - 1] + sorted[sorted.length / 2]) / 2;
  }

  if (sorted.length % 2 == 1) {
    return sorted[(sorted.length - 1) / 2];
  }
};
