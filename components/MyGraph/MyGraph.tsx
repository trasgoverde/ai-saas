import React, { useEffect, useRef, useState } from 'react';
import '@react-sigma/core/lib/react-sigma.min.css';
import Graph from 'graphology';
import { useLoadGraph, useRegisterEvents, useSetSettings, useSigma } from '@react-sigma/core';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedNode } from '../../../store/actions/actionMyGraph';

const MyGraph = ({ graphData, getDataDetail, hideClearButton }) => {
  const dispatch = useDispatch();
  const selectedNode = useSelector((state) => state.reducerMyGraph.selectedNode);
  const loadGraph = useLoadGraph();
  const setSettings = useSetSettings();
  const registerEvents = useRegisterEvents();
  const sigma = useSigma();
  const graphRef = useRef(null);
  const draggedNode = useRef(null);


  const [hoveredNode, setHoveredNode] = useState<string | null>(null);


  useEffect(() => {
    if (graphData) {
      const graph = new Graph();

      graphData.nodes.forEach((node) => {
        graph.addNode(node.id, {
          label: node.label,
          size: node.size,
          x: node.x,
          y: node.y,
          color: node.color,
        });
      });

      graphData.edges.forEach((edge) => {
        graph.addEdgeWithKey(edge.id, edge.source, edge.target, {
          label: edge.label,
        });
      });
      loadGraph(graph);
      graphRef.current = graph;
    }
  }, [graphData, loadGraph]);




  useEffect(() => {
    registerEvents({
      clickNode: (event) => handleNodeClick(event),
      // clickNode: (event) => handleClick(event),
      // doubleClickNode: (event) => handleNodeClick(event),
      // rightClickNode: (event) => console.log("rightClickNode", event.event, event.node, event.preventSigmaDefault),
      // wheelNode: (event) => console.log("wheelNode", event.event, event.node, event.preventSigmaDefault),
      // downNode: (event) => console.log("downNode", event.event, event.node, event.preventSigmaDefault),
      // enterNode: (event) => console.log("enterNode", event.node),
      // leaveNode: (event) => console.log("leaveNode", event.node),


      downNode: (event) => handleNodeMouseDown(event),
      mousemove: (event) => handleNodeMouseMove(event),
      mouseup: handleNodeMouseUp,
      touchstart: (event) => handleNodeMouseDown(event),
      touchmove: (event) => handleNodeMouseMove(event),
      touchend: handleNodeMouseUp,
      enterNode: ({ node }) => setHoveredNode(node),
      leaveNode: () => setHoveredNode(null),
    });

    return () => {
      registerEvents({});
    };
  }, [registerEvents]);




  useEffect(() => {
    const nodeReducer = (node, data) => {
      const graph = sigma.getGraph();
      const newData = { ...data, highlighted: data.highlighted || false };

      if (selectedNode && graph) {
        if (node === selectedNode || graph.neighbors(selectedNode).includes(node)) {
          newData.highlighted = true;
        } else {
          newData.color = "#E2E2E2";
          newData.highlighted = false;
        }
      }

      if (hoveredNode && graph) {
        if (node === hoveredNode || graph.neighbors(hoveredNode).includes(node)) {
          newData.highlighted = true;
        } else {
          newData.color = "#E2E2E2";
          newData.highlighted = false;
        }
      }

      return newData;
    };

    const edgeReducer = (edge, data) => {
      const graph = sigma.getGraph();
      const newData = { ...data, hidden: false };
      if (selectedNode && graph && !graph.extremities(edge).includes(selectedNode)) {
        newData.hidden = true;
      }

      if (hoveredNode && graph && !graph.extremities(edge).includes(hoveredNode)) {
        newData.hidden = true;
      }

      return newData;
    };

    setSettings({ nodeReducer, edgeReducer });
  }, [setSettings, selectedNode, hoveredNode, sigma]);


  const handleNodeClick = (event) => {

    event.preventSigmaDefault();
    

    if (selectedNode === event.node) {
      dispatch(setSelectedNode(null));
    } else {
      dispatch(setSelectedNode(event.node));
      getDataDetail(event.node);
    }

  };



  const handleNodeMouseDown = (event) => {
    if (graphRef.current) {
      draggedNode.current = event.node;
    }
  };

  const handleNodeMouseMove = (event) => {
    if (draggedNode.current && graphRef.current) {
      const graphCoords = sigma.viewportToGraph(event);

      const draggedNodeId = draggedNode.current;
      graphRef.current.setNodeAttribute(draggedNodeId, 'x', graphCoords.x);
      graphRef.current.setNodeAttribute(draggedNodeId, 'y', graphCoords.y);

      event.preventSigmaDefault();
      event.original.preventDefault();
      event.original.stopPropagation();

      sigma.refresh();
    }
  };

  const handleNodeMouseUp = () => {
    draggedNode.current = null;
  };

  const handleClick = (event) => {
    event.preventSigmaDefault();
    dispatch(setSelectedNode(null));
  };


  const handleClearSelection = () => {
    dispatch(setSelectedNode(null));
  };

  return (
    <div className="my-graph-container">
    {!hideClearButton && (
      <button className="clear-button" onClick={handleClearSelection}>
        Clear selection
      </button>
    )}
  </div>
  );
};

export default MyGraph;
