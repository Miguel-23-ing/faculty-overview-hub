import { Link } from "react-router-dom";
import { ArrowLeft, Briefcase, CheckCircle, Clock, TrendingUp } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export const actividadesAcademicasData = [
  { id: 1, nombre: "Comité Curricular", tipo: "Rol académico", estado: "Activo" },
  { id: 2, nombre: "Coordinación de Programa", tipo: "Rol académico", estado: "Activo" },
  { id: 3, nombre: "Acompañamiento Estudiantil", tipo: "Rol académico", estado: "Activo" },
  { id: 4, nombre: "Dirección de Trabajos de Grado", tipo: "Rol académico", estado: "Activo" },
];

export const actividadesAdministrativasData = [
  { id: 1, nombre: "Director de Programa", tipo: "Rol administrativo", estado: "Activo" },
  { id: 2, nombre: "Coordinador de Acreditación", tipo: "Rol administrativo", estado: "Activo" },
  { id: 3, nombre: "Líder de Escuela", tipo: "Rol administrativo", estado: "Activo" },
];

const Actividades = () => {
  const totalActividades = actividadesAcademicasData.length + actividadesAdministrativasData.length;
  const rolesActivos = [...actividadesAcademicasData, ...actividadesAdministrativasData].filter(a => a.estado === "Activo").length;

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
          <h1 className="text-4xl font-bold text-foreground mb-2">Roles</h1>
          <p className="text-muted-foreground">Roles académicos y administrativos del profesor</p>
        </div>

        {/* Resumen */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="bg-card border-border">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Total Roles</p>
                  <p className="text-3xl font-bold text-foreground mb-1">{totalActividades}</p>
                  <p className="text-xs text-muted-foreground">Académicos y administrativos</p>
                </div>
                <Briefcase className="h-10 w-10 text-primary" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card border-border">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Roles Activos</p>
                  <p className="text-3xl font-bold text-foreground mb-1">{rolesActivos}</p>
                  <p className="text-xs text-muted-foreground">En ejercicio</p>
                </div>
                <CheckCircle className="h-10 w-10 text-primary" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card border-border">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Académicos</p>
                  <p className="text-3xl font-bold text-foreground mb-1">{actividadesAcademicasData.length}</p>
                  <p className="text-xs text-muted-foreground">vs {actividadesAdministrativasData.length} administrativos</p>
                </div>
                <TrendingUp className="h-10 w-10 text-primary" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Roles Académicos */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="text-2xl">Roles Académicos</CardTitle>
            <p className="text-sm text-muted-foreground">Comités, coordinación y acompañamiento</p>
          </CardHeader>
          <CardContent className="space-y-3">
            {actividadesAcademicasData.map((actividad) => (
              <div
                key={actividad.id}
                className="flex items-center justify-between p-4 rounded-lg border border-border bg-card hover:shadow-md transition-shadow"
              >
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full flex items-center justify-center bg-primary/20">
                    <CheckCircle className="h-4 w-4 text-primary" />
                  </div>
                  <h3 className="font-medium text-foreground">{actividad.nombre}</h3>
                </div>
                <Badge className="bg-primary text-primary-foreground">{actividad.estado}</Badge>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Roles Administrativos */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Roles Administrativos</CardTitle>
            <p className="text-sm text-muted-foreground">Dirección, coordinación y procesos institucionales</p>
          </CardHeader>
          <CardContent className="space-y-3">
            {actividadesAdministrativasData.map((actividad) => (
              <div
                key={actividad.id}
                className="flex items-center justify-between p-4 rounded-lg border border-border bg-card hover:shadow-md transition-shadow"
              >
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full flex items-center justify-center bg-accent/20">
                    <CheckCircle className="h-4 w-4 text-accent" />
                  </div>
                  <h3 className="font-medium text-foreground">{actividad.nombre}</h3>
                </div>
                <Badge className="bg-accent text-accent-foreground">{actividad.estado}</Badge>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Actividades;
