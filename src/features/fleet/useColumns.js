import { useEffect, useState } from "react";

export default function useColumns() {
  const [columns, setColumns] = useState(3);

  useEffect(() => {
    const apply = () => {
      const width = window.innerWidth;
      if (width < 720) setColumns(1);
      else if (width < 1040) setColumns(2);
      else setColumns(3);
    };
    apply();
    window.addEventListener("resize", apply);
    return () => window.removeEventListener("resize", apply);
  }, []);

  return columns;
}
