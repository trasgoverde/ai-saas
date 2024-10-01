import ReactECharts from "echarts-for-react";
import styles from "./TwoDGraph.module.css";

const TwoDGraph = ({ nodes }: any) => {
  if (nodes === null)
    return (
      <div className={styles.box}>
        <h2>You must select a taxonomy to display the 2D design</h2>
      </div>
    );

  const data = {
    name: nodes.name,
    children: nodes.sons.map((son) => ({
      name: son.name,
      children: son.sons.map((son) => ({
        name: son.name,
        children: son.sons,
        value: son.kind,
      })),
    })),
  };

  const options = {
    tooltip: {
      trigger: "item",
      triggerOn: "mousemove",
    },
    series: [
      {
        type: "tree",
        name: "tree1",
        layout: "radial",
        data: [data],
        top: "30%",
        left: "40%",
        bottom: "12%",
        right: "10%",
        symbolSize: 7,
        initialTreeDepth: 3,
        symbol: "diamond",
        symbolKeepAspect: false,
        // label: {
        //   position: ["0%", "100%"],
        //   verticalAlign: "middle",
        //   // align: "right",
        //   // color: "blue",
        // },
        leaves: {
          // label: {
          //   // position: "left",
          //   position: ["0%", "10%"],
          //   verticalAlign: "middle",
          //   align: "right",
          // },
        },
        emphasis: {
          focus: "descendant",
        },
        roam: "move",
        zoom: 0.8,
        expandAndCollapse: true,
        animationDuration: 400,
        animationDurationUpdate: 750,
      },
    ],
  };
  return (
    <div className={styles.box}>
      <ReactECharts
        option={options}
        style={{
          height: "100%",
          width: "100%",
        }}
        onEvents={{
          click: (e) => {
            console.log(e.name);
          },
        }}
      />
    </div>
  );
};
export default TwoDGraph;
