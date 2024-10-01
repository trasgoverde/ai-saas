import ForceGraph3D from "3d-force-graph";
import StripeText from "three-spritetext";
import {
  CSS2DRenderer,
  CSS2DObject,
} from "three/examples/jsm/renderers/CSS2DRenderer.js";
import styles from "./Graph.module.css";

type NodeData = {
  id: string;
  label: string;
};

type EdgeData = {
  source: string;
  target: string;
  label: string;
};

type GraphData = {
  nodes: NodeData[];
  edges: EdgeData[];
};

type Node = {
  id: string;
  collapsed: boolean;
  childLinks: Link[];
  label?: string;
  color: string;
};

type Link = {
  id: number;
  label: string;
  relation: string | undefined;
  source: string;
  target: string;
  color: string;
};

type Props = {
  id: string;
  nodesData: GraphData;
  dark: boolean;
  ids: any[]; // Set the appropriate type for your ids
};

const Graph = ({ id, nodesData, dark, ids }: Props) => {
  const rootId = id;
  const rootIds = ids || [];

  const gData = {
    nodes: (nodesData.nodes || []).map((node: NodeData) => ({
      id: node.id,
      collapsed: node.id !== rootId,
      childLinks: [] as Link[],
      label: node.label,
      color: node.color || "#ff0000",
    })),
    links: (nodesData.edges || [])
      .filter(Boolean)
      .map((link: EdgeData, id: number) => ({
        id,
        label: link.label,
        relation: (nodesData.nodes || []).find(
          (node: NodeData) => node.id === link.target
        )?.label,
        source: link.source,
        target: link.target,
        color: "#ff0000",
      })),
  };
  const nodesById = Object.fromEntries(
    gData.nodes.map((node) => [node.id, node])
  );
  gData.links.forEach((link) => {
    nodesById[link.source].childLinks.push(link as Link);
  });

  const getPrunedTree = () => {
    const visibleNodes: Node[] = [];
    const visibleLinks: Link[] = [];

    if (!id) {
      for (let i = 0; i < rootIds.length; i++) {
        (function traverseTree(node = nodesById[rootIds[i]]) {
          visibleNodes.push(node as never);
          if (node.collapsed) return;
          visibleLinks.push(...node.childLinks);
          node.childLinks
            .map((link) =>
              typeof link.target === "object"
                ? link.target
                : nodesById[link.target]
            ) // get child node
            .forEach(traverseTree);
        })();
      }
    } else {
      (function traverseTree(node = nodesById[rootId]) {
        visibleNodes.push(node as never);
        if (node.collapsed) return;
        visibleLinks.push(...node.childLinks);
        node.childLinks
          .map((link) =>
            typeof link.target === "object"
              ? link.target
              : nodesById[link.target]
          ) // get child node
          .forEach(traverseTree);
      })();
    }
    return { nodes: visibleNodes, links: visibleLinks };
  };

  const elem = document.getElementById("3d-graph");

  const Graph = ForceGraph3D({
    extraRenderers: [new CSS2DRenderer()],
    // controlType: "orbit",
  })(elem!)
    .backgroundColor(dark ? "#062775" : "#F3F3F3")
    // .dagMode("td")
    // .width()
    // .height()
    // .linkDirectionalParticles(5)
    // .nodeLabel("label")
    .linkColor((link) => {
      return link.label === "parent" ? "#6e7d8b" : "#006fd6";
    })
    .linkThreeObjectExtend(true)
    .linkThreeObject((link) => {
      // extend link with text sprite
      const sprite = new StripeText(`${link.label} > ${link.relation}`);
      sprite.material.depthWrite = false; // make sprite background transparent
      sprite.color = "lightgrey";
      sprite.textHeight = 1;
      return sprite;
    })
    .linkWidth(0.1)
    .linkOpacity(1)
    .linkPositionUpdate((sprite, { start, end }) => {
      const middlePos = Object.assign(
        ...["x", "y", "z"].map((c) => ({
          [c]: start[c] + (end[c] - start[c]) / 2, // calc middle point
        }))
      );
      // Position sprite
      Object.assign(sprite.position, middlePos);
    })
    // .nodeColor((node) =>
    //   !node.childLinks.length ? "green" : node.collapsed ? "red" : "yellow"
    // )
    .nodeOpacity(1)
    .onNodeHover(
      (node) =>
        (elem.style.cursor = node && node.childLinks.length ? "pointer" : null)
    )
    .onNodeClick((node) => {
      // if (node.childLinks.length) {
      //   // Es un nodo padre
      //   console.log("Parent node clicked");
      //   console.log({ nodoPadre: node });
      //   node.collapsed = !node.collapsed; // toggle collapse state
      //   /*
      //   //MODAL
      //   // Crear elementos del modal
      //   var modal = document.createElement('div');
      //   modal.id = 'myModal';
      //   modal.style.display = 'none';
      //   modal.style.position = 'fixed';
      //   modal.style.top = '0';
      //   modal.style.left = '0';
      //   modal.style.width = '100%';
      //   modal.style.height = '100%';
      //   modal.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
      //   modal.style.display = 'flex';
      //   modal.style.alignItems = 'center';
      //   modal.style.justifyContent = 'center';
      //   var modalContent = document.createElement('div');
      //   modalContent.className = 'modal-content';
      //   modalContent.style.backgroundColor = '#fff';
      //   modalContent.style.padding = '20px';
      //   modalContent.style.borderRadius = '5px';
      //   modalContent.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.3)';
      //   var closeButton = document.createElement('span');
      //   closeButton.className = 'close';
      //   closeButton.innerHTML = '&times;';
      //   closeButton.style.position = 'absolute';
      //   closeButton.style.top = '10px';
      //   closeButton.style.right = '10px';
      //   closeButton.style.cursor = 'pointer';
      //   closeButton.onclick = closeModal;
      //   modalContent.appendChild(closeButton);
      //   modalContent.innerHTML += `<div >
      //                             <p>Nombre: ${node.label}</p>
      //                             <p>ID: ${node.id}</p>
      //                             <p>FY: ${node.fy}</p>
      //                             <p>VX: ${node.vx}</p>
      //                             <p>VY: ${node.vy}</p>
      //                             <p>VZ: ${node.vz}</p>
      //                             <p>X: ${node.x}</p>
      //                             <p>Y: ${node.y}</p>
      //                             <p>Z: ${node.z}</p>
      //                             </div>`
      //   modal.appendChild(modalContent);
      //   // Agregar el modal al cuerpo del documento
      //   document.body.appendChild(modal);
      //   // Función para abrir el modal
      //   function openModal() {
      //     modal.style.display = 'flex';
      //   }
      //   // Función para cerrar el modal
      //   function closeModal() {
      //     modal.style.display = 'none';
      //   }
      //   // Cerrar el modal si el usuario hace clic fuera de él
      //   window.onclick = function (event) {
      //     if (event.target == modal) {
      //       closeModal();
      //     }
      //   };
      //   // Crear un botón para abrir el modal
      //   var openButton = document.createElement('button');
      //   openButton.textContent = 'Abrir Modal';
      //   openButton.onclick = openModal;
      //   // Agregar el botón al cuerpo del documento
      //   document.body.appendChild(openButton);
      //   //TEST
      //   */
      //   Graph.graphData(getPrunedTree());
      // } else {
      //   // Es un nodo hijo
      //   console.log("Child node clicked");
      //   //console.table([{ Type: "Hijo", Label: node.label }])
      //   console.log({ nodoHijo: node });
      //   // Aqui iria el modal del hijo
      // }
      if (node.collapsed) {
        const distance = 60;
        const distRatio = 1 + distance / Math.hypot(node.x, node.y, node.z);

        const newPos =
          node.x || node.y || node.z
            ? {
                x: node.x * distRatio,
                y: node.y * distRatio,
                z: node.z * distRatio,
              }
            : { x: 0, y: 0, z: distance }; // special case if node is in (0,0,0)

        Graph.cameraPosition(
          newPos, // new position
          node, // lookAt ({ x, y, z })
          4500 // ms transition duration
        );
      }
      node.collapsed = !node.collapsed;
      Graph.graphData(getPrunedTree());
    })
    .nodeThreeObject((node) => {
      const nodeEl = document.createElement("div");
      nodeEl.textContent = node.label;
      nodeEl.className = dark ? styles.nodeLabelDark : styles.nodeLabel;
      nodeEl.addEventListener("click", (event) => {
        event.stopPropagation();
        if (node.childLinks.length) {
          // Es un nodo padre
          node.collapsed = !node.collapsed;
          Graph.graphData(getPrunedTree());
        } else {
          // Es un nodo hijo
          console.log("Nodo hijo pulsado");
        }
      });
      return new CSS2DObject(nodeEl);
    })
    // .nodeRelSize((node) =>
    //   !node.childLinks.length ? 2 : node.collapsed ? 4 : 3
    // )
    .nodeRelSize(4)
    .nodeThreeObjectExtend(true)
    .graphData(getPrunedTree());

  // Separation between nodes
  Graph.d3Force("charge").strength(-20);
};

export default Graph;
