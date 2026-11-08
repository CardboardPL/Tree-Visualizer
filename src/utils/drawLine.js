// Draw Line Utility
export function drawLine(lineContainer, elem1, elem2, lineWidth = 8) {
    // Take the bounding boxes of the necessary elements
    const elem1BoundingRect = elem1.getBoundingClientRect();
    const elem2BoundingRect = elem2.getBoundingClientRect();
    const containerBoundingRect = lineContainer.getBoundingClientRect();

    // Calculate the centers of the two elements relative to the lineContainer
    const elem1Coords = [
        elem1BoundingRect.left - containerBoundingRect.left + elem1BoundingRect.width / 2, 
        elem1BoundingRect.top - containerBoundingRect.top + elem1BoundingRect.height / 2
    ];
    const elem2Coords = [
        elem2BoundingRect.left - containerBoundingRect.left + elem2BoundingRect.width / 2, 
        elem2BoundingRect.top - containerBoundingRect.top + elem2BoundingRect.height / 2
    ];

    // Calculate the deltas
    const [a, b] = [
        elem2Coords[0] - elem1Coords[0],
        elem2Coords[1] - elem1Coords[1],
    ];
    
    // Calculate line height and the angle based on the deltas
    const lineHeight = Math.sqrt(a ** 2 + b ** 2);
    const angle = Math.atan2(a, b) * (180 / Math.PI);

    // create line
    const line = document.createElement('div');
    line.className = 'line';
    line.style.cssText = `
        background-color: red; 
        width: ${lineWidth}px; 
        height: ${lineHeight}px; 
        transform: rotate(${elem2Coords[0] > elem1Coords[0] ? angle : -angle}deg);
        top: ${(elem2Coords[1] + elem1Coords[1] - lineHeight) / 2}px;
        left: ${(elem2Coords[0] + elem1Coords[0] - lineWidth) / 2}px;
    `;

    // Render the line
    lineContainer.appendChild(line);
}