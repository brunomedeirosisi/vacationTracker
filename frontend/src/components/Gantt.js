import React, { Component } from 'react';
import { gantt } from 'dhtmlx-gantt';
import 'dhtmlx-gantt/codebase/dhtmlxgantt.css';
import './Gantt.css';

export default class Gantt extends Component {
    componentDidMount() {
        // Configurações iniciais do Gantt
        gantt.plugins({
            auto_scheduling: true
        });

        gantt.config.auto_types = true;
        gantt.config.auto_scheduling = true;
        gantt.config.auto_scheduling_compatibility = true;

        gantt.locale.labels.section_split = "Display";
        gantt.config.lightbox.project_sections = [
            { name: "description", height: 70, map_to: "text", type: "textarea", focus: true },
            {
                name: "split",
                type: "checkbox",
                map_to: "render",
                options: [{ key: "split", label: "Split Task" }]
            },
            { name: "time", type: "duration", readonly: true, map_to: "auto" }
        ];

        // Inicializa o Gantt na div
        gantt.init(this.ganttContainer);

        // Carrega os dados passados via props
        const { tasks } = this.props;
        gantt.parse(tasks);
    }

    componentDidUpdate(prevProps) {
        // Atualiza os dados do Gantt caso as props sejam alteradas
        if (prevProps.tasks !== this.props.tasks) {
            gantt.clearAll();
            gantt.parse(this.props.tasks);
        }
    }

    componentWillUnmount() {
        // Remove event listeners e limpa recursos ao desmontar o componente
        gantt.clearAll();
    }

    render() {
        return (
            <div
                ref={(input) => { this.ganttContainer = input }}
                style={{ width: '100%', height: '100%' }}
            ></div>
        );
    }
}
