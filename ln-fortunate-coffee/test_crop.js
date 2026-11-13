const { execSync } = require('child_process');

// Sheet 1: image_552f357b.png (540x757)
// Items:
// 1. Lucky Noodle (top): x=80, y=140, w=380, h=240 -> square or balanced crop
// 2. Green Noodle (mid-left): x=30, y=400, w=220, h=180
// 3. Tom Mee Soa (mid-right): x=270, y=400, w=230, h=180
// 4. Coconut Spicy Noodle (bot-left): x=40, y=650... wait, total height is 757!
// Let's check where the labels are:
