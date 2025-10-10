import { Link } from "react-router-dom";
import { ArrowLeft, Briefcase, Clock, CheckCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const actividadesData = [
  {
    id: 1,
    nombre: "Director de Departamento de Ingeniería",
    tipo: "Administrativo",
    dedicacion: "20 horas/semana",
    fechaInicio: "Enero 2024",
    estado: "Activo",
    descripcion: "Coordinación general del departamento, gestión de personal y recursos"
  },
  {
    id: 2,
    nombre: "Coordinador Curricular",
    tipo: "Académico",
    dedicacion: "10 horas/semana",
    fechaInicio: "Marzo 2023",
    estado: "Activo",
    descripcion: "Revisión y actualización del plan de estudios del programa"
  },
  {
    id: 3,
    nombre: "Miembro del Comité de Investigación",
    tipo: "Académico",
    dedicacion: "5 horas/semana",
    fechaInicio: "Agosto 2022",
    estado: "Activo",
    descripcion: "Evaluación de proyectos y asesoría en investigación institucional"
  },
  {
    id: 4,
    nombre: "Coordinador de Acreditación",
    tipo: "Administrativo",
    dedicacion: "8 horas/semana",
    fechaInicio: "Septiembre 2024",
    estado: "Activo",
    descripcion: "Preparación de documentos y coordinación de procesos de acreditación"
  }
];

const Actividades = () => {
  const totalHoras = actividadesData.reduce((sum, act) => {
    const horas = parseInt(act.dedicacion.split(" ")[0]);
    return sum + horas;
  }, 0);

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
          <p className="text-muted-foreground">Cargos, responsabilidades y tiempo de dedicación</p>
        </div>

        {/* Resumen */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Total Actividades</p>
                  <p className="text-3xl font-bold text-primary">{actividadesData.length}</p>
                </div>
                <Briefcase className="h-10 w-10 text-primary/60" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-accent/10 to-accent/5 border-accent/20">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Horas Semanales</p>
                  <p className="text-3xl font-bold text-accent">{totalHoras}</p>
                </div>
                <Clock className="h-10 w-10 text-accent/60" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-success/10 to-success/5 border-success/20">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Cargos Activos</p>
                  <p className="text-3xl font-bold text-success">
                    {actividadesData.filter(a => a.estado === "Activo").length}
                  </p>
                </div>
                <CheckCircle className="h-10 w-10 text-success/60" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Distribución por tipo */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Distribución de Tiempo por Tipo</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">Actividades Académicas</span>
                  <Badge variant="default">
                    {actividadesData.filter(a => a.tipo === "Académico").reduce((sum, a) => {
                      return sum + parseInt(a.dedicacion.split(" ")[0]);
                    }, 0)} horas/semana
                  </Badge>
                </div>
                <div className="text-sm text-muted-foreground">
                  {actividadesData.filter(a => a.tipo === "Académico").length} actividades
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">Actividades Administrativas</span>
                  <Badge variant="secondary">
                    {actividadesData.filter(a => a.tipo === "Administrativo").reduce((sum, a) => {
                      return sum + parseInt(a.dedicacion.split(" ")[0]);
                    }, 0)} horas/semana
                  </Badge>
                </div>
                <div className="text-sm text-muted-foreground">
                  {actividadesData.filter(a => a.tipo === "Administrativo").length} actividades
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Lista de actividades */}
        <div className="space-y-4">
          {actividadesData.map((actividad) => (
            <Card key={actividad.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-xl mb-2">{actividad.nombre}</CardTitle>
                    <div className="flex gap-2">
                      <Badge variant={actividad.tipo === "Académico" ? "default" : "secondary"}>
                        {actividad.tipo}
                      </Badge>
                      <Badge variant="outline">{actividad.estado}</Badge>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{actividad.descripcion}</p>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Dedicación semanal</p>
                    <p className="text-lg font-semibold text-primary">{actividad.dedicacion}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Fecha de inicio</p>
                    <p className="text-lg font-semibold text-foreground">{actividad.fechaInicio}</p>
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

export default Actividades;
