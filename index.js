import { RedBlackTree } from "./src/data-structure/RedBlackTree";

const tree = new RedBlackTree();
const input = document.getElementById('addItem');
input.addEventListener('keyup', (e) => {
    if (e.key !== 'Enter') return;
    tree.insert(input.value);
});