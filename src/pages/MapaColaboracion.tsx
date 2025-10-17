import { useState, useEffect, useRef } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { ArrowLeft, Users, Network } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import ForceGraph2D from "react-force-graph-2d";

// Datos de ejemplo de la red de colaboración
const collaborationData = {
  nodes: [
    { id: "miguel-perez", name: "Miguel Ángel Pérez", type: "main", projects: 4, department: "Ingeniería de Sistemas" },
    { id: "ana-garcia", name: "Ana García", type: "collaborator", projects: 2, department: "Ingeniería de Sistemas" },
    { id: "carlos-rodriguez", name: "Carlos Rodríguez", type: "collaborator", projects: 3, department: "Ingeniería Industrial" },
    { id: "laura-martinez", name: "Laura Martínez", type: "collaborator", projects: 1, department: "Ingeniería de Sistemas" },
    { id: "juan-lopez", name: "Juan López", type: "external", projects: 2, department: "Universidad Nacional" },
    { id: "sofia-hernandez", name: "Sofía Hernández", type: "collaborator", projects: 1, department: "Ingeniería Biomédica" },
    { id: "diego-castro", name: "Diego Castro", type: "external", projects: 1, department: "Universidad del Valle" },
    { id: "maria-torres", name: "María Torres", type: "collaborator", projects: 2, department: "Ingeniería de Sistemas" },
  ],
  links: [
    { source: "miguel-perez", target: "ana-garcia", projects: ["ML Diagnóstico Médico"], strength: 3 },
    { source: "miguel-perez", target: "carlos-rodriguez", projects: ["Bases de Datos Distribuidas"], strength: 2 },
    { source: "miguel-perez", target: "laura-martinez", projects: ["Semillero IA"], strength: 2 },
    { source: "miguel-perez", target: "juan-lopez", projects: ["Blockchain Educación"], strength: 1 },
    { source: "ana-garcia", target: "carlos-rodriguez", projects: ["ML Diagnóstico Médico"], strength: 2 },
    { source: "ana-garcia", target: "sofia-hernandez", projects: ["ML Diagnóstico Médico"], strength: 1 },
    { source: "carlos-rodriguez", target: "maria-torres", projects: ["Bases de Datos Distribuidas"], strength: 1 },
    { source: "laura-martinez", target: "diego-castro", projects: ["Semillero IA"], strength: 1 },
    { source: "juan-lopez", target: "maria-torres", projects: ["Blockchain Educación"], strength: 1 },
  ]
};

const MapaColaboracion = () => {
  const [searchParams] = useSearchParams();
  const projectId = searchParams.get('proyecto');
  const graphRef = useRef();
  const [selectedNode, setSelectedNode] = useState(null);
  const [graphData, setGraphData] = useState(collaborationData);

  const getNodeColor = (node: any) => {
    switch (node.type) {
      case "main": return "#ef4444"; // Rojo para el profesor principal
      case "collaborator": return "#f97316"; // Naranja para colaboradores internos
      case "external": return "#6b7280"; // Gris para colaboradores externos
      default: return "#94a3b8";
    }
  };

  const getNodeSize = (node: any) => {
    return node.type === "main" ? 12 : 8;
  };

  const getLinkColor = (link: any) => {
    return link.strength > 2 ? "#ef4444" : link.strength > 1 ? "#f97316" : "#94a3b8";
  };

  const getLinkWidth = (link: any) => {
    return link.strength * 2;
  };

  const handleNodeClick = (node: any) => {
    setSelectedNode(node);
  };

  const handleBackgroundClick = () => {
    setSelectedNode(null);
  };

  useEffect(() => {
    // Configurar el grafo cuando se carga
    if (graphRef.current) {
      const graph = graphRef.current as any;
      
      // Configurar las fuerzas D3 manualmente después de montar
      const timer = setTimeout(() => {
        // Configurar fuerzas de la simulación D3
        const linkForce = graph.d3Force('link');
        if (linkForce) {
          linkForce.distance(120).strength(1);
        }
        
        const chargeForce = graph.d3Force('charge');
        if (chargeForce) {
          chargeForce.strength(-400);
        }
        
        const centerForce = graph.d3Force('center');
        if (centerForce) {
          centerForce.strength(0.1);
        }
        
        // Reiniciar la simulación con las nuevas fuerzas
        graph.d3ReheatSimulation();
        
        // Ajustar zoom después de estabilización
        setTimeout(() => {
          graph.zoomToFit(100, 100);
        }, 2000);
      }, 500);
      
      return () => {
        clearTimeout(timer);
      };
    }
  }, []);

  const stats = {
    totalCollaborators: graphData.nodes.length - 1,
    internalCollaborators: graphData.nodes.filter(n => n.type === "collaborator").length,
    externalCollaborators: graphData.nodes.filter(n => n.type === "external").length,
    totalConnections: graphData.links.length,
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-secondary via-background to-secondary/50">
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        <Link to="/investigacion">
          <Button variant="ghost" className="mb-6 hover:bg-secondary">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Volver a Investigación
          </Button>
        </Link>

        <div className="mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-2">Mapa de Colaboración</h1>
          <p className="text-muted-foreground">Red de colaboración del profesor Miguel Ángel Pérez</p>
        </div>

        {/* Estadísticas */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <Card className="bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Total Colaboradores</p>
                  <p className="text-2xl font-bold text-primary">{stats.totalCollaborators}</p>
                </div>
                <Users className="h-8 w-8 text-primary/60" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-accent/10 to-accent/5 border-accent/20">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Internos</p>
                  <p className="text-2xl font-bold text-accent">{stats.internalCollaborators}</p>
                </div>
                <Network className="h-8 w-8 text-accent/60" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-success/10 to-success/5 border-success/20">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Externos</p>
                  <p className="text-2xl font-bold text-success">{stats.externalCollaborators}</p>
                </div>
                <Network className="h-8 w-8 text-success/60" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-warning/10 to-warning/5 border-warning/20">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Conexiones</p>
                  <p className="text-2xl font-bold text-warning">{stats.totalConnections}</p>
                </div>
                <Network className="h-8 w-8 text-warning/60" />
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Grafo de colaboración */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle className="text-xl">Red de Colaboración</CardTitle>
              <p className="text-sm text-muted-foreground">
                Haz clic en cualquier nodo para ver más información
              </p>
            </CardHeader>
            <CardContent>
              <div className="w-full h-[700px] border border-border rounded-lg overflow-hidden bg-background relative">
                <ForceGraph2D
                  ref={graphRef}
                  graphData={graphData}
                  nodeLabel="name"
                  nodeAutoColorBy="type"
                  nodeVal={(node: any) => node.type === "main" ? 20 : 10}
                  nodeColor={getNodeColor}
                  linkColor={getLinkColor}
                  linkWidth={getLinkWidth}
                  linkDirectionalParticles={2}
                  linkDirectionalParticleSpeed={0.008}
                  onNodeClick={handleNodeClick}
                  onBackgroundClick={handleBackgroundClick}
                  backgroundColor="transparent"
                  cooldownTicks={100}
                  warmupTicks={100}
                  enableZoomInteraction={true}
                  enablePanInteraction={true}
                  d3AlphaDecay={0.0228}
                  d3VelocityDecay={0.4}
                  nodeCanvasObject={(node: any, ctx: CanvasRenderingContext2D, globalScale: number) => {
                    const label = node.name;
                    const fontSize = 12;
                    const nodeRadius = node.type === "main" ? 8 : 6;

                    // Dibujar el nodo (círculo)
                    ctx.beginPath();
                    ctx.arc(node.x, node.y, nodeRadius, 0, 2 * Math.PI, false);
                    ctx.fillStyle = getNodeColor(node);
                    ctx.fill();
                    
                    // Borde del nodo
                    ctx.strokeStyle = node.type === "main" ? '#ffffff' : 'rgba(255, 255, 255, 0.5)';
                    ctx.lineWidth = node.type === "main" ? 2 : 1;
                    ctx.stroke();

                    // Configurar texto
                    ctx.font = `${node.type === "main" ? 'bold ' : ''}${fontSize}px Arial, sans-serif`;
                    ctx.textAlign = 'center';
                    ctx.textBaseline = 'middle';
                    
                    // Texto del nombre (siempre visible)
                    const textY = node.y + nodeRadius + fontSize + 4;
                    
                    // Sombra del texto para mejor legibilidad
                    ctx.fillStyle = 'rgba(255, 255, 255, 0.9)';
                    ctx.strokeStyle = 'rgba(0, 0, 0, 0.3)';
                    ctx.lineWidth = 3;
                    ctx.strokeText(label, node.x, textY);
                    
                    // Texto principal
                    ctx.fillStyle = '#1f2937';
                    ctx.fillText(label, node.x, textY);
                  }}
                  nodePointerAreaPaint={(node: any, color: string, ctx: CanvasRenderingContext2D) => {
                    const nodeRadius = node.type === "main" ? 8 : 6;
                    ctx.fillStyle = color;
                    ctx.beginPath();
                    ctx.arc(node.x, node.y, nodeRadius + 2, 0, 2 * Math.PI, false);
                    ctx.fill();
                  }}
                  onEngineStop={() => {
                    if (graphRef.current) {
                      const graph = graphRef.current as any;
                      setTimeout(() => {
                        graph.zoomToFit(200, 20);
                      }, 100);
                    }
                  }}
                />
              </div>
            </CardContent>
          </Card>

          {/* Panel de información */}
          <Card>
            <CardHeader>
              <CardTitle className="text-xl">
                {selectedNode ? "Información del Colaborador" : "Leyenda"}
              </CardTitle>
            </CardHeader>
            <CardContent>
              {selectedNode ? (
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-lg">{selectedNode.name}</h3>
                    <p className="text-sm text-muted-foreground">{selectedNode.department}</p>
                  </div>
                  
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Tipo de colaborador</p>
                    <Badge variant={selectedNode.type === "main" ? "default" : selectedNode.type === "collaborator" ? "secondary" : "outline"}>
                      {selectedNode.type === "main" ? "Profesor Principal" : 
                       selectedNode.type === "collaborator" ? "Colaborador Interno" : "Colaborador Externo"}
                    </Badge>
                  </div>

                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Proyectos en común</p>
                    <p className="text-2xl font-bold">{selectedNode.projects}</p>
                  </div>

                  {selectedNode.type !== "main" && (
                    <div>
                      <p className="text-sm text-muted-foreground mb-2">Proyectos colaborativos:</p>
                      <ul className="space-y-1">
                        {graphData.links
                          .filter(link => {
                            const sourceId = typeof link.source === 'object' ? link.source.id : link.source;
                            const targetId = typeof link.target === 'object' ? link.target.id : link.target;
                            return sourceId === selectedNode.id || targetId === selectedNode.id;
                          })
                          .map(link => link.projects)
                          .flat()
                          .map((project, index) => (
                            <li key={index} className="text-xs bg-muted px-2 py-1 rounded">
                              {project}
                            </li>
                          ))
                        }
                      </ul>
                    </div>
                  )}
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded-full bg-red-500"></div>
                    <span className="text-sm">Profesor Principal</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded-full bg-orange-500"></div>
                    <span className="text-sm">Colaborador Interno</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded-full bg-gray-500"></div>
                    <span className="text-sm">Colaborador Externo</span>
                  </div>
                  
                  <div className="pt-4 border-t">
                    <p className="text-sm text-muted-foreground mb-2">Grosor de conexiones:</p>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-1 bg-red-500 rounded"></div>
                        <span className="text-xs">Colaboración intensa (3+ proyectos)</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-0.5 bg-orange-500 rounded"></div>
                        <span className="text-xs">Colaboración media (2 proyectos)</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-0.5 bg-gray-400 rounded"></div>
                        <span className="text-xs">Colaboración ocasional (1 proyecto)</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default MapaColaboracion;