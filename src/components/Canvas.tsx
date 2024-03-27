import React, { useRef, useEffect, FC } from 'react';
interface CanvasProps {
    width: number;
    height: number;
}
const Canvas = ({ width, height }: CanvasProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const canvasCtxRef = React.useRef<CanvasRenderingContext2D | null>(null);
  useEffect(() => {
    if (canvasRef.current) {
        canvasCtxRef.current = canvasRef.current.getContext('2d');
        let ctx = canvasCtxRef.current; // Assigning to a temp variable
        ctx!.beginPath(); // Note the Non Null Assertion
        ctx!.arc(95, 50, 40, 0, 2 * Math.PI);
        ctx!.stroke();
      }
  }, []);

  return (
    <canvas id = "canvas" ref={canvasRef} height={height} width={width}/>
  );
}

Canvas.defaultProps = {
    width: window.innerWidth,
    height: window.innerHeight
};
export default Canvas;