import { Link } from "react-router-dom";
import { ArrowLeft, FlaskConical, Users, TrendingUp, Award } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

export const proyectosData = [
  {
    id: 1,
    nombre: "Desarrollo de Algoritmos de Machine Learning para Diagnóstico Médico",
    tipo: "Proyecto Principal",
    estado: "Activo",
    indiceProfesores: 3,
    avance: 65,
    fechaInicio: "Enero 2024",
    fechaFinalizacion: "Diciembre 2025",
    productos: [
      { id: "p1", nombre: "Artículo A", comprometido: true, completado: true, puntos: 80 },
      { id: "p2", nombre: "Dataset", comprometido: true, completado: false, puntos: 60 },
    ],
  },
  {
    id: 2,
    nombre: "Optimización de Bases de Datos Distribuidas",
    tipo: "Proyecto",
    estado: "Propuesto",
    indiceProfesores: 2,
    avance: 10,
    fechaInicio: "Marzo 2025",
    fechaFinalizacion: "N/A",
    productos: [{ id: "p1", nombre: "Propuesta Técnica", comprometido: true, completado: false, puntos: 40 }],
  },
  {
    id: 3,
    nombre: "Semillero de Inteligencia Artificial",
    tipo: "Semillero",
    estado: "Activo",
    indiceProfesores: 1,
    avance: 75,
    fechaInicio: "Agosto 2023",
    fechaFinalizacion: "Agosto 2025",
    productos: [
      { id: "p1", nombre: "Prototipo", comprometido: true, completado: true, puntos: 50 },
      { id: "p2", nombre: "Paper", comprometido: true, completado: false, puntos: 70 },
    ],
  },
  {
    id: 4,
    nombre: "Aplicaciones de Blockchain en Educación",
    tipo: "Proyecto",
    estado: "Cerrado",
    indiceProfesores: 4,
    avance: 100,
    fechaInicio: "Febrero 2023",
    fechaFinalizacion: "Febrero 2024",
    productos: [
      { id: "p1", nombre: "Artículo final", comprometido: true, completado: true, puntos: 90 },
    ],
  }
];

const Investigacion = () => {
  const proyectosActivos = proyectosData.filter((p) => p.estado === "Activo").length;
  const productosComprometidos = proyectosData.reduce((sum, p) => sum + p.productos.filter((pr) => pr.comprometido).length, 0);
  const productosCompletados = proyectosData.reduce((sum, p) => sum + p.productos.filter((pr) => pr.completado).length, 0);
  const puntosObtenidos = proyectosData.reduce((sum, p) => sum + p.productos.filter((pr) => pr.completado).reduce((s, pr) => s + (pr.puntos || 0), 0), 0);
  const puntosPendientes = proyectosData.reduce((sum, p) => sum + p.productos.filter((pr) => pr.comprometido && !pr.completado).reduce((s, pr) => s + (pr.puntos || 0), 0), 0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-secondary via-background to-secondary/50">
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        <Link to="/">
          <Button variant="ghost" className="mb-6 hover:bg-secondary">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Volver al panel principal
          </Button>
        </Link>

        <div className="mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-2">Investigación</h1>
          <p className="text-muted-foreground">Proyectos, semilleros y actividades de investigación</p>
        </div>

        {/* Resumen */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Proyectos Activos</p>
                  <p className="text-3xl font-bold text-primary">{proyectosActivos}</p>
                </div>
                <FlaskConical className="h-10 w-10 text-primary/60" />
              </div>
            </CardContent>
          </Card>

          <Link to="/mapa-colaboracion">
            <Card className="bg-gradient-to-br from-accent/10 to-accent/5 border-accent/20 hover:shadow-lg transition-shadow cursor-pointer">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Índice de profesores</p>
                    <p className="text-3xl font-bold text-foreground">{proyectosData.reduce((sum, p) => sum + (p.indiceProfesores || 0), 0)}</p>
                    <p className="text-xs text-accent">Clic para ver mapa de colaboración</p>
                  </div>
                  <Users className="h-10 w-10 text-accent/60" />
                </div>
              </CardContent>
            </Card>
          </Link>

          <Card className="bg-gradient-to-br from-success/10 to-success/5 border-success/20">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Productos</p>
                  <p className="text-3xl font-bold text-success">{productosCompletados} / {productosComprometidos}</p>
                  <p className="text-xs text-muted-foreground">completados / comprometidos</p>
                </div>
                <TrendingUp className="h-10 w-10 text-success/60" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-warning/10 to-warning/5 border-warning/20">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Puntos</p>
                  <p className="text-3xl font-bold text-warning">{puntosObtenidos}</p>
                  <p className="text-xs text-muted-foreground">+ {puntosPendientes} pendientes</p>
                </div>
                <Award className="h-10 w-10 text-warning/60" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Lista de proyectos */}
        <div className="space-y-4">
          {proyectosData.map((proyecto) => (
            <Card key={proyecto.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <CardTitle className="text-xl mb-2">{proyecto.nombre}</CardTitle>
                    <div className="flex gap-2 flex-wrap text-sm">
                      <Badge variant="default">{proyecto.tipo}</Badge>
                      <Badge>{proyecto.estado}</Badge>
                      <Badge variant="outline">{proyecto.indiceProfesores} profesores</Badge>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Fecha de inicio</p>
                      <p className="font-medium text-foreground">{proyecto.fechaInicio}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Fecha de fin</p>
                      <p className="font-medium text-foreground">{proyecto.fechaFinalizacion}</p>
                    </div>
                  </div>

                  <div>
                    <p className="text-sm text-muted-foreground">Productos comprometidos</p>
                    <ul className="mt-2 space-y-2">
                      {proyecto.productos.map((pr) => (
                        <li key={pr.id} className="flex justify-between items-center p-2 rounded border border-border bg-muted/20">
                          <div className="flex items-center gap-2">
                            <span className="text-sm">{pr.nombre}</span>
                            <Badge variant="outline" className="text-xs">
                              {pr.puntos} pts
                            </Badge>
                          </div>
                          <span className={`text-xs ${pr.completado ? "text-success" : "text-muted-foreground"}`}>
                            {pr.completado ? "Completado" : "Pendiente"}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex justify-end gap-2">
                    <Button onClick={() => console.log("Ver proyecto", proyecto.id)}>Ver productos</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Investigacion;
