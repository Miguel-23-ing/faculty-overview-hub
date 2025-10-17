declare module 'react-force-graph-2d' {
  import { ComponentType, RefObject } from 'react';

  export interface GraphData {
    nodes: any[];
    links: any[];
  }

  export interface ForceGraph2DProps {
    graphData: GraphData;
    nodeLabel?: string | ((node: any) => string);
    nodeColor?: string | ((node: any) => string);
    nodeRelSize?: number | ((node: any) => number);
    nodeVal?: number | string | ((node: any) => number);
    nodeAutoColorBy?: string | ((node: any) => string);
    linkColor?: string | ((link: any) => string);
    linkWidth?: number | ((link: any) => number);
    linkDirectionalParticles?: number;
    linkDirectionalParticleSpeed?: number;
    onNodeClick?: (node: any) => void;
    onBackgroundClick?: () => void;
    onEngineStop?: () => void;
    backgroundColor?: string;
    nodeCanvasObject?: (node: any, ctx: CanvasRenderingContext2D, globalScale: number) => void;
    nodePointerAreaPaint?: (node: any, color: string, ctx: CanvasRenderingContext2D) => void;
    cooldownTicks?: number;
    warmupTicks?: number;
    d3ReheatSimulation?: () => void;
    d3Force?: {
      charge?: number;
      link?: number;
      center?: number;
      collision?: number;
    };
    linkDistance?: number;
    enableZoomInteraction?: boolean;
    enablePanInteraction?: boolean;
    enablePointerInteraction?: boolean;
    d3AlphaDecay?: number;
    d3VelocityDecay?: number;
    width?: number;
    height?: number;
    [key: string]: any;
  }

  const ForceGraph2D: ComponentType<ForceGraph2DProps>;
  export default ForceGraph2D;
}