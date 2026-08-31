
import React, { useEffect, useState } from "react";
import { Text, StyleSheet, ScrollView } from "react-native";
import CustomButton from "../components/CustomButton";

export default function UseEffectDemo() {
  // Estado del contador para probar el useEffect con dependencias.
  const [contador, setContador] = useState(0);

  // Guardamos los mensajes para ver en pantalla cuándo se ejecuta cada efecto.
  const [logs, setLogs] = useState<string[]>([]);

  // Agrega un nuevo mensaje al inicio del registro.
  const addLog = (mensaje: string) => {
    setLogs((prevLogs) => [mensaje, ...prevLogs]);
  };

  // =========================================================
  // A. useEffect SIN dependencias
  //
  // Se ejecuta después de cada render del componente.
  // Aquí solo usamos console.log para evitar ciclos infinitos.
  // Si cambiáramos el estado aquí, provocaría otro render y
  // el efecto se volvería a ejecutar continuamente.
  // =========================================================
  useEffect(() => {
    console.log("Componente renderizado (useEffect SIN dependencias)");
  });

  // =========================================================
  // B. useEffect CON dependencias
  //
  // [contador] indica que este efecto se ejecuta cuando
  // cambia el valor del contador.
  // Aquí podemos actualizar logs porque el efecto no se
  // ejecuta nuevamente hasta que contador vuelva a cambiar.
  //
  // Con [] vacío, se ejecutaría solamente al montar el componente.
  // =========================================================
  useEffect(() => {
    console.log("El contador cambió a:", contador);
    addLog(`useEffect CON dependencias — contador cambió a: ${contador}`);
  }, [contador]);

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Demo: useEffect</Text>

      <Text style={styles.counterText}>Contador: {contador}</Text>

      <CustomButton
        title="Incrementar contador"
        onPress={() => setContador(contador + 1)}
      />

      <Text style={styles.logTitle}>Registro de ejecuciones:</Text>

      {logs.map((log, index) => (
        <Text key={index} style={styles.logText}>
          {log}
        </Text>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 15,
    textAlign: "center",
  },
  counterText: {
    fontSize: 18,
    textAlign: "center",
    marginBottom: 10,
  },
  logTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 8,
  },
  logText: {
    fontSize: 13,
    color: "gray",
    marginBottom: 4,
  },
});

