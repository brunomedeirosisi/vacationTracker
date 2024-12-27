import React, { useEffect, useRef } from "react";
import { Timeline } from "vis-timeline/standalone";
import "vis-timeline/styles/vis-timeline-graph2d.min.css";
import "./Gantt.css"; // Certifique-se de criar o CSS correspondente

const Gantt = ({ tasks }) => {
  const timelineRef = useRef(null);

  useEffect(() => {
    const container = timelineRef.current;

    // Configuração da Timeline
    const options = {
      //stack: false,
      groupOrder: "id",
      editable: false,
      start: "2025-01-01",
      end: "2025-12-31",
      orientation: { axis: "top" },
      showCurrentTime: true,
      zoomable: true,
      horizontalScroll: true, // Habilita o scroll horizontal
      timeAxis: {
        scale: "week",
        step: 1
      }/*,
      format: {
        minorLabels: {
          week: "w [W]WW" // Exibe as semanas com um formato específico
        },
        majorLabels: {
          month: "MMMM YYYY"
        }
      }*/
    };

    // Criação da timeline com itens e grupos
    const timeline = new Timeline(container);
    timeline.setOptions(options);
    timeline.setGroups(tasks.groups);
    timeline.setItems(tasks.items);

    return () => {
      timeline.destroy();
    };
  }, [tasks]);

  return <div ref={timelineRef} style={{ width: "2560px", height: "300px", overflowX: "auto" , marginBottom: "20px"}} />;

  //return <div ref={timelineRef} style={{ width: "100%", height: "100%" }}></div>;
};

export default Gantt;
