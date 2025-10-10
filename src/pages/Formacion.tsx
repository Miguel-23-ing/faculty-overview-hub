import { Link } from "react-router-dom";
import { ArrowLeft, GraduationCap, Award, Globe } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const formacionData = [
  {
    id: 1,
    nivel: "Doctorado (Ph.D.)",
    titulo: "Doctor en Ingeniería de Sistemas",
    institucion: "Universidad Nacional",
    tipo: "Interna",
    pais: "Colombia",
    añoGraduacion: 2020,
    estado: "Completado"
  },
  {
    id: 2,
    nivel: "Maestría",
    titulo: "Magíster en Inteligencia Artificial",
    institucion: "Universidad de Stanford",
    tipo: "Externa",
    pais: "Estados Unidos",
    añoGraduacion: 2015,
    estado: "Completado"
  },
  {
    id: 3,
    nivel: "Pregrado",
    titulo: "Ingeniero de Sistemas",
    institucion: "Universidad Nacional",
    tipo: "Interna",
    pais: "Colombia",
    añoGraduacion: 2012,
    estado: "Completado"
  }
];

const certificacionesData = [
  {
    id: 1,
    nombre: "AWS Certified Solutions Architect",
    institucion: "Amazon Web Services",
    año: 2023,
    tipo: "Internacional"
  },
  {
    id: 2,
    nombre: "Curso de Pedagogía Universitaria",
    institucion: "Universidad Nacional",
    año: 2021,
    tipo: "Nacional"
  }
];

const Formacion = () => {
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
          <h1 className="text-4xl font-bold text-foreground mb-2">Formación Académica</h1>
          <p className="text-muted-foreground">Nivel académico, certificaciones y formación continua</p>
        </div>

        {/* Resumen */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Nivel Máximo</p>
                  <p className="text-2xl font-bold text-primary">Doctorado</p>
                </div>
                <GraduationCap className="h-10 w-10 text-primary/60" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-accent/10 to-accent/5 border-accent/20">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Certificaciones</p>
                  <p className="text-3xl font-bold text-accent">{certificacionesData.length}</p>
                </div>
                <Award className="h-10 w-10 text-accent/60" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-success/10 to-success/5 border-success/20">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Formación Externa</p>
                  <p className="text-3xl font-bold text-success">
                    {formacionData.filter(f => f.tipo === "Externa").length}
                  </p>
                </div>
                <Globe className="h-10 w-10 text-success/60" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Formación Interna */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-foreground mb-4">Formación Interna (Universidad Icesi)</h2>
          <div className="space-y-4">
            {formacionData.filter(f => f.tipo === "Interna").map((formacion) => (
              <Card key={formacion.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-xl mb-2">{formacion.titulo}</CardTitle>
                      <div className="flex gap-2 flex-wrap">
                        <Badge variant="default">{formacion.nivel}</Badge>
                        <Badge variant="outline">{formacion.estado}</Badge>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Institución</p>
                      <p className="font-medium text-foreground">{formacion.institucion}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">País</p>
                      <p className="font-medium text-foreground">{formacion.pais}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Año de graduación</p>
                      <p className="font-medium text-foreground">{formacion.añoGraduacion}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Formación Externa */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-foreground mb-4">Formación Externa (Nacional e Internacional)</h2>
          <div className="space-y-4">
            {formacionData.filter(f => f.tipo === "Externa").map((formacion) => (
              <Card key={formacion.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-xl mb-2">{formacion.titulo}</CardTitle>
                      <div className="flex gap-2 flex-wrap">
                        <Badge variant="default">{formacion.nivel}</Badge>
                        <Badge variant="secondary">Externa</Badge>
                        <Badge variant="outline">{formacion.estado}</Badge>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Institución</p>
                      <p className="font-medium text-foreground">{formacion.institucion}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">País</p>
                      <p className="font-medium text-foreground">{formacion.pais}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Año de graduación</p>
                      <p className="font-medium text-foreground">{formacion.añoGraduacion}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Certificaciones */}
        <div>
          <h2 className="text-2xl font-semibold text-foreground mb-4">Certificaciones y Cursos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {certificacionesData.map((cert) => (
              <Card key={cert.id} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-3">{cert.nombre}</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Institución:</span>
                      <span className="text-sm font-medium">{cert.institucion}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Año:</span>
                      <span className="text-sm font-medium">{cert.año}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <Badge variant="outline">{cert.tipo}</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Formacion;
