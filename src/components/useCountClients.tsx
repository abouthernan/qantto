import { useEffect, useState } from "react";

const API_URL =
  import.meta.env.MODE === "development"
    ? "http://localhost:4321"
    : "https://www.qantto.io";

export const useCountClients = () => {
  const [count, setCount] = useState(9543);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`${API_URL}/api/clients`);
      const data = await response.json();
      setCount(data.count);
    };

    fetchData();

    const generateRandomInterval = () => {
      return (
        Math.floor(Math.random() * (5 * 60 * 1000 - 3 * 1000 + 1)) + 3 * 1000
      ); // Generar un número aleatorio entre 3s y 5m
    };

    let timer: ReturnType<typeof setTimeout>;

    const updateCount = async () => {
      setCount((prevCount) => {
        const updatedCount = prevCount + 1; // Incrementar el contador en 1

        fetch(`${API_URL}/api/clients`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ count: updatedCount }), // Enviar el valor actualizado del contador
        });

        return updatedCount; // Actualizar el estado del contador
      });
    };

    const startTimer = () => {
      const randomInterval = generateRandomInterval(); // Generar un nuevo intervalo de tiempo aleatorio
      timer = setTimeout(() => {
        updateCount();
        startTimer(); // Iniciar el siguiente intervalo después del tiempo aleatorio
      }, randomInterval);
    };

    startTimer(); // Iniciar el primer intervalo

    return () => clearTimeout(timer);
  }, []);

  return count;
};
