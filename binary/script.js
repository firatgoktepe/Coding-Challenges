function binaryTreeAnomaly(tree) {
    let queue = [tree];
    while (queue.length) {
        let node = queue.shift();
        if (node.left && node.right) {
            if (node.left.value === node.right.value) {
                return true;
            }
            queue.push(node.left);
            queue.push(node.right);
        } else if (node.left) {
            queue.push(node.left);
        } else if (node.right) {
            queue.push(node.right);
        }
        
    }   
    return false;
}