import ReactECharts from "echarts-for-react";
import { setSelectedNode } from "../../../store/actions/actionMyGraph";
import { useDispatch } from "react-redux";
import { Echart2DProps } from "./types";
import ResetIcon from "../../../assets/icons/reset.svg";
import styles from "../../pages/NodeLinksPage/NodeLinksPage.module.css";

const Echart2D: React.FC<Echart2DProps> = ({
  nodes,
  handleMenuItemClick,
  handleRestoreClick,
}) => {
  const dispatch = useDispatch();
  if (!nodes) return null;

  const handleNodeClick = async (event: { data: { id: string } }) => {
    if (event.data.id !== "") {
      dispatch(setSelectedNode(event.data.id));
      try {
        await handleMenuItemClick(event.data.id);
      } catch (error) {
        console.error(error);
      }
    }
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
        data: [nodes],
        top: "20%",
        left: "40%",
        bottom: "12%",
        right: "10%",
        symbolSize: 7,
        initialTreeDepth: 3,
        symbol: "diamond",
        symbolKeepAspect: false,
        leaves: {},
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
    <div
      style={{
        height: "100%",
        width: "100%",
        position: "absolute",
      }}
    >
      <ReactECharts
        option={options}
        style={{
          height: "100%",
          width: "100%",
        }}
        onEvents={{
          click: handleNodeClick,
        }}
      />
      <button
        className={styles.icon}
        onClick={handleRestoreClick}
        style={{
          position: "absolute",
          display: "flex",
          alignItems: "center",
          objectPosition: "center",
          paddingLeft: "10px",
          paddingRight: "10px",
          top: "0px",
          right: "130px",
          height: "30px",
        }}
      >
        <img src={ResetIcon} alt="reset-icon" />
      </button>
    </div>
  );
};

export default Echart2D;
