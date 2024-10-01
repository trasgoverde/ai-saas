import styles from "./PublicLayout.module.css";
import ItemIzqLogin from "../../../assets/icons/item-izq.svg";
import ItemIzqSm from "../../../assets/icons/item-izq-sm.svg";
import DotIzqLogin from "../../../assets/icons/dot.svg";
import DotBigLogin from "../../../assets/icons/dotBig.svg";
import CircleItem from "../../../assets/icons/circle.svg";
import CircleBigItem from "../../../assets/icons/circleBig.svg";
import useWindowSize from "../../../utils/useWindowSize";

type Props = {
  InfoElement?: JSX.Element;
  FormElement?: JSX.Element;
};

const PublicLayout = ({ InfoElement, FormElement }: Props) => {
  const { isXl, windowSize } = useWindowSize();

  if (windowSize && !isXl)
    return (
      <div className={styles.container}>
        <div className={styles.infoTwo}>
          <div className={styles.divUp}>
            <img src={CircleBigItem} alt="circleBigItem" />
          </div>
          <div className={styles.boxTwoSm}>
            <div className={styles.divFormTwo}>
              <div className={styles.informationTwo}>{InfoElement}</div>
              <div className={styles.formInputsTwo}>{FormElement}</div>
            </div>
          </div>
          <div className={styles.divDown}>
            <div></div>
            <img src={ItemIzqSm} alt="circleBigItem" />
          </div>
        </div>
      </div>
    );

  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <div className={styles.box}>
          <img className={styles.dot} src={DotIzqLogin} alt="" />
          <div className={styles.boxTwo}>
            <div className={styles.divInfo}>
              <img
                className={styles.dotTwo}
                src={DotIzqLogin}
                alt=""
              />
              <div className={styles.information}>{InfoElement}</div>
              <img
                className={styles.circle}
                src={CircleItem}
                alt=""
              />
              <img
                className={styles.dotBig}
                src={DotBigLogin}
                alt=""
              />
            </div>
            <div className={styles.divForm}>
              <div className={styles.formInputs}>{FormElement}</div>
            </div>
          </div>
          <img src={ItemIzqLogin} alt="item-izq-login" />
        </div>
      </div>
      <div className={styles.form}>
        <div className={styles.boxThree}>
          <img src={CircleBigItem} alt="circleBig" />
        </div>
      </div>
    </div>
  );
};

export default PublicLayout;
