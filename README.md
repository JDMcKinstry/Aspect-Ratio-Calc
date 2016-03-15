# Aspect-Ratio-Calc
Simple method for obtaining Aspect Ratio Information

This will either get you a missing variable, or will give you the aspect ratio (if viable) between two sets of sizes.

####Examples:

 - `aspectRatioHD({ height: 600, width: 800 }, { height: 1200, width: 1600 })` = [4, 3]
 - `aspectRatioHD({ height: 600, width: 800 }, { height: 1200 })` = 1600 (the new width)
 - `aspectRatioHD({ height: 600 }, { height: 1200, width: 1600 })` = 800 (the original width)
