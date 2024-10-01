import { useEffect, useState } from "react";
import styles from "./Graph.module.css";
import StripeText from "three-spritetext";
import {
  CSS2DObject,
  CSS2DRenderer,
} from "three/examples/jsm/renderers/CSS2DRenderer.js";
import LoadingOverlay from "../LoadingModal/LoadingModal";
import ForceGraph3D from "3d-force-graph";
import { WebGLRenderer } from "three";

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
type GraphData = {
  nodes: Node[];
  edges: Link[];
};
type Props = {
  id: string;
  nodesData: GraphData;
  dark?: boolean;
  ids: any[]; // Set the appropriate type for your ids
};

const Graph = ({ id, nodesData, dark, ids }: Props) => {
  console.log(id, "id");
  console.log(nodesData, "nodes");
  console.log(ids, "ids");

  const [loading, setLoading] = useState(false);
  const rootId = id;
  const rootIds = ids || [];

  const gData = {
    nodes: (nodesData.nodes || []).map((node: Node) => ({
      id: node.id,
      collapsed: node.id !== rootId,
      childLinks: [] as Link[],
      label: node.label,
      color: node.color || "#ff0000",
    })),
    links: (nodesData.edges || [])
      .filter(Boolean)
      .map((link: Link, id: number) => ({
        id,
        label: link.label,
        relation: (nodesData.nodes || []).find(
          (node: Node) => node.id === link.target
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

    if (id === null) {
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

  const element = document.getElementById("3d-graph");

  const Graph = ForceGraph3D({
    extraRenderers: [new CSS2DRenderer()],
  })(element!)
    .backgroundColor("#F3F3F3")
    .linkColor((link) => {
      return link.label === "parent" ? "#6e7d8b" : "#006fd6";
    })
    .linkThreeObjectExtend(true)
    .linkThreeObject((link) => {
      const sprite = new StripeText(`${link.label} > ${link.relation}`);
      // sprite.material.depthWrite = false; // make sprite background transparent
      sprite.color = "black";
      sprite.textHeight = 0.1;
      sprite.backgroundColor = "white";
      sprite.padding = 0.5;
      sprite.borderRadius = 2;
      sprite.fontSize = 10;
      return sprite;
    })
    .linkWidth(0.1)
    .linkOpacity(1)
    .linkPositionUpdate((sprite, { start, end }) => {
      const middlePos = Object.assign(
        ...["x", "y", "z"].map((c) => ({
          [c]: start[c] + (end[c] - start[c]) / 2,
        }))
      );
      Object.assign(sprite.position, middlePos);
    })
    .onNodeHover(
      (node) =>
        (element.style.cursor =
          node && node.childLinks.length ? "pointer" : null)
    )
    .onNodeClick((node) => {
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
    .nodeRelSize(4)
    .nodeOpacity(1)
    .nodeThreeObjectExtend(true)
    .graphData(getPrunedTree());

  Graph.d3Force("charge").strength(-20);

  useEffect(() => {
    element && Graph(element);
  });

  return Graph(element);
};

export default Graph;
