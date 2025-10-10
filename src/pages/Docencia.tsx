import { Link } from "react-router-dom";
import { ArrowLeft, BookOpen, Clock, TrendingUp } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const cursosPregradoData = [
  {
    id: 1,
    nombre: "Algoritmos y Programación I",
    creditos: 3,
    horasSemanales: 6,
    estado: "Activo"
  },
  {
    id: 2,
    nombre: "Estructuras de Datos",
    creditos: 4,
    horasSemanales: 8,
    estado: "Activo"
  },
  {
    id: 3,
    nombre: "Desarrollo Web",
    creditos: 3,
    horasSemanales: 6,
    estado: "Activo"
  }
];

const cursosPosgradoData = [
  {
    id: 1,
    nombre: "Inteligencia Artificial Avanzada",
    creditos: 4,
    horasSemanales: 4,
    estado: "Activo"
  }
];

const Docencia = () => {
  const totalCursos = cursosPregradoData.length + cursosPosgradoData.length;
  const horasSemanales = [...cursosPregradoData, ...cursosPosgradoData].reduce((sum, curso) => sum + curso.horasSemanales, 0);
  const horasAsignadas = 48;
  const disponibilidad = horasAsignadas - horasSemanales;
  const porcentajeDisponibilidad = Math.round((disponibilidad / horasAsignadas) * 100);

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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
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
                  <p className="text-xs text-muted-foreground">de {horasAsignadas}h asignadas</p>
                </div>
                <Clock className="h-10 w-10 text-primary" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card border-border">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Disponibilidad</p>
                  <p className="text-3xl font-bold text-foreground mb-1">{disponibilidad}h</p>
                  <p className="text-xs text-success flex items-center gap-1">
                    <TrendingUp className="h-3 w-3" />
                    {porcentajeDisponibilidad}%
                  </p>
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
                  </div>
                </div>
                <Badge className="bg-success text-success-foreground">{curso.estado}</Badge>
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
                  </div>
                </div>
                <Badge className="bg-success text-success-foreground">{curso.estado}</Badge>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Docencia;
