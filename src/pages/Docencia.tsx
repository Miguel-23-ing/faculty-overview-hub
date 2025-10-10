import { Link } from "react-router-dom";
import { ArrowLeft, Users, Award } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const cursosData = [
  {
    id: 1,
    nombre: "Programación Avanzada",
    nivel: "Pregrado",
    tipo: "Obligatorio",
    estudiantes: 45,
    calificacionPromedio: 4.2,
    semestre: "2025-1"
  },
  {
    id: 2,
    nombre: "Estructuras de Datos",
    nivel: "Pregrado",
    tipo: "Obligatorio",
    estudiantes: 38,
    calificacionPromedio: 4.5,
    semestre: "2025-1"
  },
  {
    id: 3,
    nombre: "Inteligencia Artificial",
    nivel: "Posgrado",
    tipo: "Electiva",
    estudiantes: 15,
    calificacionPromedio: 4.8,
    semestre: "2025-1"
  },
  {
    id: 4,
    nombre: "Desarrollo Web",
    nivel: "Pregrado",
    tipo: "Electiva",
    estudiantes: 32,
    calificacionPromedio: 4.6,
    semestre: "2025-1"
  }
];

const Docencia = () => {
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
          <h1 className="text-4xl font-bold text-foreground mb-2">Docencia</h1>
          <p className="text-muted-foreground">Cursos actuales, estudiantes y rendimiento académico</p>
        </div>

        {/* Resumen */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Total Cursos</p>
                  <p className="text-3xl font-bold text-primary">{cursosData.length}</p>
                </div>
                <Award className="h-10 w-10 text-primary/60" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-accent/10 to-accent/5 border-accent/20">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Total Estudiantes</p>
                  <p className="text-3xl font-bold text-accent">
                    {cursosData.reduce((sum, curso) => sum + curso.estudiantes, 0)}
                  </p>
                </div>
                <Users className="h-10 w-10 text-accent/60" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-success/10 to-success/5 border-success/20">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Calificación Promedio</p>
                  <p className="text-3xl font-bold text-success">
                    {(cursosData.reduce((sum, curso) => sum + curso.calificacionPromedio, 0) / cursosData.length).toFixed(1)}
                  </p>
                </div>
                <Award className="h-10 w-10 text-success/60" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Lista de cursos */}
        <div className="space-y-4">
          {cursosData.map((curso) => (
            <Card key={curso.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-xl mb-2">{curso.nombre}</CardTitle>
                    <div className="flex gap-2">
                      <Badge variant={curso.nivel === "Pregrado" ? "default" : "secondary"}>
                        {curso.nivel}
                      </Badge>
                      <Badge variant="outline">{curso.tipo}</Badge>
                      <Badge variant="outline">{curso.semestre}</Badge>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Estudiantes matriculados</p>
                    <p className="text-2xl font-semibold text-foreground">{curso.estudiantes}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Calificación promedio</p>
                    <p className="text-2xl font-semibold text-primary">{curso.calificacionPromedio}</p>
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

export default Docencia;
