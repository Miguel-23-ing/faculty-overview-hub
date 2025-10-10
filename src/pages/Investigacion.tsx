import { Link } from "react-router-dom";
import { ArrowLeft, FlaskConical, Users, TrendingUp } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

const proyectosData = [
  {
    id: 1,
    nombre: "Desarrollo de Algoritmos de Machine Learning para Diagnóstico Médico",
    tipo: "Proyecto Principal",
    estado: "En progreso",
    avance: 65,
    rol: "Investigador Principal",
    fechaInicio: "Enero 2024",
    participantes: 5
  },
  {
    id: 2,
    nombre: "Optimización de Bases de Datos Distribuidas",
    tipo: "Proyecto",
    estado: "En progreso",
    avance: 40,
    rol: "Co-investigador",
    fechaInicio: "Marzo 2024",
    participantes: 3
  },
  {
    id: 3,
    nombre: "Semillero de Inteligencia Artificial",
    tipo: "Semillero",
    estado: "Activo",
    avance: 75,
    rol: "Director",
    fechaInicio: "Agosto 2023",
    participantes: 12
  },
  {
    id: 4,
    nombre: "Aplicaciones de Blockchain en Educación",
    tipo: "Proyecto",
    estado: "Planificación",
    avance: 15,
    rol: "Investigador Principal",
    fechaInicio: "Febrero 2025",
    participantes: 4
  }
];

const Investigacion = () => {
  const proyectosActivos = proyectosData.filter(p => p.estado !== "Finalizado").length;
  const totalParticipantes = proyectosData.reduce((sum, p) => sum + p.participantes, 0);

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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
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

          <Card className="bg-gradient-to-br from-accent/10 to-accent/5 border-accent/20">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Total Participantes</p>
                  <p className="text-3xl font-bold text-accent">{totalParticipantes}</p>
                </div>
                <Users className="h-10 w-10 text-accent/60" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-success/10 to-success/5 border-success/20">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Avance Promedio</p>
                  <p className="text-3xl font-bold text-success">
                    {Math.round(proyectosData.reduce((sum, p) => sum + p.avance, 0) / proyectosData.length)}%
                  </p>
                </div>
                <TrendingUp className="h-10 w-10 text-success/60" />
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
                    <div className="flex gap-2 flex-wrap">
                      <Badge variant="default">{proyecto.tipo}</Badge>
                      <Badge 
                        variant={proyecto.estado === "En progreso" ? "default" : proyecto.estado === "Activo" ? "secondary" : "outline"}
                      >
                        {proyecto.estado}
                      </Badge>
                      <Badge variant="outline">{proyecto.rol}</Badge>
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
                      <p className="text-sm text-muted-foreground mb-1">Participantes</p>
                      <p className="font-medium text-foreground">{proyecto.participantes} personas</p>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <p className="text-sm text-muted-foreground">Avance del proyecto</p>
                      <p className="text-sm font-semibold text-primary">{proyecto.avance}%</p>
                    </div>
                    <Progress value={proyecto.avance} className="h-2" />
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
