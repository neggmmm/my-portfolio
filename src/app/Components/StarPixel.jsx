import React from 'react'

export default function StarPixel({color}) {
  return (
     <svg
      width="4"
      height="4"
      viewBox="0 0 24 24"
      style={{ display: "block" }}
    >
      <polygon
        points="
          12 2
          15 9
          22 9
          17 14
          19 21
          12 17
          5 21
          7 14
          2 9
          9 9
        "
        fill={color}
        shapeRendering="crispEdges"
      />
    </svg>
  )
}
