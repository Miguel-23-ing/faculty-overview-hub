import { Link } from "react-router-dom";
import { ArrowLeft, BookOpen, Clock, TrendingUp } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export const cursosPregradoData = [
  {
    id: 1,
    nombre: "Algoritmos y Programación I",
    creditos: 3,
    horasSemanales: 6,
    estado: "Activo",
    estudiantes: 120,
  },
  {
    id: 2,
    nombre: "Estructuras de Datos",
    creditos: 4,
    horasSemanales: 8,
    estado: "Activo",
    estudiantes: 90,
  },
  {
    id: 3,
    nombre: "Desarrollo Web",
    creditos: 3,
    horasSemanales: 6,
    estado: "Programado",
    estudiantes: 60,
  }
];

export const cursosPosgradoData = [
  {
    id: 1,
    nombre: "Inteligencia Artificial Avanzada",
    creditos: 4,
    horasSemanales: 4,
    estado: "Activo",
    estudiantes: 18,
  }
];

const Docencia = () => {
  const totalCursos = cursosPregradoData.length + cursosPosgradoData.length;
  const horasSemanales = [...cursosPregradoData, ...cursosPosgradoData].reduce((sum, curso) => sum + curso.horasSemanales, 0);

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
          <p className="text-muted-foreground">Gestión de cursos y carga horaria</p>
        </div>

        {/* Resumen */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <Card className="bg-card border-border">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Cursos Activos</p>
                  <p className="text-3xl font-bold text-foreground mb-1">{totalCursos}</p>
                  <p className="text-xs text-muted-foreground">Total de asignaturas</p>
                </div>
                <BookOpen className="h-10 w-10 text-primary" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card border-border">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Horas Semanales</p>
                  <p className="text-3xl font-bold text-foreground mb-1">{horasSemanales}h</p>
                  <p className="text-xs text-muted-foreground">Carga horaria docencia</p>
                </div>
                <Clock className="h-10 w-10 text-primary" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Pregrado */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="text-2xl">Pregrado</CardTitle>
            <p className="text-sm text-muted-foreground">Asignaturas de pregrado actuales</p>
          </CardHeader>
          <CardContent className="space-y-3">
            {cursosPregradoData.map((curso) => (
              <div
                key={curso.id}
                className="flex items-center justify-between p-4 rounded-lg border border-border bg-card hover:shadow-md transition-shadow"
              >
                <div className="flex-1">
                  <h3 className="font-semibold text-foreground mb-1">{curso.nombre}</h3>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span>{curso.creditos} créditos</span>
                    <span>•</span>
                    <span>{curso.horasSemanales}h semanales</span>
                    <span>•</span>
                    <span>{curso.estudiantes} estudiantes</span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Badge className={curso.estado === "Activo" ? "bg-success text-success-foreground" : "bg-muted text-muted-foreground"}>
                    {curso.estado}
                  </Badge>
                  <Button size="sm" variant="outline" onClick={() => console.log("Más info curso", curso.id)}>Más info</Button>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Posgrado */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Posgrado</CardTitle>
            <p className="text-sm text-muted-foreground">Asignaturas de posgrado actuales</p>
          </CardHeader>
          <CardContent className="space-y-3">
            {cursosPosgradoData.map((curso) => (
              <div
                key={curso.id}
                className="flex items-center justify-between p-4 rounded-lg border border-border bg-card hover:shadow-md transition-shadow"
              >
                <div className="flex-1">
                  <h3 className="font-semibold text-foreground mb-1">{curso.nombre}</h3>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span>{curso.creditos} créditos</span>
                    <span>•</span>
                    <span>{curso.horasSemanales}h semanales</span>
                    <span>•</span>
                    <span>{curso.estudiantes} estudiantes</span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Badge className={curso.estado === "Activo" ? "bg-success text-success-foreground" : "bg-muted text-muted-foreground"}>
                    {curso.estado}
                  </Badge>
                  <Button size="sm" variant="outline" onClick={() => console.log("Más info posgrado", curso.id)}>Más info</Button>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Docencia;
