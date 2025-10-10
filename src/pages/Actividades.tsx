import { Link } from "react-router-dom";
import { ArrowLeft, Briefcase, CheckCircle, Clock, TrendingUp } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const actividadesAcademicasData = [
  {
    id: 1,
    nombre: "Comité Curricular",
    estado: "Completada"
  },
  {
    id: 2,
    nombre: "Coordinación de Programa",
    estado: "Completada"
  },
  {
    id: 3,
    nombre: "Acompañamiento Estudiantil",
    estado: "Pendiente"
  },
  {
    id: 4,
    nombre: "Dirección de Trabajos de Grado",
    estado: "Completada"
  }
];

const actividadesAdministrativasData = [
  {
    id: 1,
    nombre: "Revisión de Planes de Estudio",
    estado: "Completada"
  },
  {
    id: 2,
    nombre: "Coordinador de Acreditación",
    estado: "Completada"
  },
  {
    id: 3,
    nombre: "Evaluación Docente",
    estado: "Pendiente"
  }
];

const Actividades = () => {
  const totalActividades = actividadesAcademicasData.length + actividadesAdministrativasData.length;
  const completadas = [...actividadesAcademicasData, ...actividadesAdministrativasData].filter(a => a.estado === "Completada").length;
  const pendientes = totalActividades - completadas;
  const porcentajeCompletadas = Math.round((completadas / totalActividades) * 100);

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
          <h1 className="text-4xl font-bold text-foreground mb-2">Actividades Académicas y Administrativas</h1>
          <p className="text-muted-foreground">Comités, coordinación y acompañamiento</p>
        </div>

        {/* Resumen */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="bg-card border-border">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Total Actividades</p>
                  <p className="text-3xl font-bold text-foreground mb-1">{totalActividades}</p>
                  <p className="text-xs text-muted-foreground">Académicas y administrativas</p>
                </div>
                <Briefcase className="h-10 w-10 text-primary" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card border-border">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Completadas</p>
                  <p className="text-3xl font-bold text-foreground mb-1">{completadas}</p>
                  <p className="text-xs text-success flex items-center gap-1">
                    <TrendingUp className="h-3 w-3" />
                    {porcentajeCompletadas}% del total
                  </p>
                </div>
                <CheckCircle className="h-10 w-10 text-primary" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card border-border">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Pendientes</p>
                  <p className="text-3xl font-bold text-foreground mb-1">{pendientes}</p>
                  <p className="text-xs text-muted-foreground">Por completar</p>
                </div>
                <Clock className="h-10 w-10 text-primary" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Actividades Académicas */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="text-2xl">Actividades Académicas</CardTitle>
            <p className="text-sm text-muted-foreground">Comités, coordinación y acompañamiento</p>
          </CardHeader>
          <CardContent className="space-y-3">
            {actividadesAcademicasData.map((actividad) => (
              <div
                key={actividad.id}
                className="flex items-center justify-between p-4 rounded-lg border border-border bg-card hover:shadow-md transition-shadow"
              >
                <div className="flex items-center gap-3">
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center ${
                    actividad.estado === "Completada" ? "bg-success/20" : "bg-muted"
                  }`}>
                    {actividad.estado === "Completada" && (
                      <CheckCircle className="h-4 w-4 text-success" />
                    )}
                  </div>
                  <h3 className={`font-medium ${
                    actividad.estado === "Completada" ? "line-through text-muted-foreground" : "text-foreground"
                  }`}>
                    {actividad.nombre}
                  </h3>
                </div>
                <CheckCircle className={`h-5 w-5 ${
                  actividad.estado === "Completada" ? "text-success" : "text-muted-foreground"
                }`} />
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Actividades Administrativas */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Actividades Administrativas</CardTitle>
            <p className="text-sm text-muted-foreground">Revisión de planes, informes y procesos institucionales</p>
          </CardHeader>
          <CardContent className="space-y-3">
            {actividadesAdministrativasData.map((actividad) => (
              <div
                key={actividad.id}
                className="flex items-center justify-between p-4 rounded-lg border border-border bg-card hover:shadow-md transition-shadow"
              >
                <div className="flex items-center gap-3">
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center ${
                    actividad.estado === "Completada" ? "bg-success/20" : "bg-muted"
                  }`}>
                    {actividad.estado === "Completada" && (
                      <CheckCircle className="h-4 w-4 text-success" />
                    )}
                  </div>
                  <h3 className={`font-medium ${
                    actividad.estado === "Completada" ? "line-through text-muted-foreground" : "text-foreground"
                  }`}>
                    {actividad.nombre}
                  </h3>
                </div>
                <CheckCircle className={`h-5 w-5 ${
                  actividad.estado === "Completada" ? "text-success" : "text-muted-foreground"
                }`} />
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Actividades;
