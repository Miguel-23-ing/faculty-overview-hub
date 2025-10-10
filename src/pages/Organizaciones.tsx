import { Link } from "react-router-dom";
import { ArrowLeft, Briefcase, Users, FileText } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const proyectosData = [
  {
    id: 1,
    nombre: "Banco Nacional",
    tipo: "Consultoría",
    fecha: "2024-03",
    estado: "Ejecutada"
  },
  {
    id: 2,
    nombre: "Industrias XYZ",
    tipo: "Proyecto",
    fecha: "2024-01",
    estado: "En revisión"
  }
];

const capacitacionesData = [
  {
    id: 1,
    nombre: "Corporación ABC",
    actividad: "Transformación Digital",
    fecha: "2024-02",
    estado: "Ejecutada"
  }
];

const propuestasData = [
  {
    id: 1,
    nombre: "Empresa DEF",
    actividad: "Consultoría en IA",
    fecha: "2025-01",
    estado: "En proceso"
  }
];

const Organizaciones = () => {
  const totalProyectos = proyectosData.length;
  const totalCapacitaciones = capacitacionesData.length;
  const totalPropuestas = propuestasData.length;

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
          <h1 className="text-4xl font-bold text-foreground mb-2">Organizaciones</h1>
          <p className="text-muted-foreground">Proyectos de extensión y capacitaciones empresariales</p>
        </div>

        {/* Resumen */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="bg-card border-border">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Proyectos</p>
                  <p className="text-3xl font-bold text-foreground mb-1">{totalProyectos}</p>
                  <p className="text-xs text-muted-foreground">Activos y completados</p>
                </div>
                <Briefcase className="h-10 w-10 text-primary" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card border-border">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Capacitaciones</p>
                  <p className="text-3xl font-bold text-foreground mb-1">{totalCapacitaciones}</p>
                  <p className="text-xs text-muted-foreground">Realizadas</p>
                </div>
                <Users className="h-10 w-10 text-primary" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card border-border">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Propuestas</p>
                  <p className="text-3xl font-bold text-foreground mb-1">{totalPropuestas}</p>
                  <p className="text-xs text-muted-foreground">En proceso</p>
                </div>
                <FileText className="h-10 w-10 text-primary" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Proyectos */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="text-2xl">Proyectos</CardTitle>
            <p className="text-sm text-muted-foreground">Consultorías y proyectos de extensión</p>
          </CardHeader>
          <CardContent className="space-y-3">
            {proyectosData.map((proyecto) => (
              <div
                key={proyecto.id}
                className="flex items-center justify-between p-4 rounded-lg border border-border bg-card hover:shadow-md transition-shadow"
              >
                <div className="flex-1">
                  <h3 className="font-semibold text-foreground mb-1">{proyecto.nombre}</h3>
                  <div className="flex items-center gap-3">
                    <Badge variant="outline" className="text-xs">{proyecto.tipo}</Badge>
                    <span className="text-sm text-muted-foreground">{proyecto.fecha}</span>
                  </div>
                </div>
                <Badge className={proyecto.estado === "Ejecutada" ? "bg-success text-success-foreground" : "bg-primary text-primary-foreground"}>
                  {proyecto.estado}
                </Badge>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Capacitaciones */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="text-2xl">Capacitaciones</CardTitle>
            <p className="text-sm text-muted-foreground">Programas de formación empresarial</p>
          </CardHeader>
          <CardContent className="space-y-3">
            {capacitacionesData.map((capacitacion) => (
              <div
                key={capacitacion.id}
                className="flex items-center justify-between p-4 rounded-lg border border-border bg-card hover:shadow-md transition-shadow"
              >
                <div className="flex-1">
                  <h3 className="font-semibold text-foreground mb-1">{capacitacion.nombre}</h3>
                  <p className="text-sm text-muted-foreground mb-1">{capacitacion.actividad}</p>
                  <span className="text-xs text-muted-foreground">{capacitacion.fecha}</span>
                </div>
                <Badge className="bg-success text-success-foreground">{capacitacion.estado}</Badge>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Propuestas */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Propuestas</CardTitle>
            <p className="text-sm text-muted-foreground">Propuestas en evaluación o desarrollo</p>
          </CardHeader>
          <CardContent className="space-y-3">
            {propuestasData.map((propuesta) => (
              <div
                key={propuesta.id}
                className="flex items-center justify-between p-4 rounded-lg border border-border bg-card hover:shadow-md transition-shadow"
              >
                <div className="flex-1">
                  <h3 className="font-semibold text-foreground mb-1">{propuesta.nombre}</h3>
                  <p className="text-sm text-muted-foreground mb-1">{propuesta.actividad}</p>
                  <span className="text-xs text-muted-foreground">{propuesta.fecha}</span>
                </div>
                <Badge className="bg-accent text-accent-foreground">{propuesta.estado}</Badge>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Organizaciones;
